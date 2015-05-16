#pragma strict
var Y: float;
function Start () {
Y = transform.position.y;
}

function Update () {
transform.position.y = Mathf.PingPong(50*Time.time+Y, 15);
}