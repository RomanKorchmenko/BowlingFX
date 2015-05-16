Shader "FakeWaterPond"
{
	Properties 
	{
_Diffuse("_Diffuse", 2D) = "gray" {}
_Normal("_Normal", 2D) = "bump" {}
_distMulty("_distMulty", Float) = 0.04
_MultyTime("_MultyTime", Float) = 0.1
_opa("_opa", Range(0,1) ) = 0.5
_color("_color", Color) = (1,1,1,1)

	}
	
	SubShader 
	{
		Tags
		{
"Queue"="Transparent+100"
"IgnoreProjector"="False"
"RenderType"="Transparent"

		}

		
Cull Back
ZWrite On
ZTest LEqual
ColorMask RGB
Fog{
}


		CGPROGRAM
#pragma surface surf BlinnPhongEditor  alpha decal:blend vertex:vert
#pragma target 3.0


sampler2D _Diffuse;
sampler2D _Normal;
float _distMulty;
float _MultyTime;
float _opa;
float4 _color;

			struct EditorSurfaceOutput {
				half3 Albedo;
				half3 Normal;
				half3 Emission;
				half3 Gloss;
				half Specular;
				half Alpha;
				half4 Custom;
			};
			
			inline half4 LightingBlinnPhongEditor_PrePass (EditorSurfaceOutput s, half4 light)
			{
half3 spec = light.a * s.Gloss;
half4 c;
c.rgb = (s.Albedo * light.rgb + light.rgb * spec);
c.a = s.Alpha;
return c;

			}

			inline half4 LightingBlinnPhongEditor (EditorSurfaceOutput s, half3 lightDir, half3 viewDir, half atten)
			{
				half3 h = normalize (lightDir + viewDir);
				
				half diff = max (0, dot ( lightDir, s.Normal ));
				
				float nh = max (0, dot (s.Normal, h));
				float spec = pow (nh, s.Specular*128.0);
				
				half4 res;
				res.rgb = _LightColor0.rgb * diff;
				res.w = spec * Luminance (_LightColor0.rgb);
				res *= atten * 2.0;

				return LightingBlinnPhongEditor_PrePass( s, res );
			}
			
			struct Input {
				float2 uv_Diffuse;
float4 meshUV;
float2 uv_Normal;

			};

			void vert (inout appdata_full v, out Input o) {
float4 VertexOutputMaster0_0_NoInput = float4(0,0,0,0);
float4 VertexOutputMaster0_1_NoInput = float4(0,0,0,0);
float4 VertexOutputMaster0_2_NoInput = float4(0,0,0,0);
float4 VertexOutputMaster0_3_NoInput = float4(0,0,0,0);

o.meshUV.xy = v.texcoord.xy;
o.meshUV.zw = v.texcoord1.xy;

			}
			

			void surf (Input IN, inout EditorSurfaceOutput o) {
				o.Normal = float3(0.0,0.0,1.0);
				o.Alpha = 1.0;
				o.Albedo = 0.0;
				o.Emission = 0.0;
				o.Gloss = 0.0;
				o.Specular = 0.0;
				o.Custom = 0.0;
				
float4 Multiply3=(IN.meshUV.xyxy) * (IN.uv_Diffuse.xyxy);
float4 Multiply2=(IN.uv_Normal.xyxy) * (IN.meshUV.zwzw);
float4 Multiply0=_Time * _MultyTime.xxxx;
float4 UV_Pan0=float4(Multiply2.x + Multiply0.y,Multiply2.y,Multiply2.z,Multiply2.w);
float4 Tex2D0=tex2D(_Normal,UV_Pan0.xy);
float4 UnpackNormal0=float4(UnpackNormal(Tex2D0).xyz, 1.0);
float4 Multiply1=UnpackNormal0 * _distMulty.xxxx;
float4 Subtract0=Multiply3 - Multiply1;
float4 Tex2D1=tex2D(_Diffuse,Subtract0.xy);
float4 Master0_1_NoInput = float4(0,0,1,1);
float4 Master0_3_NoInput = float4(0,0,0,0);
float4 Master0_4_NoInput = float4(0,0,0,0);
float4 Master0_7_NoInput = float4(0,0,0,0);
float4 Master0_6_NoInput = float4(1,1,1,1);
o.Albedo = _color;
o.Emission = Tex2D1;
o.Alpha = _opa.xxxx;

				o.Normal = normalize(o.Normal);
			}
		ENDCG
	}
	Fallback "Diffuse"
}