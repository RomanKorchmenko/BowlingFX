#pragma strict
//var isSwitchers: boolean;
var ison: int;
//var On: Texture2D;
//var Off: Texture2D;
var enable: boolean;
function Start()
{
enable=true;
//Gyro();
NotificationCenter.DefaultCenter().AddObserver(this, "Restart");
NotificationCenter.DefaultCenter().AddObserver(this, "Throws");
}
function OnMouseDown()
{
if(enable)
	{
	ison++;
	if(ison>1) ison=0;
	//Gyro();
	//NotificationCenter.DefaultCenter().PostNotification(this, "UseGyro", ison);
	SendMessage("UseGyroC");
	NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 18);
	enable=false;
	}
}
//function Gyro()
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
enable=true;
}