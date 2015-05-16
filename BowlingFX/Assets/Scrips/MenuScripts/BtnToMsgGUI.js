#pragma strict
var msg:String;
//var panel: GameObject;
function OnMouseDown()
{
NotificationCenter.DefaultCenter().PostNotification(this, "LevelCheckt", msg);
//panel.SendMessage( "LevelCheckt", msg);
//print("LevelCheckt "+msg);
print("BtmMsg_"+msg);
}