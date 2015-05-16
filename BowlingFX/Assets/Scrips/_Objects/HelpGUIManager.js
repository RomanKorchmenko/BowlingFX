#pragma strict
var HelpMove: GameObject;
var HelpSwipe: GameObject;
var moveBool: boolean;
var swipeBool: boolean;
var timerPause: boolean;
var helpDone: boolean;
var isEnable: boolean;
var counter: int;
function Start () {
isEnable=true;
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
NotificationCenter.DefaultCenter().AddObserver(this, "HelpMoveDone");
NotificationCenter.DefaultCenter().AddObserver(this, "BallOut");
//NotificationCenter.DefaultCenter().AddObserver(this, "OnBumperCollision");
}

function Update () 
{
	if(isEnable)
	{
		if(!timerPause)
		{
		if(!moveBool) HelpMove.active = true;
		else if (moveBool) HelpMove.active = false;
		if(!swipeBool) HelpSwipe.active = true;
		else if(swipeBool) HelpSwipe.active = false;
		}
			if(timerPause)
			{
			HelpSwipe.active = false;
			HelpMove.active = false;
			}
	}
				else if(!isEnable)
				{
				HelpSwipe.active = false;
				HelpMove.active = false;
				}
}

function Pause(notification: Notification)
{
if(notification.data==1) timerPause=true;
if(notification.data==0) timerPause=false;
}

function HelpMoveDone()
{
counter++;
if(counter==2)
	{
	moveBool=true;
	swipeBool=false;
	counter=0;
	}
}

function BallOut()
{
moveBool=true;
swipeBool=true;
isEnable=false;
}