#pragma strict
var levels: String[];
var currentLevel: String;
var level: int;
var counter: int;
var isPlay: boolean;
var own: int;
//var overtexture: Texture2D;
function Start () {
isPlay=false;
NotificationCenter.DefaultCenter().AddObserver(this, "LevelCheckt");
}

function Update () {
currentLevel = levels[level];
if(isPlay && counter==2) Application.LoadLevel(currentLevel);

}

function LevelCheckt(notification:Notification)
{
level = System.Int32.Parse(notification.data); 
if(level!= own) counter=0;
}

function OnMouseDown()
{
//this.guiTexture.texture = overtexture;
counter++;
//yield WaitForSeconds(1);
isPlay=true;
}