Shader "OceanCube"
{
	Properties 
	{
_Normal("_Normal", 2D) = "bump" {}
_MultyTime("_MultyTime", Float) = 0.3
_Cube("_Cube", Cube) = "black" {}
_MultiTime2("_MultiTime2", Float) = 0.03
_Normal2("_Normal2", 2D) = "bump" {}
_range("_range", Range(0,10) ) = 10
_color("_color", Color) = (0.1256661,0.2462686,0.1194587,1)
_color2("_color2", Color) = (0.05624861,0.06228901,0.07462686,1)

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
ColorMask RGB
Fog{
}


		CGPROGRAM
#pragma surface surf BlinnPhongEditor  vertex:vert
#pragma target 3.0


sampler2D _Normal;
float _MultyTime;
samplerCUBE _Cube;
float _MultiTime2;
sampler2D _Normal2;
float _range;
float4 _color;
float4 _color2;

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
c.a = _color.a;
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

			inline half4 LightingBlinnPhongEditor_DirLightmap (EditorSurfaceOutput s, fixed4 color, fixed4 scale, half3 viewDir, bool surfFuncWritesNormal, out half3 specColor)
			{
				UNITY_DIRBASIS
				half3 scalePerBasisVector;
				
				half3 lm = DirLightmapDiffuse (unity_DirBasis, color, scale, s.Normal, surfFuncWritesNormal, scalePerBasisVector);
				
				half3 lightDir = normalize (scalePerBasisVector.x * unity_DirBasis[0] + scalePerBasisVector.y * unity_DirBasis[1] + scalePerBasisVector.z * unity_DirBasis[2]);
				half3 h = normalize (lightDir + viewDir);
			
				float nh = max (0, dot (s.Normal, h));
				float spec = pow (nh, s.Specular * 128.0);
				
				// specColor used outside in the forward path, compiled out in prepass
				specColor = lm * _SpecColor.rgb * s.Gloss * spec;
				
				// spec from the alpha component is used to calculate specular
				// in the Lighting*_Prepass function, it's not used in forward
				return half4(lm, spec);
			}
			
			struct Input {
				float2 uv_Normal;
float2 uv_Normal2;
float3 worldRefl;
float3 viewDir;
INTERNAL_DATA

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
				
float4 Multiply0=_Time * _MultyTime.xxxx;
float4 UV_Pan0=float4((IN.uv_Normal.xyxy).x,(IN.uv_Normal.xyxy).y + Multiply0.y,(IN.uv_Normal.xyxy).z,(IN.uv_Normal.xyxy).w);
float4 Tex2DNormal0=float4(UnpackNormal( tex2D(_Normal,UV_Pan0.xy)).xyz, 1.0 );
float4 UnpackNormal0=float4(UnpackNormal(Tex2DNormal0).xyz, 1.0);
float4 Multiply1=_Time * _MultiTime2.xxxx;
float4 UV_Pan1=float4((IN.uv_Normal2.xyxy).x + Multiply1.x,(IN.uv_Normal2.xyxy).y,(IN.uv_Normal2.xyxy).z,(IN.uv_Normal2.xyxy).w);
float4 Tex2DNormal1=float4(UnpackNormal( tex2D(_Normal2,UV_Pan1.xy)).xyz, 1.0 );
float4 UnpackNormal1=float4(UnpackNormal(Tex2DNormal1).xyz, 1.0);
float4 Multiply2=UnpackNormal0 * UnpackNormal1;
float4 WorldReflection0_0_NoInput = float4(0,0,1,1);
float4 WorldReflection0=float4( WorldReflectionVector (IN, WorldReflection0_0_NoInput), 1.0);
float4 Add2=Multiply2 + WorldReflection0;
float4 TexCUBE0=texCUBE(_Cube,Add2);
float4 Add1=TexCUBE0 + _color;
float4 Multiply3=TexCUBE0 * _color2;
float4 Fresnel0_1_NoInput = float4(0,0,1,1);
float4 Fresnel0=(1.0 - dot( normalize( float4( IN.viewDir.x, IN.viewDir.y,IN.viewDir.z,1.0 ).xyz), normalize( Fresnel0_1_NoInput.xyz ) )).xxxx;
float4 Pow0=pow(Fresnel0,_range.xxxx);
float4 Saturate0=saturate(Pow0);
float4 Invert0= float4(1.0, 1.0, 1.0, 1.0) - Saturate0;
float4 Lerp0=lerp(Add1,Multiply3,Invert0);
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