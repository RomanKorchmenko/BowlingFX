// Shader created with Shader Forge Beta 0.17 
// Shader Forge (c) Joachim 'Acegikmo' Holmer
// Note: Manually altering this data may prevent you from opening it in Shader Forge
/*SF_DATA;ver:0.17;sub:START;pass:START;ps:lgpr:1,nrmq:1,limd:1,blpr:0,bsrc:0,bdst:0,culm:0,dpts:2,wrdp:True,uamb:True,mssp:True,ufog:True,aust:True,igpj:False,qofs:0,lico:1,qpre:1,flbk:,rntp:1,lmpd:False,lprd:False,enco:False,frtr:True,vitr:True,dbil:False,rmgx:True,hqsc:True,hqlp:False,fgom:False,fgoc:False,fgod:False,fgor:False,fgmd:0,fgcr:0.5,fgcg:0.5,fgcb:0.5,fgca:1,fgde:0.01,fgrn:0,fgrf:300;n:type:ShaderForge.SFN_Final,id:1,x:32530,y:32612|diff-11-OUT,amdfl-5-RGB;n:type:ShaderForge.SFN_Color,id:2,x:33184,y:32265,ptlb:color,c1:0,c2:0.8758621,c3:1,c4:1;n:type:ShaderForge.SFN_Cubemap,id:3,x:33331,y:33040,ptlb:CubeMap,cube:ec7492a418a14f5479116e9401c0dc0e,pvfc:0;n:type:ShaderForge.SFN_Slider,id:4,x:33377,y:32886,ptlb:Cube_multy,min:0,cur:1.428571,max:3;n:type:ShaderForge.SFN_Tex2d,id:5,x:33352,y:32478,ptlb:Diffuse,tex:03313aedccbe7234f8839ebd9a94ae0e,ntxv:0,isnm:False;n:type:ShaderForge.SFN_ViewReflectionVector,id:6,x:33716,y:32511;n:type:ShaderForge.SFN_ViewVector,id:7,x:33946,y:33406;n:type:ShaderForge.SFN_NormalVector,id:8,x:33097,y:33193,pt:False;n:type:ShaderForge.SFN_Add,id:10,x:33084,y:32696|A-5-RGB,B-70-OUT;n:type:ShaderForge.SFN_Multiply,id:11,x:32864,y:32683|A-2-RGB,B-10-OUT;n:type:ShaderForge.SFN_Multiply,id:70,x:33109,y:32935|A-4-OUT,B-3-RGB;n:type:ShaderForge.SFN_Multiply,id:92,x:32748,y:32856|A-11-OUT,B-4-OUT;proporder:3-4-5-2;pass:END;sub:END;*/

Shader "Shader Forge/BallShader2" {
    Properties {
        _CubeMap ("CubeMap", Cube) = "_Skybox" {}
        _Cubemulty ("Cube_multy", Range(0, 3)) = 0
        _Diffuse ("Diffuse", 2D) = "white" {}
        _color ("color", Color) = (0,0.8758621,1,1)
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
            #include "AutoLight.cginc"
            #pragma multi_compile_fwdbase_fullshadows
            #pragma exclude_renderers xbox360 ps3 flash 
            #pragma target 3.0
            uniform float4 _LightColor0;
            uniform float4 _color;
            uniform samplerCUBE _CubeMap;
            uniform float _Cubemulty;
            uniform sampler2D _Diffuse; uniform float4 _Diffuse_ST;
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
                LIGHTING_COORDS(3,4)
            };
            VertexOutput vert (VertexInput v) {
                VertexOutput o;
                o.uv0 = v.uv0;
                o.normalDir = mul(float4(v.normal,0), _World2Object).xyz;
                o.posWorld = mul(_Object2World, v.vertex);
                o.pos = mul(UNITY_MATRIX_MVP, v.vertex);
                TRANSFER_VERTEX_TO_FRAGMENT(o)
                return o;
            }
            fixed4 frag(VertexOutput i) : COLOR {
                float3 viewDirection = normalize(_WorldSpaceCameraPos.xyz - i.posWorld.xyz);
                float3 normalDirection = normalize(i.normalDir);
                float3 viewReflectDirection = reflect( -viewDirection, normalDirection );
                float3 lightDirection = normalize(_WorldSpaceLightPos0.xyz);
////// Lighting:
                float attenuation = LIGHT_ATTENUATION(i);
                float3 attenColor = attenuation * _LightColor0.xyz;
/////// Diffuse:
                float NdotL = dot( normalDirection, lightDirection );
                float3 diffuse = max( 0.0, NdotL) * attenColor + UNITY_LIGHTMODEL_AMBIENT.xyz;
                float4 node_5 = tex2D(_Diffuse,TRANSFORM_TEX(i.uv0.rg, _Diffuse));
                float node_4 = _Cubemulty;
                float3 node_11 = (_color.rgb*(node_5.rgb+(node_4*texCUBE(_CubeMap,viewReflectDirection).rgb)));
                float3 finalColor = ( diffuse + node_5.rgb ) * node_11;
/// Final Color:
                return fixed4(finalColor,1);
            }
            ENDCG
        }
        Pass {
            Name "ForwardAdd"
            Tags {
                "LightMode"="ForwardAdd"
            }
            Blend One One
            
            Fog { Color (0,0,0,0) }
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #define UNITY_PASS_FORWARDADD
            #include "UnityCG.cginc"
            #include "AutoLight.cginc"
            #pragma multi_compile_fwdadd_fullshadows
            #pragma exclude_renderers xbox360 ps3 flash 
            #pragma target 3.0
            uniform float4 _LightColor0;
            uniform float4 _color;
            uniform samplerCUBE _CubeMap;
            uniform float _Cubemulty;
            uniform sampler2D _Diffuse; uniform float4 _Diffuse_ST;
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
                LIGHTING_COORDS(3,4)
            };
            VertexOutput vert (VertexInput v) {
                VertexOutput o;
                o.uv0 = v.uv0;
                o.normalDir = mul(float4(v.normal,0), _World2Object).xyz;
                o.posWorld = mul(_Object2World, v.vertex);
                o.pos = mul(UNITY_MATRIX_MVP, v.vertex);
                TRANSFER_VERTEX_TO_FRAGMENT(o)
                return o;
            }
            fixed4 frag(VertexOutput i) : COLOR {
                float3 viewDirection = normalize(_WorldSpaceCameraPos.xyz - i.posWorld.xyz);
                float3 normalDirection = normalize(i.normalDir);
                float3 viewReflectDirection = reflect( -viewDirection, normalDirection );
                float3 lightDirection = normalize(lerp(_WorldSpaceLightPos0.xyz, _WorldSpaceLightPos0.xyz - i.posWorld.xyz,_WorldSpaceLightPos0.w));
////// Lighting:
                float attenuation = LIGHT_ATTENUATION(i);
                float3 attenColor = attenuation * _LightColor0.xyz;
/////// Diffuse:
                float NdotL = dot( normalDirection, lightDirection );
                float3 diffuse = max( 0.0, NdotL) * attenColor;
                float4 node_5 = tex2D(_Diffuse,TRANSFORM_TEX(i.uv0.rg, _Diffuse));
                float node_4 = _Cubemulty;
                float3 node_11 = (_color.rgb*(node_5.rgb+(node_4*texCUBE(_CubeMap,viewReflectDirection).rgb)));
                float3 finalColor = diffuse * node_11;
/// Final Color:
                return fixed4(finalColor * 1,0);
            }
            ENDCG
        }
    }
    FallBack "Diffuse"
    CustomEditor "ShaderForgeMaterialInspector"
}
