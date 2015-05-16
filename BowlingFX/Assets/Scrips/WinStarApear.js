#pragma strict
var width: float;
var height: float;
var enable: boolean;
var delay: float;
//var time: float;
var currentTime: float;
function Awake () {
width = this.guiTexture.pixelInset.width;
enable=true;
currentTime = Time.time;

}

function Update () {
	if(enable)
	{
	Star();
	}
}

function Star()
{
yield WaitForSeconds(delay*Time.fixedTime);
this.guiTexture.pixelInset.width = Mathf.Lerp(width*100, width, 0.3*Time.fixedTime);
this.guiTexture.pixelInset.height = Mathf.Lerp(width*100, width, 0.3*Time.fixedTime);
guiTexture.color.a = Mathf.Lerp(0, 1, 0.3*Time.fixedTime);
}