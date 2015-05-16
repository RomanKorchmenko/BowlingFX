// Shader created with Shader Forge Beta 0.17 
// Shader Forge (c) Joachim 'Acegikmo' Holmer
// Note: Manually altering this data may prevent you from opening it in Shader Forge
/*SF_DATA;ver:0.17;sub:START;pass:START;ps:lgpr:1,nrmq:0,limd:0,blpr:0,bsrc:0,bdst:0,culm:0,dpts:2,wrdp:True,uamb:True,mssp:True,ufog:True,aust:True,igpj:False,qofs:0,lico:0,qpre:1,flbk:,rntp:1,lmpd:False,lprd:False,enco:False,frtr:True,vitr:True,dbil:False,rmgx:True,hqsc:False,hqlp:True,fgom:False,fgoc:False,fgod:False,fgor:False,fgmd:0,fgcr:0.5,fgcg:0.5,fgcb:0.5,fgca:1,fgde:0.01,fgrn:0,fgrf:300;n:type:ShaderForge.SFN_Final,id:1,x:32479,y:32368|emission-106-OUT;n:type:ShaderForge.SFN_Tex2d,id:2,x:33626,y:32119,ptlb:Normal1,tex:dab0806454e4d924491b1b84dddaa6b7,ntxv:3,isnm:True|UVIN-41-OUT;n:type:ShaderForge.SFN_TexCoord,id:3,x:34280,y:32017,uv:0;n:type:ShaderForge.SFN_Time,id:5,x:34863,y:32129;n:type:ShaderForge.SFN_ViewReflectionVector,id:8,x:33626,y:32544;n:type:ShaderForge.SFN_Cubemap,id:13,x:33015,y:32429,ptlb:Cube,cube:814aaa653ebb4624e97c06f50e6b8125,pvfc:0|DIR-16-OUT;n:type:ShaderForge.SFN_TexCoord,id:15,x:34187,y:31857,uv:0;n:type:ShaderForge.SFN_Add,id:16,x:33215,y:32396|A-127-OUT,B-8-OUT;n:type:ShaderForge.SFN_Add,id:19,x:33850,y:32172|A-3-UVOUT,B-113-OUT;n:type:ShaderForge.SFN_Slider,id:34,x:34863,y:31958,ptlb: Multy1,min:0,cur:0.03759398,max:1;n:type:ShaderForge.SFN_Add,id:41,x:33850,y:32040|A-3-UVOUT,B-116-OUT;n:type:ShaderForge.SFN_Multiply,id:79,x:34493,y:32160|A-34-OUT,B-5-T;n:type:ShaderForge.SFN_Tex2d,id:80,x:33626,y:32316,ptlb:Normal2,tex:6880483253a834423a1a2d7061d24d32,ntxv:3,isnm:True|UVIN-19-OUT;n:type:ShaderForge.SFN_Multiply,id:96,x:34493,y:32358|A-97-OUT,B-5-T;n:type:ShaderForge.SFN_Slider,id:97,x:34823,y:32351,ptlb:Multy2,min:0,cur:0.02255639,max:1;n:type:ShaderForge.SFN_Fresnel,id:98,x:33643,y:32705|NRM-102-OUT,EXP-120-OUT;n:type:ShaderForge.SFN_Multiply,id:100,x:33210,y:32746|A-98-OUT,B-101-RGB;n:type:ShaderForge.SFN_Color,id:101,x:33506,y:32850,ptlb:node_101,c1:0,c2:0.1724138,c3:1,c4:1;n:type:ShaderForge.SFN_NormalVector,id:102,x:34286,y:32738,pt:False;n:type:ShaderForge.SFN_Slider,id:105,x:34061,y:32926,ptlb:node_105,min:0,cur:1.090225,max:5;n:type:ShaderForge.SFN_Add,id:106,x:32801,y:32635|A-13-RGB,B-100-OUT;n:type:ShaderForge.SFN_Add,id:113,x:34095,y:32439|A-96-OUT,B-114-OUT;n:type:ShaderForge.SFN_Vector2,id:114,x:34310,y:32528,v1:0.5,v2:0.5;n:type:ShaderForge.SFN_Add,id:116,x:34132,y:32171|A-118-OUT,B-79-OUT;n:type:ShaderForge.SFN_Vector2,id:118,x:34493,y:32045,v1:0.3,v2:0.2;n:type:ShaderForge.SFN_Exp,id:120,x:33846,y:32855,et:1|IN-105-OUT;n:type:ShaderForge.SFN_Cross,id:124,x:33414,y:32316|A-2-RGB,B-80-RGB;n:type:ShaderForge.SFN_Vector1,id:126,x:34083,y:32782,v1:2;n:type:ShaderForge.SFN_Subtract,id:127,x:33319,y:32143|A-2-RGB,B-80-RGB;proporder:2-13-34-80-97-105-101;pass:END;sub:END;*/

