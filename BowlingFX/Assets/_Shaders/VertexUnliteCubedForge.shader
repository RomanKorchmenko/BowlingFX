// Shader created with Shader Forge Beta 0.17 
// Shader Forge (c) Joachim 'Acegikmo' Holmer
// Note: Manually altering this data may prevent you from opening it in Shader Forge
/*SF_DATA;ver:0.17;sub:START;pass:START;ps:lgpr:1,nrmq:0,limd:0,blpr:0,bsrc:0,bdst:0,culm:0,dpts:2,wrdp:True,uamb:True,mssp:True,ufog:True,aust:True,igpj:False,qofs:0,lico:0,qpre:1,flbk:Mobile/Unlit (Supports Lightmap),rntp:1,lmpd:True,lprd:False,enco:True,frtr:True,vitr:False,dbil:False,rmgx:True,hqsc:True,hqlp:False,fgom:False,fgoc:False,fgod:False,fgor:False,fgmd:0,fgcr:0.5,fgcg:0.5,fgcb:0.5,fgca:1,fgde:0.01,fgrn:0,fgrf:300;n:type:ShaderForge.SFN_Final,id:1,x:32400,y:32435|emission-177-OUT;n:type:ShaderForge.SFN_Cubemap,id:3,x:33725,y:32659,ptlb:Cube,cube:8045f1cf44c5e48d191d2419e05bf27d,pvfc:0;n:type:ShaderForge.SFN_Tex2d,id:4,x:33288,y:32868,ptlb:Texture,tex:48a42912b1f39c943b95d16984906941,ntxv:0,isnm:False;n:type:ShaderForge.SFN_Multiply,id:5,x:33183,y:32582|A-6-OUT,B-4-RGB;n:type:ShaderForge.SFN_Multiply,id:6,x:33357,y:32582|A-3-RGB,B-7-OUT;n:type:ShaderForge.SFN_Slider,id:7,x:33563,y:32927,ptlb:CubeForce,min:0.5,cur:0.9022557,max:5;n:type:ShaderForge.SFN_Multiply,id:13,x:33059,y:32484|A-14-RGB,B-5-OUT;n:type:ShaderForge.SFN_Color,id:14,x:33314,y:32386,ptlb:Color,c1:1,c2:0.9310346,c3:0,c4:1;n:type:ShaderForge.SFN_LightColor,id:175,x:33114,y:32984;n:type:ShaderForge.SFN_LightAttenuation,id:176,x:32977,y:33175;n:type:ShaderForge.SFN_Multiply,id:177,x:32676,y:32536|A-197-OUT,B-13-OUT;n:type:ShaderForge.SFN_VertexColor,id:182,x:33113,y:32324;n:type:ShaderForge.SFN_Multiply,id:188,x:32540,y:32141|A-197-OUT,B-190-OUT;n:type:ShaderForge.SFN_Slider,id:190,x:32933,y:32634,ptlb:VertexMultyply,min:0,cur:0.5263158,max:1;n:type:ShaderForge.SFN_Add,id:197,x:32834,y:32310|A-182-RGB,B-190-OUT;proporder:3-4-7-14-190;pass:END;sub:END;*/

Shader "Shader Forge/VertexUnliteCubedForge" {
    Properties {
        _Cube ("Cube", Cube) = "_Skybox" {}
        _Texture ("Texture", 2D) = "white" {}
        _CubeForce ("CubeForce", Range(0.5, 5)) = 0.5
        _Color ("Color", Color) = (1,0.9310346,0,1)
        _VertexMultyply ("VertexMultyply", Range(0, 1)) = 0
    }
    SubShader {
        Tags {
            "RenderType"="Opaque"
        }
        LOD 200
        Pass {
            Name "ForwardBase"
            Tags {
                "LightMode"="ForwardBase"
            }
            
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #define UNITY_PASS_FORWARDBASE
            #include "UnityCG.cginc"
            #include "Lighting.cginc"
            #pragma multi_compile_fwdbase_fullshadows
            #pragma exclude_renderers xbox360 ps3 flash 
            #pragma target 3.0
            #ifndef LIGHTMAP_OFF
                sampler2D unity_Lightmap;
                float4 unity_LightmapST;
                #ifndef DIRLIGHTMAP_OFF
                    sampler2D unity_LightmapInd;
                #endif
            #endif
            uniform samplerCUBE _Cube;
            uniform sampler2D _Texture; uniform float4 _Texture_ST;
            uniform float _CubeForce;
            uniform float4 _Color;
            uniform float _VertexMultyply;
            struct VertexInput {
                float4 vertex : POSITION;
                float3 normal : NORMAL;
                float4 tangent : TANGENT;
                float4 uv0 : TEXCOORD0;
                float4 uv1 : TEXCOORD1;
                float4 vertexColor : COLOR;
            };
            struct VertexOutput {
                float4 pos : SV_POSITION;
                float4 uv0 : TEXCOORD0;
                float4 posWorld : TEXCOORD1;
                float3 normalDir : TEXCOORD2;
                float3 tangentDir : TEXCOORD3;
                float3 binormalDir : TEXCOORD4;
                float4 vertexColor : COLOR;
                #ifndef LIGHTMAP_OFF
                    float2 uvLM : TEXCOORD5;
                #endif
            };
            VertexOutput vert (VertexInput v) {
                VertexOutput o;
                o.uv0 = v.uv0;
                o.vertexColor = v.vertexColor;
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
                float node_190 = _VertexMultyply;
                float3 node_197 = (i.vertexColor.rgb+node_190);
                float3 emissive = (node_197*(_Color.rgb*((texCUBE(_Cube,viewReflectDirection).rgb*_CubeForce)*tex2D(_Texture,TRANSFORM_TEX(i.uv0.rg, _Texture)).rgb)));
                float3 finalColor = emissive;
/// Final Color:
                return fixed4(finalColor,1);
            }
            ENDCG
        }
    }
    FallBack "Mobile/Unlit (Supports Lightmap)"
    CustomEditor "ShaderForgeMaterialInspector"
}
