#pragma strict
var firsEnabler: boolean;
var TutorialGO: GameObject;
function Start () {
if(!PlayerPrefs.GetInt("FirstTutorial"))
{
yield WaitForSeconds(3);
Tutorial();
 }
}

function Update () {

}
function Tutorial()
{
TutorialGO.SendMessage("TutorialOn");
NotificationCenter.DefaultCenter().PostNotification(this, "MoveDown");
NotificationCenter.DefaultCenter().PostNotification(this, "Pause", 1);

}

function DoorClosed()
{

}