// Shader created with Shader Forge Beta 0.17 
// Shader Forge (c) Joachim 'Acegikmo' Holmer
// Note: Manually altering this data may prevent you from opening it in Shader Forge
/*SF_DATA;ver:0.17;sub:START;pass:START;ps:lgpr:1,nrmq:1,limd:1,blpr:0,bsrc:3,bdst:7,culm:0,dpts:2,wrdp:True,uamb:True,mssp:True,ufog:True,aust:True,igpj:False,qofs:0,lico:1,qpre:1,flbk:,rntp:1,lmpd:False,lprd:True,enco:False,frtr:True,vitr:True,dbil:False,rmgx:True,hqsc:True,hqlp:False,fgom:False,fgoc:False,fgod:False,fgor:False,fgmd:0,fgcr:0.5,fgcg:0.5,fgcb:0.5,fgca:1,fgde:0.01,fgrn:0,fgrf:300;n:type:ShaderForge.SFN_Final,id:0,x:32699,y:32585|emission-4-RGB;n:type:ShaderForge.SFN_Cubemap,id:1,x:34355,y:32652,ptlb:Cubemap,cube:f466cf7415226e046b096197eb7341aa,pvfc:1;n:type:ShaderForge.SFN_Tex2d,id:4,x:33784,y:32056,ptlb:Normal,tex:bbab0a6f7bae9cf42bf057d8ee2755f6,ntxv:0,isnm:False|UVIN-1243-OUT;n:type:ShaderForge.SFN_Multiply,id:5,x:33040,y:32601|A-224-OUT,B-10-OUT;n:type:ShaderForge.SFN_NormalVector,id:6,x:34095,y:33042,pt:False;n:type:ShaderForge.SFN_ComponentMask,id:8,x:33844,y:33056,cc1:1,cc2:-1,cc3:-1,cc4:-1|IN-6-OUT;n:type:ShaderForge.SFN_Add,id:10,x:33277,y:32920|A-12-OUT,B-13-OUT;n:type:ShaderForge.SFN_Vector1,id:11,x:33799,y:33237,v1:0.1;n:type:ShaderForge.SFN_Multiply,id:12,x:33612,y:33110|A-8-OUT,B-11-OUT;n:type:ShaderForge.SFN_OneMinus,id:13,x:33612,y:33237|IN-11-OUT;n:type:ShaderForge.SFN_Vector1,id:214,x:34078,y:32943,v1:15;n:type:ShaderForge.SFN_Multiply,id:215,x:33873,y:32877|A-1-RGB,B-1-A,C-214-OUT;n:type:ShaderForge.SFN_Fresnel,id:223,x:33904,y:32553|EXP-1080-OUT;n:type:ShaderForge.SFN_Lerp,id:224,x:33493,y:32783|A-225-OUT,B-215-OUT,T-223-OUT;n:type:ShaderForge.SFN_Multiply,id:225,x:33701,y:32737|A-226-OUT,B-215-OUT;n:type:ShaderForge.SFN_Vector1,id:226,x:33904,y:32712,v1:0.1;n:type:ShaderForge.SFN_ConstantLerp,id:286,x:33637,y:32461,a:0.4,b:0|IN-223-OUT;n:type:ShaderForge.SFN_Slider,id:1080,x:34087,y:32507,ptlb:Fresnel Exponent,min:1,cur:1.789474,max:8;n:type:ShaderForge.SFN_Panner,id:1241,x:34355,y:32110,spu:1,spv:1;n:type:ShaderForge.SFN_Time,id:1242,x:34355,y:31975;n:type:ShaderForge.SFN_Multiply,id:1243,x:34065,y:32039|A-1242-T,B-1241-UVOUT;n:type:ShaderForge.SFN_Multiply,id:1244,x:34024,y:32678|A-1-RGB,B-4-RGB;proporder:1-4-1080;pass:END;sub:END;*/

Shader "Shader Forge/Examples/Cubemaps" {
    Properties {
        _Cubemap ("Cubemap", Cube) = "_Skybox" {}
        _Normal ("Normal", 2D) = "white" {}
        _FresnelExponent ("Fresnel Exponent", Range(1, 8)) = 1
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
            #pragma exclude_renderers gles xbox360 ps3 flash 
            #pragma target 3.0
            uniform float4 _TimeEditor;
            uniform sampler2D _Normal; uniform float4 _Normal_ST;
            struct VertexInput {
                float4 vertex : POSITION;
                float3 normal : NORMAL;
                float4 uv0 : TEXCOORD0;
            };
            struct VertexOutput {
                float4 pos : SV_POSITION;
                float3 shLight : TEXCOORD0;
                float4 uv0 : TEXCOORD1;
            };
            VertexOutput vert (VertexInput v) {
                VertexOutput o;
                o.uv0 = v.uv0;
                o.shLight = ShadeSH9(float4(v.normal * unity_Scale.w,1)) * 0.5;
                o.pos = mul(UNITY_MATRIX_MVP, v.vertex);
                return o;
            }
            fixed4 frag(VertexOutput i) : COLOR {
////// Lighting:
////// Emissive:
                float4 node_1242 = _Time + _TimeEditor;
                float4 node_1316 = _Time + _TimeEditor;
                float3 node_4 = tex2D(_Normal,TRANSFORM_TEX((node_1242.g*(i.uv0.rg+node_1316.g*float2(1,1))), _Normal));
                float3 emissive = node_4.rgb;
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
