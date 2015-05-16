Shader "sky1"
{
	Properties 
	{
_DiffuseColor("_DiffuseColor", Color) = (1,0,0,1)
_RimColor("_RimColor", Color) = (0,0.2980392,1,1)
_RimPower("_RimPower", Range(0.1,3) ) = 0.37
_Glossiness("_Glossiness", Range(0.1,1) ) = 0.4300518
_SpecularColor("_SpecularColor", Color) = (0.3006994,1,0,1)
_gradient("_gradient", 2D) = "black" {}
_smollClowds("_smollClowds", 2D) = "black" {}
_bigClowds("_bigClowds", 2D) = "black" {}
_middleClowds("middleClowds", 2D) = "black" {}

	}
	
	SubShader 
	{
		Tags
		{
"Queue"="Geometry"
"IgnoreProjector"="False"
"RenderType"="Opaque"

		}

		
Cull Back
ZWrite On
ZTest LEqual
ColorMask RGBA
Fog{
}


		CGPROGRAM
#pragma surface surf BlinnPhongEditor  vertex:vert
#pragma target 2.0


float4 _DiffuseColor;
float4 _RimColor;
float _RimPower;
float _Glossiness;
float4 _SpecularColor;
sampler2D _gradient;
sampler2D _smollClowds;
sampler2D _bigClowds;
sampler2D _middleClowds;

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
				float2 uv_middleClowds;
float2 uv_smollClowds;
float2 uv_bigClowds;
float2 uv_gradient;

			};

			void vert (inout appdata_full v, out Input o) {
float4 VertexOutputMaster0_0_NoInput = float4(0,0,0,0);
float4 VertexOutputMaster0_1_NoInput = float4(0,0,0,0);
float4 VertexOutputMaster0_2_NoInput = float4(0,0,0,0);
float4 VertexOutputMaster0_3_NoInput = float4(0,0,0,0);


			}
			

			void surf (Input IN, inout EditorSurfaceOutput o) {
				o.Normal = float3(0.0,0.0,1.0);
				o.Alpha = 1.0;
				o.Albedo = 0.0;
				o.Emission = 0.0;
				o.Gloss = 0.0;
				o.Specular = 0.0;
				o.Custom = 0.0;
				
float4 Multiply4=_Time * float4( -0.1,-0.1,-0.1,-0.1 );
float4 UV_Pan1=float4((IN.uv_middleClowds.xyxy).x + Multiply4.x,(IN.uv_middleClowds.xyxy).y,(IN.uv_middleClowds.xyxy).z,(IN.uv_middleClowds.xyxy).w);
float4 Tex2D3=tex2D(_middleClowds,UV_Pan1.xy);
float4 Multiply3=Tex2D3 * _DiffuseColor;
float4 Multiply2=_Time * float4( 0.3,0.3,0.3,0.3 );
float4 UV_Pan0=float4((IN.uv_smollClowds.xyxy).x + Multiply2.x,(IN.uv_smollClowds.xyxy).y,(IN.uv_smollClowds.xyxy).z,(IN.uv_smollClowds.xyxy).w);
float4 Tex2D1=tex2D(_smollClowds,UV_Pan0.xy);
float4 Multiply0=Tex2D1 * _RimColor;
float4 Tex2D0=tex2D(_bigClowds,(IN.uv_bigClowds.xyxy).xy);
float4 Lerp1=lerp(Multiply3,Multiply0,Tex2D0);
float4 Multiply1=Tex2D0 * _SpecularColor;
float4 Tex2D2=tex2D(_gradient,(IN.uv_gradient.xyxy).xy);
float4 Lerp0=lerp(Lerp1,Multiply1,Tex2D2);
float4 Master0_0_NoInput = float4(0,0,0,0);
float4 Master0_1_NoInput = float4(0,0,1,1);
float4 Master0_3_NoInput = float4(0,0,0,0);
float4 Master0_4_NoInput = float4(0,0,0,0);
float4 Master0_5_NoInput = float4(1,1,1,1);
float4 Master0_7_NoInput = float4(0,0,0,0);
float4 Master0_6_NoInput = float4(1,1,1,1);
o.Emission = Lerp0;

				o.Normal = normalize(o.Normal);
			}
		ENDCG
	}
	Fallback "Diffuse"
}