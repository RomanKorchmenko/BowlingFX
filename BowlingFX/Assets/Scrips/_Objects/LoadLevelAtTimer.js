#pragma strict
var level: String;
var timer: float;
function Start () {

}

function FixedUpdate () {
if(Time.time >=timer) Application.LoadLevel (level);
}