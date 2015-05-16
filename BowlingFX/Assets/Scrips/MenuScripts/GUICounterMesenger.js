#pragma strict
//var touchCount = 0;
var menuMSG:String = "Mesage";
//var timerPause: boolean;
var changer: int;
function Start()
{
//NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
}

function OnMouseDown()
{
Post();
}
function Post()
{
NotificationCenter.DefaultCenter().PostNotification(this, "CounterOver", menuMSG );
//Debug.Log(menuMSG);
}


//function Pause(notification: Notification)
//{
//if(notification.data==1) timerPause=true;
//if(notification.data==0) timerPause=false;
//}