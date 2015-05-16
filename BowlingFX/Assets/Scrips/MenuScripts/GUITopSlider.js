#pragma strict
var touchCount = 0;
var tmpY: int;
var changer: int;
var move: String;
var gameGUI: GameObject;
var pauseGUI: GameObject;
var HiGUI: boolean;
private var delta: int;
//var pauseTime: float = 15;
//var time: float;
var bool: boolean;
function Start()
{
if(HiGUI) delta=2;
else 
	delta=1;
tmpY = guiTexture.pixelInset.y;
//time = Time.time;
NotificationCenter.DefaultCenter().AddObserver(this, "MoveUp");
NotificationCenter.DefaultCenter().AddObserver(this, "MoveDown");
} 

function Awake()
{

}
function Update () {
guiTexture.pixelInset.y = Mathf.Clamp(guiTexture.pixelInset.y, -guiTexture.pixelInset.height, tmpY);
if(changer>1) changer=0;
if (move == "MoveDown"  && guiTexture.pixelInset.y!=-guiTexture.pixelInset.height) // pause
{
if(guiTexture.pixelInset.y!=tmpY) gameGUI.gameObject.SetActiveRecursively(false);
guiTexture.pixelInset.y -=4*delta;
if(guiTexture.pixelInset.y==-guiTexture.pixelInset.height)
{
pauseGUI.gameObject.SetActiveRecursively(true);
move = "";
 }

return;
}
if (move == "MoveUp" && guiTexture.pixelInset.y<=tmpY) //game mode
{
guiTexture.pixelInset.y +=4*delta;
if(guiTexture.pixelInset.y!=-guiTexture.pixelInset.height) pauseGUI.gameObject.SetActiveRecursively(false); 
 if(guiTexture.pixelInset.y==tmpY)
{
 gameGUI.gameObject.SetActiveRecursively(true);
 move = "";
 }
return;
}
}

function OnMouseDown()
{
move = "MoveDown";
NotificationCenter.DefaultCenter().PostNotification(this, "Pause", 1);

}

function MoveUp()
{
//time = Time.time;
move = "MoveUp"; 
}

function MoveDown()
{
move = "MoveDown";
//changer=1;
//NotificationCenter.DefaultCenter().PostNotification(this, "Pause", changer);
}