#pragma strict
var msg:String;
function OnMouseDown()
{
NotificationCenter.DefaultCenter().PostNotification(this, "SpriteGUI", msg);
}