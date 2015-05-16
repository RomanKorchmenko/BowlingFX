// These are only needed in case you are using the terrain engine version of the shader
//var VertexLitTranslucencyColor : Color = Color(0.73,0.85,0.4,1);
//var ShadowStrength = 0.8;
// wind
var Wind : Vector4 = Vector4(0.85,0.075,0.4,0.5);
var tmpWind: Vector4;
var WindFrequency = 0.75;
var GrassWindFrequency = 1.5;
var currentQuality: int;
var quality: int;
//var MediumDetailsDistance = 5;
function Start ()
{
currentQuality = QualitySettings.GetQualityLevel();
if (currentQuality ==quality )
{
  tmpWind = Wind;
}
if (currentQuality !=quality )
	{
tmpWind = Vector4.zero;
	}
NotificationCenter.DefaultCenter().AddObserver(this, "QualityLevelIs");
	Shader.SetGlobalColor("_Wind", tmpWind);
	Shader.SetGlobalColor("_GrassWind", tmpWind);
}
function Update () {
	// simple wind animation
	// var WindRGBA : Color = Wind *  ( (Mathf.Sin(Time.realtimeSinceStartup * WindFrequency) + Mathf.Sin(Time.realtimeSinceStartup * WindFrequency * 0.975) )   * 0.5 );
	//var WindRGBA : Color = Wind *  ( (Mathf.Sin(Time.realtimeSinceStartup * WindFrequency)));
	//WindRGBA.a = Wind.w;
	//var GrassWindRGBA : Color = Wind *  ( (Mathf.Sin(Time.realtimeSinceStartup * GrassWindFrequency)));
	//GrassWindRGBA.a = Wind.w;
}

function QualityLevelIs(notification:Notification)
{
currentQuality = notification.data;
if (currentQuality ==quality )
{
  tmpWind = Wind;
}
if (currentQuality !=quality )
	{
tmpWind = Vector4.zero;
	}
		Shader.SetGlobalColor("_Wind", tmpWind);
	Shader.SetGlobalColor("_GrassWind", tmpWind);
}