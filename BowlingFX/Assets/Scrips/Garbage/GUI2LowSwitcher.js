#pragma strict
var touchCount = 0;
var Menu1GUI: GameObject;
var Menu2GUI: GameObject;
var changer: int;
//var menuMSG:String = "Mesage";
var timerPause: boolean;
function Start()
{
//NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
}
function LateUpdate () {
for (var i = 0; i < Input.touchCount; i++)
	{
var touch = Input.GetTouch(i);
var hold =  Input.GetTouch(i);
if(hold.phase == TouchPhase.Stationary && guiTexture.HitTest(hold.position))	
 			{
 			touchCount ++;
 			changer++;
 			if(changer==1)
{
print("changing menu1");
	Menu1GUI.gameObject.SetActiveRecursively(false);
	Menu2GUI.gameObject.SetActiveRecursively(true);
	NotificationCenter.DefaultCenter().PostNotification(this, "CloseOptions");
	}
if(changer==0)	
{
print("changing menu2");
	Menu1GUI.gameObject.SetActiveRecursively(true);
	Menu2GUI.gameObject.SetActiveRecursively(false);
	}
if(changer>1) changer=0;
			//NotificationCenter.DefaultCenter().PostNotification(this, menuMSG, changer);
 			}
 				
else if(touch.phase == TouchPhase.Began && guiTexture.HitTest(touch.position))
    		{
    		touchCount ++;
    		}
}
}
function OnMouseDown()
{
changer++;
if(changer==1)
{
print("changing menu1");
	Menu1GUI.gameObject.SetActiveRecursively(false);
	Menu2GUI.gameObject.SetActiveRecursively(true);
	}
if(changer==0)	
{
print("changing menu2");
	Menu1GUI.gameObject.SetActiveRecursively(true);
	Menu2GUI.gameObject.SetActiveRecursively(false);
	}
if(changer>1) changer=0;
//NotificationCenter.DefaultCenter().PostNotification(this, menuMSG, changer);
}
//function Pause(notification: Notification)
//{
//if(notification.data==1) timerPause=true;
//if(notification.data==0) timerPause=false;
//}