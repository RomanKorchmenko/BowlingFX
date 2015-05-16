#pragma strict
var pixelPos: Vector3;
var x: int;
var y: int;
var guiCam: Camera;
var SW: int;
var SH: int;
function Start () {
SW = Screen.width/2;
SH = Screen.height/2;
guiCam = GameObject.Find("3DEventCamera").camera;
pixelPos = guiCam.WorldToScreenPoint (this.transform.position);
x = SW - Mathf.FloorToInt(pixelPos.y);
y = SH - Mathf.FloorToInt(pixelPos.x);
}

function Update () {
transform.position = guiCam.ScreenToWorldPoint (Vector3 (x, y, transform.position.z));
}