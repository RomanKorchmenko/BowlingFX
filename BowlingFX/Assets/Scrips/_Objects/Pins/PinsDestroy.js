#pragma strict
var PinsRemoveDelay: float;
var theName: String;
var catchIt: boolean;
var removed: boolean;
function Start()
{
//Destroy(gameObject, 100);
NotificationCenter.DefaultCenter().AddObserver(this, "PinsRemove");
NotificationCenter.DefaultCenter().AddObserver(this, "PinsDownRemove");
NotificationCenter.DefaultCenter().AddObserver(this, "PinDown");
NotificationCenter.DefaultCenter().AddObserver(this, "DoorClosed");
NotificationCenter.DefaultCenter().AddObserver(this, "DoorOpened");
}

function Update()
{
if(catchIt && removed)
	{
 	Destroy(gameObject);
 	//removed=false;
 	}
}


function PinsRemove(notification: Notification)
{
//print("Destroy by PinsRemove");
PinsRemoveDelay = notification.data;
//Destroy(gameObject, PinsRemoveDelay);
catchIt=true;
//Destroy(gameObject);
}

function PinsDownRemove()
{
//catchIt=true;

}

function PinDown(notification: Notification)
{
theName = notification.data;
if(theName==transform.name) catchIt=true;
}

function DoorClosed()
{
removed=true;
}
function DoorOpened()
{
removed=false;
}