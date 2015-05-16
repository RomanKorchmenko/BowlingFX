#pragma strict
var doorLeft = MyTranslate();
var doorRight = MyTranslate();
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
doorLeft.Start();
doorRight.Start();
}
function FixedUpdate () {
if(open) 
	{
	doorLeft.Open();
	doorRight.Open();
	if(!init)
	{
	Open();
	init=true;
	}
	}
if(!open) 
		{
	doorLeft.Close();
	doorRight.Close();
	if(init)
	{
	Closed();
	init = false;
	}
		}
}

function DoorsAnimation(notification:Notification)
{
closedTime = notification.data;
//Debug.Log("DoorsAnimation to door");
open = false;
yield WaitForSeconds (closedTime);
open = true;
}
function Closed()
{
audio.PlayOneShot(closesound);
yield WaitForSeconds(doorRight.moveTime);
if(doorLeft.TranslateObject.transform.position.x==0.0)
{
NotificationCenter.DefaultCenter().PostNotification(this, "DoorClosed");
}
//print("close msg sended_"+Time.time);
}
function Open()
{
audio.PlayOneShot(opensound);
yield WaitForSeconds(doorRight.moveTime);
if(doorLeft.TranslateObject.transform.position.x==-15)
{
NotificationCenter.DefaultCenter().PostNotification(this, "DoorOpened");
}
//print("Open msg sended_"+Time.time);
}
function CloseDoor()
{
open = false;
}