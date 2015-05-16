#pragma strict
//var isSwitchers: boolean;
var ison: int;
//var On: Texture2D;
//var Off: Texture2D;
var enable: boolean;
//var GO: GameObject;
function Start()
{
enable=true;
//Bomb();
NotificationCenter.DefaultCenter().AddObserver(this, "Restart");
NotificationCenter.DefaultCenter().AddObserver(this, "Throws");
}
function OnMouseDown()
{
if(enable)
	{
	ison++;
	if(ison>1) ison=0;
	//Bomb();
	NotificationCenter.DefaultCenter().PostNotification(this, "UseBomb", ison);
	SendMessage("UseBombC");
	NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 19);
	enable=false;
	}
}
//function Bomb()
//{
//if(ison==1)
//	{
//guiTexture.texture = On;
//	}
//if(ison==0)
//{
//guiTexture.texture = Off;
//}
//}
function Restart()
{
ison=0;
}
function Throws()
{
SendMessage("RestartC");
enable=true;
}