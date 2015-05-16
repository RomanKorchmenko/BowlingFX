#pragma strict
var targets = new List.<Transform>();
var carrentTarget: Transform;
var plus: int;
var timeToSwitch: float=5.0;
var timer: float;
var timerPause: boolean;
var speedLerp: float = 0.0002;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
}
function FixedUpdate () {
if(timerPause)
		{
		
if (plus>targets.Count) {
	plus = 0;
	}
if(Time.time>timer+timeToSwitch)
		{
plus++;
timer = Time.time;
}
if (plus<targets.Count) 
			{
carrentTarget  = targets[plus];
var x: float = Mathf.Lerp(transform.position.x, carrentTarget.position.x, speedLerp*Time.time);
var z: float = Mathf.Lerp(transform.position.z, carrentTarget.position.z, speedLerp*Time.time);
transform.position = Vector3(x, transform.position.y, z);
			}
		}
}
function Pause(notification: Notification)
	{
if(notification.data==1)
{ timerPause=true;
timer = Time.time;
}
if(notification.data==0) timerPause=false;
	}