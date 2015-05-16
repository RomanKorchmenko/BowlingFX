#pragma strict
var defaulttime: float=3.0;
var slowtime: float=1.5;
var owntime: float;
var GO: GameObject;
var timeToWait:float =15;
var time: float;
var once: boolean;
var pauseBool: boolean;
var timerPause: boolean;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "UseGyro");
NotificationCenter.DefaultCenter().AddObserver(this, "BallIsRemoved");
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
Time.timeScale= defaulttime;
defaulttime = Time.timeScale;
owntime = Time.timeScale;
time = Time.realtimeSinceStartup;
}
function OnEnable()
{
time = Time.realtimeSinceStartup;
}

function Update () {
    if (Input.touchCount > 0 || (Mathf.Abs(Input.GetAxis("Mouse X"))>0 || Input.GetMouseButton(0))) 
      		{
		time = Time.realtimeSinceStartup;
 		}
if(Time.realtimeSinceStartup>=time+timeToWait && Time.timeScale !=0)
{
if(!once)
	{
GO.gameObject.SendMessage("TimePause");
once = true;
 	}
 }
 if(timerPause) once=false;
}

function UseGyro()
{
Time.timeScale = slowtime;
}
function BallIsRemoved()
{
Time.timeScale = defaulttime;
}
function Pause(notification: Notification)
	{
if(notification.data==1)
{
Time.timeScale =0;
}
if(notification.data==0) 
{
Time.timeScale = defaulttime;
once = false;
}
}