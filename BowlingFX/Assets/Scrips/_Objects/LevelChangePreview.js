#pragma strict
var Previews: Texture2D[];
var currentPreview: Texture2D;
var counter: int;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "LevelCheckt");
}

function Update () {
currentPreview = Previews[counter];
this.guiTexture.texture = currentPreview;
}

function LevelCheckt(notification:Notification)
{
var data1: String;
data1 = notification.data;
counter = System.Int32.Parse(data1);
}