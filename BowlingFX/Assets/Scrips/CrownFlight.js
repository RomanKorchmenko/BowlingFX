#pragma strict
var go: GameObject;
var texture:Mesh;
var switchableTextures = new List.<Mesh>();
var currentTexture:int = 0;
private var delayTmp: float;
var delay: float;
var switchTo:int;
var timeAnim: float;
var time: float;
function Start () {
timeAnim= delay*switchableTextures.Count;
switchTo=0;
time=0;
if (switchableTextures.Count > 0) {
			texture = switchableTextures[currentTexture];
		}
}
function FixedUpdate () {
if(switchTo==switchableTextures.Count) switchTo=0;
go.gameObject.GetComponent(MeshFilter).sharedMesh =texture;
if(Time.time> time+delay)
{
if (switchTo < switchableTextures.Count ) {
switchTo++;
if(Time.time<=time+timeAnim)
{
	texture = switchableTextures[switchTo-1];
	currentTexture = switchTo;
	time=Time.time;
}
}
}

}
