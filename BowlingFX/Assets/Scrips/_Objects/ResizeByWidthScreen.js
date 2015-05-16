#pragma strict
function Update () {
if(Screen.height/Screen.width <1) //landscape
{
guiTexture.pixelInset.width = Screen.height;
guiTexture.pixelInset.height = Screen.height;
guiTexture.pixelInset.x = -Screen.height/2;
guiTexture.pixelInset.y = -Screen.height/2;
}
else //portrait
	{
	guiTexture.pixelInset.width = Screen.width;
	guiTexture.pixelInset.height = Screen.width;
	guiTexture.pixelInset.x = -Screen.width/2;
	guiTexture.pixelInset.y = -Screen.width/2;
	}
}