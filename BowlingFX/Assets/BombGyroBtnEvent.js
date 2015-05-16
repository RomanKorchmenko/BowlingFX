#pragma strict

function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "Restart");
NotificationCenter.DefaultCenter().AddObserver(this, "Throws");
}

function Update () {

}

function UseBombBtn()
{
	NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 19);
	NotificationCenter.DefaultCenter().PostNotification(this, "UseBomb");
	//print("UseBomb");
}
function UseGyroBtn()
{
	NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 18);
	NotificationCenter.DefaultCenter().PostNotification(this, "UseGyro");
	//print("UseGyro");
}
function Restart()
{
SendMessage("RestartC");
}
function Throws()
{
SendMessage("ThrowsC");
}