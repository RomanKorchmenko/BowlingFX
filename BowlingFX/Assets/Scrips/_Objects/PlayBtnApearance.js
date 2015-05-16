#pragma strict
var heigth:int;
var width: int;
var transp: float;
var checkt: boolean;
var speed: float = 0.2;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "LevelCheckt");
heigth = this.guiTexture.pixelInset.height;
width = this.guiTexture.pixelInset.width;
transp = this.guiTexture.color.a;
this.guiTexture.color.a=0;
//this.guiTexture.pixelInset.height = 0;
//this.guiTexture.pixelInset.width = 0;
}

function Awake()
{
//InvokeRepeating("Resize", 0, 0.01);
}

function Update () {

if(checkt)
{
if(this.guiTexture.color.a >0)
{
this.guiTexture.color.a = Mathf.Lerp(transp, 0, speed*Time.fixedTime);
}

if(this.guiTexture.color.a>=transp) checkt=false;
}
if(!checkt)
{
if(this.guiTexture.color.a<transp)
{
this.guiTexture.color.a = Mathf.Lerp(0, transp, speed*Time.fixedTime);
}
}
}
function LevelCheckt()
{
checkt=true;
}