// Shader created with Shader Forge Beta 0.17 
// Shader Forge (c) Joachim 'Acegikmo' Holmer
// Note: Manually altering this data may prevent you from opening it in Shader Forge
/*SF_DATA;ver:0.17;sub:START;pass:START;ps:lgpr:1,nrmq:0,limd:0,blpr:1,bsrc:3,bdst:7,culm:0,dpts:2,wrdp:False,uamb:True,mssp:True,ufog:False,aust:True,igpj:True,qofs:0,lico:0,qpre:3,flbk:Mobile/Unlit (Supports Lightmap),rntp:2,lmpd:True,lprd:False,enco:True,frtr:True,vitr:False,dbil:False,rmgx:True,hqsc:True,hqlp:False,fgom:False,fgoc:False,fgod:False,fgor:False,fgmd:0,fgcr:0.5,fgcg:0.5,fgcb:0.5,fgca:1,fgde:0.01,fgrn:0,fgrf:300;n:type:ShaderForge.SFN_Final,id:1,x:32652,y:32431|alpha-180-OUT;n:type:ShaderForge.SFN_Cubemap,id:3,x:33351,y:32304,ptlb:Cube,cube:8045f1cf44c5e48d191d2419e05bf27d,pvfc:0;n:type:ShaderForge.SFN_Tex2d,id:4,x:33524,y:32739,ptlb:Texture,tex:48a42912b1f39c943b95d16984906941,ntxv:0,isnm:False;n:type:ShaderForge.SFN_Multiply,id:5,x:32899,y:32449|A-6-OUT,B-14-RGB;n:type:ShaderForge.SFN_Multiply,id:6,x:33091,y:32408|A-3-RGB,B-7-OUT;n:type:ShaderForge.SFN_Slider,id:7,x:33351,y:32583,ptlb:CubeForce,min:0.5,cur:0.9022557,max:5;n:type:ShaderForge.SFN_Multiply,id:13,x:33551,y:32421|A-194-UVOUT,B-193-RGB;n:type:ShaderForge.SFN_Color,id:14,x:33091,y:32555,ptlb:Color,c1:1,c2:0.9310346,c3:0,c4:1;n:type:ShaderForge.SFN_Slider,id:180,x:32943,y:32749,ptlb:Opacity,min:0,cur:0,max:1;n:type:ShaderForge.SFN_Tex2d,id:193,x:33858,y:32577,ptlb:nm,ntxv:0,isnm:False;n:type:ShaderForge.SFN_TexCoord,id:194,x:33638,y:32219,uv:0;proporder:3-4-7-14-180;pass:END;sub:END;*/

Shader "Shader Forg/WaterCubedForge" {
    Properties {
        _Cube ("Cube", Cube) = "_Skybox" {}
        _Texture ("Texture", 2D) = "white" {}
        _CubeForce ("CubeForce", Range(0.5, 5)) = 0.5
        _Color ("Color", Color) = (1,0.9310346,0,1)
        _Opacity ("Opacity", Range(0, 1)) = 0
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
            uniform float _Opacity;
            struct VertexInput {
                float4 vertex : POSITION;
                float3 normal : NORMAL;
                float4 tangent : TANGENT;
                float4 uv1 : TEXCOORD1;
            };
            struct VertexOutput {
                float4 pos : SV_POSITION;
                float3 normalDir : TEXCOORD0;
                float3 tangentDir : TEXCOORD1;
                float3 binormalDir : TEXCOORD2;
                #ifndef LIGHTMAP_OFF
                    float2 uvLM : TEXCOORD3;
                #endif
            };
            VertexOutput vert (VertexInput v) {
                VertexOutput o;
                o.normalDir = mul(float4(v.normal,0), _World2Object).xyz;
                o.tangentDir = normalize( mul( _Object2World, float4( v.tangent.xyz, 0.0 ) ).xyz );
                o.binormalDir = normalize(cross(o.normalDir, o.tangentDir) * v.tangent.w);
                o.pos = mul(UNITY_MATRIX_MVP, v.vertex);
                #ifndef LIGHTMAP_OFF
                    o.uvLM = v.uv1.xy * unity_LightmapST.xy + unity_LightmapST.zw;
                #endif
                return o;
            }
            fixed4 frag(VertexOutput i) : COLOR {
                float3x3 tangentTransform = float3x3( i.tangentDir, i.binormalDir, i.normalDir);
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
                float3 finalColor = 0;
/// Final Color:
                return fixed4(finalColor,_Opacity);
            }
            ENDCG
        }
    }
    FallBack "Mobile/Unlit (Supports Lightmap)"
    CustomEditor "ShaderForgeMaterialInspector"
}
