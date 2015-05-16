#pragma strict
var i: int;
var Auto: Texture2D;
var Portrait: Texture2D;
var Landscape: Texture2D;
function Start()
{
Orient();
}

function OnMouseDown()
{
i++;
if(i>2) i=0;
Orient();
}

function Orient()
{
if(i==0)
{
 Screen.orientation = ScreenOrientation.AutoRotation;
 this.guiTexture.texture = Auto;
 }
if(i==1)
{
 Screen.orientation = ScreenOrientation.Portrait;
  guiTexture.texture = Portrait;
 }
if(i==2)
{
 Screen.orientation = ScreenOrientation.LandscapeLeft;
 guiTexture.texture = Landscape;
 }
}