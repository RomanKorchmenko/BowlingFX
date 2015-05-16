Shader "Mobile/Additive Lamp" {
Properties {
	_Color ("Color", Color) = (0.5,0.5,0.5,0.5)
	_MainTex ("Particle Texture", 2D) = "white" {}
}

Category {
	Tags { "Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Transparent" }
	Blend SrcAlpha One
	AlphaTest Greater .001
	ColorMask RGB
	Cull Back Lighting Off ZWrite Off Fog { Mode Off }
	BindChannels {
		Bind "Color", color
		//Bind "Vertex", vertex
		Bind "TexCoord", texcoord
	}
	SubShader {
		Pass {
			SetTexture [_MainTex] {
				constantColor [_Color]
				combine constant * primary
			}
			SetTexture [_MainTex] {
				combine texture * previous 
			}
		}
	}
}
}
