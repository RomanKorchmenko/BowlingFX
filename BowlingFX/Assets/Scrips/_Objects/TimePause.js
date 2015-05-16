#pragma strict
var pauseBool: boolean;
var timeToWait:float =15;
var time: float;
var timerPause: boolean;
var once: boolean;
var GO: GameObject;
function Start () {
//GO = GameObject.Find("_dfMenuController");
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
pauseBool=false;
//timerPause=true;
}

function Update () {
    if (Input.touchCount > 0 || (Mathf.Abs(Input.GetAxis("Mouse X"))>0 || Input.GetMouseButton(0))) 
      		{
      		once=false;
       pauseBool = false;
		time = Time.realtimeSinceStartup;
        
 		}
 		else 
 			pauseBool=true;


if(Time.realtimeSinceStartup>=time+timeToWait)
{
if(!once)
	{
//NotificationCenter.DefaultCenter().PostNotification(this, "Pause", 1);
//NotificationCenter.DefaultCenter().PostNotification(this, "MoveDown");
//Debug.Log("SetPause");
//GO.gameObject.SendMessage("TopPanelMenu");
GO.gameObject.SendMessage("TimePause");
once = true;
 	}
 }
 if(timerPause) once=false;
}

function Awake()
{
time = Time.realtimeSinceStartup;
//InvokeRepeating("PauseTest",0,0.5);

}
function Pause(notification: Notification)
{
if(notification.data==1)
 timerPause=true;
if(notification.data==0)
{
 timerPause=false;
time = Time.realtimeSinceStartup;
}
}