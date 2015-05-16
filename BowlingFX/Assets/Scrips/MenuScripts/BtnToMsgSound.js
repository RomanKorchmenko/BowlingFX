#pragma strict
var msg:String;
var msg_on:String;
var isSwitchers: boolean;
private var ison: int;
function OnMouseDown()
{
if(!isSwitchers) NotificationCenter.DefaultCenter().PostNotification(this, "PlaySoundFX", msg);
else if(isSwitchers)
{
if(ison==1)
	{
NotificationCenter.DefaultCenter().PostNotification(this, "PlaySoundFX", msg_on);
	//ison=0;
	}
if(ison==0)
{
NotificationCenter.DefaultCenter().PostNotification(this, "PlaySoundFX", msg);
//ison=1;
}
}
ison++;
if(ison>1) ison=0;
}