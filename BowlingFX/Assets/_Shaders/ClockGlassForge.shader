// Shader created with Shader Forge Beta 0.17 
// Shader Forge (c) Joachim 'Acegikmo' Holmer
// Note: Manually altering this data may prevent you from opening it in Shader Forge
/*SF_DATA;ver:0.17;sub:START;pass:START;ps:lgpr:1,nrmq:1,limd:1,blpr:5,bsrc:3,bdst:7,culm:0,dpts:2,wrdp:False,uamb:True,mssp:True,ufog:False,aust:True,igpj:True,qofs:0,lico:1,qpre:3,flbk:,rntp:2,lmpd:True,lprd:False,enco:False,frtr:True,vitr:True,dbil:False,rmgx:True,hqsc:True,hqlp:False,fgom:False,fgoc:False,fgod:False,fgor:False,fgmd:0,fgcr:0.5,fgcg:0.5,fgcb:0.5,fgca:1,fgde:0.001,fgrn:100,fgrf:511.74;n:type:ShaderForge.SFN_Final,id:1,x:32719,y:32712|emission-2-OUT,alpha-8-OUT;n:type:ShaderForge.SFN_Lerp,id:2,x:33025,y:32658|A-5-OUT,B-11-RGB,T-8-OUT;n:type:ShaderForge.SFN_Multiply,id:5,x:33278,y:32508|A-6-OUT,B-7-RGB;n:type:ShaderForge.SFN_Slider,id:6,x:33479,y:32382,ptlb:CubeSlider,min:0,cur:1,max:1;n:type:ShaderForge.SFN_Cubemap,id:7,x:33588,y:32563,ptlb:CubeMap,cube:8045f1cf44c5e48d191d2419e05bf27d,pvfc:0;n:type:ShaderForge.SFN_Power,id:8,x:33375,y:32971|VAL-9-OUT,EXP-10-OUT;n:type:ShaderForge.SFN_Fresnel,id:9,x:33730,y:32906|NRM-12-OUT;n:type:ShaderForge.SFN_Slider,id:10,x:33797,y:33185,ptlb:FresnelSlider,min:0,cur:0.05263162,max:1;n:type:ShaderForge.SFN_Color,id:11,x:33397,y:32712,ptlb:CubeColor,c1:0.2776276,c2:0.5306885,c3:0.5808823,c4:1;n:type:ShaderForge.SFN_ViewVector,id:12,x:33951,y:32756;proporder:11-6-7-10;pass:END;sub:END;*/

Shader "Shader Forge/ClockGlassForge" {
    Properties {
        _CubeColor ("CubeColor", Color) = (0.2776276,0.5306885,0.5808823,1)
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
            Blend SrcAlpha OneMinusSrcAlpha
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
                float3 normalDirection = normalize(i.normalDir);
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
                float node_8 = pow((1.0-max(0,dot(viewDirection, viewDirection))),_FresnelSlider);
                float3 emissive = lerp((_CubeSlider*texCUBE(_CubeMap,viewReflectDirection).rgb),_CubeColor.rgb,node_8);
                float3 finalColor = emissive;
/// Final Color:
                return fixed4(finalColor,node_8);
            }
            ENDCG
        }
    }
    FallBack "Diffuse"
    CustomEditor "ShaderForgeMaterialInspector"
}
