#pragma strict
var Messege: String ="LevelCheckt";
var msgData:String;
function OnMouseDown()
{
NotificationCenter.DefaultCenter().PostNotification(this, Messege, msgData);
}