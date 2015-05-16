#pragma strict
var Previews: Texture2D[];
var currentPreview: Texture2D;
var counter: int;
function Awake () {
counter=0;
currentPreview = Previews[0];
//print(Previews.Length);
//NotificationCenter.DefaultCenter().AddObserver(this, "LevelCheckt");
}

function Update () {


}

function OnSwipe()
{

}
function OnMouseDown()
{
counter++;
//print(counter);

if (counter>Previews.Length-1)
{
PlayerPrefs.SetInt("FirstTutorial", 1);
counter=0;
}
currentPreview = Previews[counter];
this.guiTexture.texture = currentPreview;
}