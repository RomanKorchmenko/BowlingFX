#pragma strict
var opensound: AudioClip;
var closesound: AudioClip;
private var closedTime: float = 0.0;
var open: boolean = false;
var init: boolean;
var delayMsg: float = 1.5;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "DoorsAnimation");
NotificationCenter.DefaultCenter().AddObserver(this, "CloseDoor");
yield WaitForSeconds (2.0);
open = true;
}
//function Update () {
//if(open) 
//	{
//	
//	audio.PlayOneShot(opensound);
//	}
//if(!open) 
//		{
//	
//	audio.PlayOneShot(closesound);
//	init = false;
//	}
//}

function DoorsAnimation(notification:Notification)
{
closedTime = notification.data;
//Debug.Log("DoorsAnimation to door");
open = false;
audio.PlayOneShot(closesound);
yield WaitForSeconds (closedTime);
open = true;
audio.PlayOneShot(opensound);
}
//function Closed()
//{
//audio.PlayOneShot(closesound);
//}
//function Open()
//{
//audio.PlayOneShot(opensound);
//}
function CloseDoor()
{
open = false;
}