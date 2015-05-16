#pragma strict
var touchCount = 0;
var changer: int;
enum ButonType {increase, decrease, back, quit, offsound, onsound, reset, exitToMenu, hideunhide};
var currentType:ButonType;
var menuLvl: String;
//var Audio: AudioListener;
var ownGUI: GameObject;
var backGUI: GameObject;

function Start()
{

}

function OnMouseDown()
{
//changer++;
			switch (currentType) {
			case currentType.increase: QualitySettings.IncreaseLevel(); break;
			case currentType.decrease: QualitySettings.DecreaseLevel(); break;
			case currentType.back: Back(); break;
			case currentType.quit: Application.Quit(); break;
			//case currentType.offsound: SoundPause(); break;
			//case currentType.onsound: SoundPauseEnd(); break;
			case currentType.reset: ResetGame(); break;
			case currentType.exitToMenu: Application.LoadLevel (menuLvl); break;
			case currentType.hideunhide: HideUnhide(); break;
			}
}


//function SoundPause()
//{
////print("pause");
//NotificationCenter.DefaultCenter().PostNotification(this, "SoundPause");
//}

//function SoundPauseEnd()
//{
////print("play");
//NotificationCenter.DefaultCenter().PostNotification(this, "SoundPauseEnd");
//}

function ResetGame()
{
NotificationCenter.DefaultCenter().PostNotification(this, "ResetGame");
}

function Back()
{
ownGUI.gameObject.SetActiveRecursively(false);
backGUI.gameObject.SetActiveRecursively(true);
}
function HideUnhide()
{
touchCount++;
if(touchCount>1) touchCount=0;
if(touchCount==1) backGUI.gameObject.SetActiveRecursively(true);
if(touchCount==0) backGUI.gameObject.SetActiveRecursively(false);

//touchCount = Mathf.Max(0, touchCount-1);
}
