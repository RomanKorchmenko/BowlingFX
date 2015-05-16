#pragma strict
var openAnim: String = "DissolveDoorOpen";
var closeAnim: String = "DissolveDoorClosed";
private var closedTime: float = 0.0;
var open: boolean = false;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "DoorsAnimation");
NotificationCenter.DefaultCenter().AddObserver(this, "CloseDoor");
//yield WaitForSeconds (2.0);
//open = true;
}

function LateUpdate () {
if(open) 
	{
	animation.Play(openAnim);
	}
if(!open) 
		{
	animation.Play(closeAnim);
	}
		
}

function DoorsAnimation(notification:Notification)
{
closedTime = notification.data;
open = false;
yield WaitForSeconds (5);
open = true;
}


function Closed()
{
NotificationCenter.DefaultCenter().PostNotification(this, "DoorClosed");
}
function Open()
{
NotificationCenter.DefaultCenter().PostNotification(this, "DoorOpened");
}

function CloseDoor()
{
open = false;
}