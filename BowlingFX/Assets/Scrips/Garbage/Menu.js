#pragma strict
var activate: boolean;
var menu: GameObject;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "MenuActivator");
menu.gameObject.SetActiveRecursively(false);
}

function Update () {
}

function MenuActivator(notification: Notification)
{
if( notification.data==1) menu.gameObject.SetActive(true);
//else if( notification.data==0) menu.gameObject.SetActiveRecursively(false);
}