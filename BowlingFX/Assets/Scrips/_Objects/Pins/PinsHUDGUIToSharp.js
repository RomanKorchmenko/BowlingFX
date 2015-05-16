#pragma strict
var GO: GameObject;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "PinDown");
NotificationCenter.DefaultCenter().AddObserver(this, "NextRound");
NotificationCenter.DefaultCenter().AddObserver(this, "Restart");
}

function PinDown(notification:Notification)
{
GO.SendMessage("PinDown", notification.data);
}
function NextRound()
{
GO.SendMessage("NextRound");
}

function Restart()
{
NextRound();
}