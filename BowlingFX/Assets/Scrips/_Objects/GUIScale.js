#pragma strict
var scaleXYZ: float;
var ScreenWidth: float;
var width: float;
//var height: float;
function Start () {
//scaleXYZ = transform.localScale.x;
width = this.guiTexture.pixelInset.width;
}

function Awake()
{
InvokeRepeating("Width", 0, 0.2);
}



function Update () {
this.guiTexture.pixelInset.width = 1.1*width*scaleXYZ;
this.guiTexture.pixelInset.height = 1.1*width*scaleXYZ;
this.guiTexture.pixelInset.x = -0.5*this.guiTexture.pixelInset.width;
this.guiTexture.pixelInset.y = -0.5*this.guiTexture.pixelInset.width;
}

function Width()
{
ScreenWidth = Screen.width;
scaleXYZ = Mathf.Clamp(ScreenWidth/480, 1, 2);
}