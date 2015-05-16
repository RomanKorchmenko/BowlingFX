#pragma strict

function Start () {

}

function Update () {

}

function OnMouseDown()
{
NotificationCenter.DefaultCenter().PostNotification(this, "Restart");
}