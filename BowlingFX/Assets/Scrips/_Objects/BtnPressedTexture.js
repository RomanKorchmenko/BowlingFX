#pragma strict
var overTex: Texture2D;
var ownTex: Texture2D;
var count: int;
var msg: String;
var timerPause: boolean;
function Awake()
{
InvokeRepeating("ChangerBtn", 0, 0.2);
NotificationCenter.DefaultCenter().AddObserver(this, "MoveUp");
}


function Start () {
ownTex = guiTexture.texture;
NotificationCenter.DefaultCenter().AddObserver(this, "CounterOver");

}

function ChangerBtn () {
if(count==0)guiTexture.texture = ownTex;
else if(count==1)guiTexture.texture = overTex;
}

function OnMouseDown()
{
count++;
if(count>1) count=0;
}

function CounterOver(notification:Notification)
{
if(msg==notification.data) count=0;
}

function MoveUp()
{
count=0;
}