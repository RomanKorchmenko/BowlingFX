#pragma strict
var FirstBowlingCamera: Camera;
var PauseCam: Camera;
var PauseGO: GameObject;
var timerPause: boolean;
function Awake()
{
}
function Start()
{
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
PauseCam.enabled = false;
//PauseGO.gameObject.SetActiveRecursively(false);
}
function LateUpdate()
{

if(timerPause)
	{
	PauseCameraEanable();
	}
		if(!timerPause)
		{
	    FirstCameraEnable();
	  	}
}
function CameraReset()
{
FirstBowlingCamera.enabled = false;
PauseCam.enabled = false;
//PauseGO.gameObject.SetActiveRecursively(false);
}
function PauseCameraEanable()
{
FirstBowlingCamera.enabled = false;
//PauseGO.gameObject.SetActiveRecursively(true);
PauseCam.enabled = true;
}
function FirstCameraEnable()
{
PauseCam.enabled = false;
//PauseGO.gameObject.SetActiveRecursively(false);
FirstBowlingCamera.enabled = true;  
}

function Pause(notification: Notification)
{
if(notification.data==1) timerPause=true;
if(notification.data==0) timerPause=false;
}