Shader "Shader Forge/oceanForge" {
    Properties {
        _Normal1 ("Normal1", 2D) = "bump" {}
        _Cube ("Cube", Cube) = "_Skybox" {}
        _Multy1 (" Multy1", Range(0, 1)) = 0
        _Normal2 ("Normal2", 2D) = "bump" {}
        _Multy2 ("Multy2", Range(0, 1)) = 0
        _node105 ("node_105", Range(0, 5)) = 0
        _node101 ("node_101", Color) = (0,0.1724138,1,1)
    }
    SubShader {
        Tags {
            "RenderType"="Opaque"
        }
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
            #pragma multi_compile_fwdbase_fullshadows
            #pragma exclude_renderers xbox360 ps3 flash 
            #pragma target 3.0
            uniform float4 _TimeEditor;
            uniform sampler2D _Normal1; uniform float4 _Normal1_ST;
            uniform samplerCUBE _Cube;
            uniform float _Multy1;
            uniform sampler2D _Normal2; uniform float4 _Normal2_ST;
            uniform float _Multy2;
            uniform float4 _node101;
            uniform float _node105;
            struct VertexInput {
                float4 vertex : POSITION;
                float3 normal : NORMAL;
                float4 uv0 : TEXCOORD0;
            };
            struct VertexOutput {
                float4 pos : SV_POSITION;
                float4 uv0 : TEXCOORD0;
                float4 posWorld : TEXCOORD1;
                float3 normalDir : TEXCOORD2;
            };
            VertexOutput vert (VertexInput v) {
                VertexOutput o;
                o.uv0 = v.uv0;
                o.normalDir = mul(float4(v.normal,0), _World2Object).xyz;
                o.posWorld = mul(_Object2World, v.vertex);
                o.pos = mul(UNITY_MATRIX_MVP, v.vertex);
                return o;
            }
            fixed4 frag(VertexOutput i) : COLOR {
                float3 viewDirection = normalize(_WorldSpaceCameraPos.xyz - i.posWorld.xyz);
                float3 normalDirection = i.normalDir;
                float3 viewReflectDirection = reflect( -viewDirection, normalDirection );
////// Lighting:
////// Emissive:
                float2 node_3 = i.uv0;
                float4 node_5 = _Time + _TimeEditor;
                float4 node_2 = UnpackNormal(tex2D(_Normal1,TRANSFORM_TEX((node_3.rg+(float2(0.3,0.2)+(_Multy1*node_5.g))), _Normal1)));
                float3 node_80 = UnpackNormal(tex2D(_Normal2,TRANSFORM_TEX((node_3.rg+((_Multy2*node_5.g)+float2(0.5,0.5))), _Normal2)));
                float3 emissive = (texCUBE(_Cube,((node_2.rgb-node_80.rgb)+viewReflectDirection)).rgb+(pow(1.0-max(0,dot(i.normalDir, viewDirection)),exp2(_node105))*_node101.rgb));
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
