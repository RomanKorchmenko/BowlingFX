#pragma strict
var hourMesh: Transform;
var minuteMesh: Transform;
var secundeMesh: Transform;
var Hh: String;
var Mn: String;
var Sc: String;
var Hhi: int;
var Mni: int;
var Sci: int;
var hourAngle: float;
var minuteAngle: float;
var secondAngle: float;
var curHour: float;
var curMinute: float;
var curSecunde: float;
var dopHour: float;
//var tick: AudioClip;
function Start () {
hourAngle = 360/12;
minuteAngle = 360/60;
secondAngle = 360/60;
}

function Update () {
Hh = System.DateTime.Now.ToString("hh");
Mn = System.DateTime.Now.ToString("mm");
Sc = System.DateTime.Now.ToString("ss");
Hhi = System.Int32.Parse(Hh);
Mni = System.Int32.Parse(Mn);
Sci = System.Int32.Parse(Sc);
dopHour = hourAngle*Mni/60.0;
curHour = Hhi*hourAngle;
curMinute = Mni*minuteAngle;
curSecunde = Sci*secondAngle;
hourMesh.transform.localEulerAngles.y = curHour + dopHour;
minuteMesh.transform.localEulerAngles.y = curMinute;
secundeMesh.transform.localEulerAngles.y = curSecunde;
//audio.Play();
}