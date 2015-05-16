// Shader created with Shader Forge Beta 0.17 
// Shader Forge (c) Joachim 'Acegikmo' Holmer
// Note: Manually altering this data may prevent you from opening it in Shader Forge
/*SF_DATA;ver:0.17;sub:START;pass:START;ps:lgpr:1,nrmq:0,limd:0,blpr:5,bsrc:0,bdst:1,culm:0,dpts:2,wrdp:False,uamb:True,mssp:True,ufog:False,aust:False,igpj:True,qofs:0,lico:0,qpre:3,flbk:,rntp:2,lmpd:True,lprd:False,enco:False,frtr:True,vitr:True,dbil:False,rmgx:True,hqsc:False,hqlp:False,fgom:False,fgoc:False,fgod:False,fgor:False,fgmd:0,fgcr:0.5,fgcg:0.5,fgcb:0.5,fgca:1,fgde:0.001,fgrn:100,fgrf:511.74;n:type:ShaderForge.SFN_Final,id:1,x:32719,y:32712|emission-2-OUT;n:type:ShaderForge.SFN_Lerp,id:2,x:32996,y:32795|A-13-OUT,B-11-RGB,T-8-OUT;n:type:ShaderForge.SFN_Multiply,id:5,x:33155,y:32413|A-6-OUT,B-7-RGB;n:type:ShaderForge.SFN_Slider,id:6,x:33605,y:32313,ptlb:CubeSlider,min:0,cur:0.1522188,max:1;n:type:ShaderForge.SFN_Cubemap,id:7,x:33588,y:32563,ptlb:CubeMap,cube:d2c33a614f8ef3744ae67b650deedb6b,pvfc:0;n:type:ShaderForge.SFN_Power,id:8,x:33469,y:33063|VAL-9-OUT,EXP-10-OUT;n:type:ShaderForge.SFN_Fresnel,id:9,x:33795,y:32839|NRM-14-OUT;n:type:ShaderForge.SFN_Slider,id:10,x:33916,y:33199,ptlb:FresnelSlider,min:0,cur:1,max:1;n:type:ShaderForge.SFN_Color,id:11,x:33386,y:32769,ptlb:CubeColor,c1:0,c2:0.7608523,c3:0.9117647,c4:1;n:type:ShaderForge.SFN_ViewVector,id:12,x:34148,y:32678;n:type:ShaderForge.SFN_Add,id:13,x:33196,y:32669|A-6-OUT,B-7-RGB;n:type:ShaderForge.SFN_ViewReflectionVector,id:14,x:33982,y:32989;proporder:11-6-7-10;pass:END;sub:END;*/

Shader "Shader Forge/BallForge" {
    Properties {
        _CubeColor ("CubeColor", Color) = (0,0.7608523,0.9117647,1)
        _CubeSlider ("CubeSlider", Range(0, 1)) = 0
        _CubeMap ("CubeMap", Cube) = "_Skybox" {}
        _FresnelSlider ("FresnelSlider", Range(0, 1)) = 0
    }
    SubShader {
        Tags {
            "IgnoreProjector"="True"
            "Queue"="Transparent"
            "RenderType"="Transparent"
        }
        LOD 200
        Pass {
            Name "ForwardBase"
            Tags {
                "LightMode"="ForwardBase"
            }
            Blend One Zero
            ZWrite Off
            Fog {Mode Off}
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #define UNITY_PASS_FORWARDBASE
            #include "UnityCG.cginc"
            #include "Lighting.cginc"
            #pragma multi_compile_fwdbase
            #pragma exclude_renderers xbox360 ps3 flash 
            #pragma target 3.0
            #ifndef LIGHTMAP_OFF
                sampler2D unity_Lightmap;
                float4 unity_LightmapST;
                #ifndef DIRLIGHTMAP_OFF
                    sampler2D unity_LightmapInd;
                #endif
            #endif
            uniform float _CubeSlider;
            uniform samplerCUBE _CubeMap;
            uniform float _FresnelSlider;
            uniform float4 _CubeColor;
            struct VertexInput {
                float4 vertex : POSITION;
                float3 normal : NORMAL;
                float4 tangent : TANGENT;
                float4 uv1 : TEXCOORD1;
            };
            struct VertexOutput {
                float4 pos : SV_POSITION;
                float4 posWorld : TEXCOORD0;
                float3 normalDir : TEXCOORD1;
                float3 tangentDir : TEXCOORD2;
                float3 binormalDir : TEXCOORD3;
                #ifndef LIGHTMAP_OFF
                    float2 uvLM : TEXCOORD4;
                #endif
            };
            VertexOutput vert (VertexInput v) {
                VertexOutput o;
                o.normalDir = mul(float4(v.normal,0), _World2Object).xyz;
                o.tangentDir = normalize( mul( _Object2World, float4( v.tangent.xyz, 0.0 ) ).xyz );
                o.binormalDir = normalize(cross(o.normalDir, o.tangentDir) * v.tangent.w);
                o.posWorld = mul(_Object2World, v.vertex);
                o.pos = mul(UNITY_MATRIX_MVP, v.vertex);
                #ifndef LIGHTMAP_OFF
                    o.uvLM = v.uv1.xy * unity_LightmapST.xy + unity_LightmapST.zw;
                #endif
                return o;
            }
            fixed4 frag(VertexOutput i) : COLOR {
                float3x3 tangentTransform = float3x3( i.tangentDir, i.binormalDir, i.normalDir);
                float3 viewDirection = normalize(_WorldSpaceCameraPos.xyz - i.posWorld.xyz);
                float3 normalDirection = i.normalDir;
                float3 viewReflectDirection = reflect( -viewDirection, normalDirection );
                #ifndef LIGHTMAP_OFF
                    float4 lmtex = tex2D(unity_Lightmap,i.uvLM);
                    #ifndef DIRLIGHTMAP_OFF
                        float3 lightmap = DecodeLightmap(lmtex);
                        float3 scalePerBasisVector = DecodeLightmap(tex2D(unity_LightmapInd,i.uvLM));
                        UNITY_DIRBASIS
                        half3 normalInRnmBasis = saturate (mul (unity_DirBasis, float3(0,0,1)));
                        lightmap *= dot (normalInRnmBasis, scalePerBasisVector);
                    #else
                        float3 lightmap = DecodeLightmap(tex2D(unity_Lightmap,i.uvLM));
                    #endif
                #endif
////// Lighting:
////// Emissive:
                float node_6 = _CubeSlider;
                float4 node_7 = texCUBE(_CubeMap,viewReflectDirection);
                float3 emissive = lerp((node_6+node_7.rgb),_CubeColor.rgb,pow((1.0-max(0,dot(viewReflectDirection, viewDirection))),_FresnelSlider));
                float3 finalColor = emissive;
/// Final Color:
                return fixed4(finalColor,1);
            }
            ENDCG
        }
    }
    FallBack "Diffuse"
    CustomEditor "ShaderForgeMaterialInspector"
}
