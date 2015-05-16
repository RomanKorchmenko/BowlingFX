#pragma strict
var timeMulty: float;
var light: boolean;
var maxValue: float = 2.0;
var minValue: float = 0.2;
var shininess: float;
var minusMulty: float;
var time: float;
var timer: float;
var on: boolean;
var lamp: Renderer;
var light1: Light;
var light2: Light;
var hasLights: boolean;
var multyLight: float = 8;
private var currentQuality: int;
function Start () {
on = false;
NotificationCenter.DefaultCenter().AddObserver(this, "QualityLevelIs");
currentQuality = QualitySettings.GetQualityLevel();
}
function Awake()
{
InvokeRepeating("Lightning",2.0, 0.1);
}
function Lightning () {
if(currentQuality>0)
{
shininess = Mathf.Clamp(shininess, 0, maxValue);
if(shininess==0.1) shininess=0;
LightBlink();
lamp.material.color.a=shininess;
} 
}

function OnTriggerEnter (other : Collider)
{
if(other.gameObject.tag == "activeball")
{
on = true;
}
}

function LightBlink()
{
if(hasLights)
{
light1.intensity = shininess*multyLight;
light2.intensity = shininess*multyLight;
}
if (on) 
{
shininess+=0.1*minusMulty;
//shininess = Mathf.Lerp(0, maxValue, Time.time/timeMulty); 
yield WaitForSeconds(timer);
on=false;
return;
}
else if (!on)
{
  if (shininess>0)
  { 
  //shininess = Mathf.InverseLerp(maxValue, 0, Time.time/timeMulty); 
  shininess-=0.1*minusMulty;
  //return;
  }
  else shininess = 0;
shininess= Mathf.Clamp(shininess, minValue, maxValue);
return; 
}
}

function QualityLevelIs(notification:Notification)
{
currentQuality = notification.data;
}