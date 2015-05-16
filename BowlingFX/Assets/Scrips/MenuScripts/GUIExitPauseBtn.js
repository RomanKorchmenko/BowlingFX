#pragma strict
function OnMouseDown()
{
NotificationCenter.DefaultCenter().PostNotification(this, "Pause", 0);
NotificationCenter.DefaultCenter().PostNotification(this, "MoveUp");
}