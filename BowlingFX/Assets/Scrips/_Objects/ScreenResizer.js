#pragma strict
//var ScreenPictures: Texture2D[];
//private var ScreenPicture = Texture2D;
//private var count: int;
var coef: float;
var xTmp: int;
var yTmp: int;
function Start()
{
xTmp = Screen.width;
yTmp = Screen.height;
//count = Random.Range(0, ScreenPictures.Length);
//this.guiTexture.texture = ScreenPictures[count];
//coef = 2560/1600;
}

function Awake () {
//InvokeRepeating("Resize", 0, 0.2);


}

function LateUpdate () {
Resize();
}

function Resize()
{
//coef = Screen.width/Screen.height;
if((Screen.width/Screen.height)>1) // landscape
{
 this.guiTexture.pixelInset.height = Screen.height;
 this.guiTexture.pixelInset.width =  Screen.height;
 }
else if ((Screen.width/Screen.height)<1) //portrait
	{
	 this.guiTexture.pixelInset.width = Screen.width;
	 this.guiTexture.pixelInset.height =  Screen.width;
	 }
	 this.guiTexture.pixelInset.y = -this.guiTexture.pixelInset.height/2;
	this.guiTexture.pixelInset.x = -this.guiTexture.pixelInset.width/2;


}