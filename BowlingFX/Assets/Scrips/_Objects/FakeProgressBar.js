#pragma strict
function Start()
{
this.guiTexture.pixelInset.width=0;
}

function Update () {
Progress();
}

function Progress()
{
yield WaitForSeconds(1);
var i: float;
i = Mathf.Lerp(0, 1, 0.2*Time.fixedTime);
this.guiTexture.pixelInset.width = Mathf.Lerp(0, Screen.width, i);
}