#pragma strict
var height: int;
var width: int;
var Landscape: Texture2D;
var Portrait: Texture2D;
var orient: String;
function Start () {
orient = "Portrait";
guiTexture.texture = Portrait;
}

function LateUpdate () {
if (Input.deviceOrientation == DeviceOrientation.LandscapeLeft || Input.deviceOrientation == DeviceOrientation.LandscapeRight)
{
orient = "Landscape";
guiTexture.texture = Landscape;
}
if (Input.deviceOrientation == DeviceOrientation.Portrait || Input.deviceOrientation == DeviceOrientation.PortraitUpsideDown)
{
orient = "Portrait";
guiTexture.texture = Portrait;
}
height=Screen.height;
width=Screen.width;
guiTexture.pixelInset.x=-width/2;
guiTexture.pixelInset.y=-height/2;
guiTexture.pixelInset.height=height;
guiTexture.pixelInset.width=width;
}