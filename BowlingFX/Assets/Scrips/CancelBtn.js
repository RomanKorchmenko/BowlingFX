#pragma strict
var GO: GameObject;
function Start () {

}

function Update () {

}

function OnMouseDown()
{
//NotificationCenter.DefaultCenter().PostNotification(this, "Cancel");
GO.SendMessage("Cancel");
}