Shader "GUI/Text Shader with shadow" {
Properties {
                _MainTex ("Font Texture", 2D) = "white" {}
                _Color ("Shadow Color", Color) = (1,1,1,1)
                _Color2 ("Text Color", Color) = (1,1,1,1)
                _Size ("Size of Shadow", Range(0, 0.01)) = 0.005
        }

        SubShader {  

                Tags { "Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Transparent" }
                Lighting Off Cull Off ZTest Always ZWrite Off Fog { Mode Off }
                Blend SrcAlpha OneMinusSrcAlpha

                Pass {  //первый пасс для тени.
                        CGPROGRAM
                        #pragma vertex vert
                        #pragma fragment frag
                        #pragma fragmentoption ARB_precision_hint_fastest

                        #include "UnityCG.cginc"

                        struct appdata_t {
                                float4 vertex : POSITION;
                                fixed4 color : COLOR;
                                float2 texcoord : TEXCOORD0;
                        };

                        struct v2f {
                                float4 vertex : POSITION;
                                fixed4 color : COLOR;
                                float2 texcoord : TEXCOORD0;
                        };

                        sampler2D _MainTex;
                        uniform float4 _MainTex_ST;
                        uniform fixed4 _Color;
                        uniform float _Size;
                        v2f vert (appdata_t v)
                        {
                                v2f o;
                                o.vertex = mul(UNITY_MATRIX_MVP, v.vertex)-_Size;//0.005 расстояние до тени, можно прикрутить на слайдер
                                o.color = v.color * _Color;
                                o.texcoord = TRANSFORM_TEX(v.texcoord,_MainTex);
                                return o;
                        }

                        fixed4 frag (v2f i) : COLOR
                        {
                                fixed4 col = i.color;
                                col.a *= UNITY_SAMPLE_1CHANNEL(_MainTex, i.texcoord);
                                return col;
                        }
                        ENDCG 
                }
                Pass {  // пасс основного текста
                        CGPROGRAM
                        #pragma vertex vert
                        #pragma fragment frag
                        #pragma fragmentoption ARB_precision_hint_fastest

                        #include "UnityCG.cginc"

                        struct appdata_t {
                                float4 vertex : POSITION;
                                fixed4 color : COLOR;
                                float2 texcoord : TEXCOORD0;
                        };

                        struct v2f {
                                float4 vertex : POSITION;
                                fixed4 color : COLOR;
                                float2 texcoord : TEXCOORD0;
                        };

                        sampler2D _MainTex;
                        uniform float4 _MainTex_ST;
                        uniform fixed4 _Color2;
                        
                        v2f vert (appdata_t v)
                        {
                                v2f o;
                                o.vertex = mul(UNITY_MATRIX_MVP, v.vertex);
                                o.color = v.color * _Color2;
                                o.texcoord = TRANSFORM_TEX(v.texcoord,_MainTex);
                                return o;
                        }

                        fixed4 frag (v2f i) : COLOR
                        {
                                fixed4 col = i.color;
                                col.a *= UNITY_SAMPLE_1CHANNEL(_MainTex, i.texcoord);
                                return col;
                        }
                        ENDCG 
                }
        }       

        SubShader {
                Tags { "Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Transparent" }
                Lighting Off Cull Off ZTest Always ZWrite Off Fog { Mode Off }
                Blend SrcAlpha OneMinusSrcAlpha
                BindChannels {
                        Bind "Color", color
                        Bind "Vertex", vertex
                        Bind "TexCoord", texcoord
                }
                Pass {
                        SetTexture [_MainTex] { 
                                constantColor [_Color] combine constant * primary, constant * texture
                        }
                }
        }
} 
 