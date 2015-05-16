#pragma strict
var MsgResievers: GameObject[];
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
}

function Pause(notification: Notification)
	{
	for (var i:int; i<MsgResievers.length; i++)
{
MsgResievers[i].SendMessage("Pause", notification.data);
}

}