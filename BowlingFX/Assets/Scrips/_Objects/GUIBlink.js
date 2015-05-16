#pragma strict
var transp: float;
var speed: float = 1.0;
function Start () {
transp = guiTexture.color.a;
}

function LateUpdate () {
this.guiTexture.color.a = Mathf.PingPong(speed*Time.time, transp);
}