// Shader created with Shader Forge Beta 0.17 
// Shader Forge (c) Joachim 'Acegikmo' Holmer
// Note: Manually altering this data may prevent you from opening it in Shader Forge
/*SF_DATA;ver:0.17;sub:START;pass:START;ps:lgpr:1,nrmq:1,limd:1,blpr:0,bsrc:0,bdst:0,culm:0,dpts:2,wrdp:True,uamb:True,mssp:True,ufog:True,aust:True,igpj:False,qofs:0,lico:1,qpre:1,flbk:,rntp:1,lmpd:False,lprd:False,enco:False,frtr:True,vitr:True,dbil:False,rmgx:True,hqsc:True,hqlp:False,fgom:False,fgoc:False,fgod:False,fgor:False,fgmd:0,fgcr:0.5,fgcg:0.5,fgcb:0.5,fgca:1,fgde:0.01,fgrn:0,fgrf:300;n:type:ShaderForge.SFN_Final,id:1,x:32719,y:32712|emission-8-RGB;n:type:ShaderForge.SFN_Cubemap,id:2,x:33435,y:32257,ptlb:node_2,cube:814aaa653ebb4624e97c06f50e6b8125,pvfc:0;n:type:ShaderForge.SFN_Add,id:3,x:33865,y:32688|A-6-UVOUT,B-7-TSL;n:type:ShaderForge.SFN_Tex2d,id:5,x:33651,y:32725,ptlb:node_5,tex:924b8fa2da0f64d0392af229c6ba4863,ntxv:3,isnm:True|UVIN-3-OUT;n:type:ShaderForge.SFN_TexCoord,id:6,x:34306,y:32393,uv:0;n:type:ShaderForge.SFN_Time,id:7,x:34209,y:32758;n:type:ShaderForge.SFN_Tex2d,id:8,x:32995,y:32674,ptlb:node_8,tex:b3e0c0039f6db4cf6b6b84a400e0da9a,ntxv:0,isnm:False|UVIN-27-OUT;n:type:ShaderForge.SFN_NormalVector,id:9,x:33522,y:32376,pt:False;n:type:ShaderForge.SFN_Binormal,id:10,x:33765,y:32343;n:type:ShaderForge.SFN_Subtract,id:12,x:32993,y:32291|A-2-RGB,B-5-RGB;n:type:ShaderForge.SFN_ViewPosition,id:14,x:34209,y:32602;n:type:ShaderForge.SFN_Vector2,id:16,x:32981,y:32874,v1:0,v2:0;n:type:ShaderForge.SFN_Vector2,id:21,x:33633,y:32164,v1:0,v2:0;n:type:ShaderForge.SFN_Append,id:22,x:33439,y:32742|A-5-R,B-5-B;n:type:ShaderForge.SFN_ComponentMask,id:23,x:33154,y:32120,cc1:0,cc2:-1,cc3:-1,cc4:-1;n:type:ShaderForge.SFN_ComponentMask,id:24,x:32981,y:33009,cc1:0,cc2:-1,cc3:-1,cc4:-1;n:type:ShaderForge.SFN_Multiply,id:25,x:33198,y:32663|A-26-OUT,B-33-OUT;n:type:ShaderForge.SFN_Slider,id:26,x:33535,y:32566,ptlb:node_26,min:0,cur:0.9172933,max:1;n:type:ShaderForge.SFN_Subtract,id:27,x:33098,y:32474|A-6-UVOUT,B-25-OUT;n:type:ShaderForge.SFN_Tex2d,id:28,x:33574,y:32913,ptlb:node_28,tex:6880483253a834423a1a2d7061d24d32,ntxv:3,isnm:True|UVIN-29-UVOUT;n:type:ShaderForge.SFN_Rotator,id:29,x:33865,y:32863|UVIN-6-UVOUT,ANG-30-OUT;n:type:ShaderForge.SFN_Phi,id:30,x:34188,y:32986;n:type:ShaderForge.SFN_Append,id:31,x:33402,y:32892|A-28-G,B-28-B;n:type:ShaderForge.SFN_Multiply,id:32,x:33198,y:32842|A-22-OUT,B-31-OUT;n:type:ShaderForge.SFN_Add,id:33,x:33185,y:32994|A-22-OUT,B-31-OUT;proporder:2-5-8-26-28;pass:END;sub:END;*/

Shader "Shader Forge/testForge" {
    Properties {
        _node2 ("node_2", Cube) = "_Skybox" {}
        _node5 ("node_5", 2D) = "bump" {}
        _node8 ("node_8", 2D) = "white" {}
        _node26 ("node_26", Range(0, 1)) = 0
        _node28 ("node_28", 2D) = "bump" {}
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
            uniform sampler2D _node5; uniform float4 _node5_ST;
            uniform sampler2D _node8; uniform float4 _node8_ST;
            uniform float _node26;
            uniform sampler2D _node28; uniform float4 _node28_ST;
            struct VertexInput {
                float4 vertex : POSITION;
                float4 uv0 : TEXCOORD0;
            };
            struct VertexOutput {
                float4 pos : SV_POSITION;
                float4 uv0 : TEXCOORD0;
            };
            VertexOutput vert (VertexInput v) {
                VertexOutput o;
                o.uv0 = v.uv0;
                o.pos = mul(UNITY_MATRIX_MVP, v.vertex);
                return o;
            }
            fixed4 frag(VertexOutput i) : COLOR {
////// Lighting:
////// Emissive:
                float2 node_6 = i.uv0;
                float4 node_7 = _Time + _TimeEditor;
                float3 node_5 = UnpackNormal(tex2D(_node5,TRANSFORM_TEX((node_6.rg+node_7.r), _node5)));
                float2 node_22 = float2(node_5.r,node_5.b);
                float node_29_ang = 1.61803398875;
                float node_29_spd = 1.0;
                float node_29_cos = cos(node_29_spd*node_29_ang);
                float node_29_sin = sin(node_29_spd*node_29_ang);
                float2 node_29_piv = float2(0.5,0.5);
                float2 node_29 = (mul(node_6.rg-node_29_piv,float2x2( node_29_cos, -node_29_sin, node_29_sin, node_29_cos))+node_29_piv);
                float3 node_28 = UnpackNormal(tex2D(_node28,TRANSFORM_TEX(node_29, _node28)));
                float2 node_31 = float2(node_28.g,node_28.b);
                float3 emissive = tex2D(_node8,TRANSFORM_TEX((node_6.rg-(_node26*(node_22+node_31))), _node8)).rgb;
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
