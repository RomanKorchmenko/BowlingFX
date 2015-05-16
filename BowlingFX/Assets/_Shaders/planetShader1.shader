Shader "PlanetShader.v1"
{
	Properties 
	{
_Diffuse("_Diffuse", 2D) = "gray" {}
_night("_night", 2D) = "gray" {}
_timespeed("_timespeed", Float) = 0.5
_falloff("size of glow on the border", Float) = 3
_albedocolor("_albedocolor", Color) = (0.2398641,0.3656669,0.5447761,1)
_multyColor("_multyColor", Color) = (0,0.5384617,1,1)
_nightOffset("_nightOffset", Vector) = (0,0,0,0)
_nightMulty("_nightMulty", Color) = (0.8134328,0.8134328,0.8134328,1)

	}
	
	SubShader 
	{
		Tags
		{
"Queue"="Background"
"IgnoreProjector"="False"
"RenderType"="Background"

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


sampler2D _Diffuse;
sampler2D _night;
float _timespeed;
float _falloff;
float4 _albedocolor;
float4 _multyColor;
float4 _nightOffset;
float4 _nightMulty;

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
float2 uv_night;
float3 viewDir;

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
				
float4 Multiply1=_Time * _timespeed.xxxx;
float4 UV_Pan0=float4((IN.uv_Diffuse.xyxy).x + Multiply1.x,(IN.uv_Diffuse.xyxy).y,(IN.uv_Diffuse.xyxy).z,(IN.uv_Diffuse.xyxy).w);
float4 Tex2D5=tex2D(_Diffuse,UV_Pan0.xy);
float4 Add1=(IN.uv_night.xyxy) + _nightOffset;
float4 Tex2D0=tex2D(_night,Add1.xy);
float4 Multiply2=Tex2D0 * _nightMulty;
float4 Multiply5=Tex2D5 * Multiply2;
float4 Multiply0=Multiply5 * _multyColor;
float4 Fresnel0_1_NoInput = float4(0,0,1,1);
float4 Fresnel0=(1.0 - dot( normalize( float4( IN.viewDir.x, IN.viewDir.y,IN.viewDir.z,1.0 ).xyz), normalize( Fresnel0_1_NoInput.xyz ) )).xxxx;
float4 Pow0=pow(Fresnel0,_falloff.xxxx);
float4 Invert0= float4(1.0, 1.0, 1.0, 1.0) - Pow0;
float4 Multiply3=Invert0 * _albedocolor;
float4 Add0=Multiply0 + Multiply3;
float4 Master0_0_NoInput = float4(0,0,0,0);
float4 Master0_1_NoInput = float4(0,0,1,1);
float4 Master0_3_NoInput = float4(0,0,0,0);
float4 Master0_4_NoInput = float4(0,0,0,0);
float4 Master0_5_NoInput = float4(1,1,1,1);
float4 Master0_7_NoInput = float4(0,0,0,0);
float4 Master0_6_NoInput = float4(1,1,1,1);
o.Emission = Add0;

				o.Normal = normalize(o.Normal);
			}
		ENDCG
	}
	Fallback "Diffuse"
}