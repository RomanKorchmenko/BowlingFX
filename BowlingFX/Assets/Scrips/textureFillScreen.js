#pragma strict

function Start () {
InvokeRepeating("Resize", 0, 0.2);
}

function Resize () {
guiTexture.pixelInset.height = Screen.height;
guiTexture.pixelInset.width = Screen.width;
guiTexture.pixelInset.x = -Screen.width/2;
guiTexture.pixelInset.y = -Screen.height/2;
}