#pragma strict
var MoveForward : boolean;
var MoveBack : boolean;
var MoveRight : boolean;
var MoveLeft : boolean;
var x: float;
var z: float;
function Start () {

}

function Update () {
if(MoveForward) {

z= 0.01;
}
if(MoveBack) {

z=-0.01;
}
if(MoveRight) {
x=0.01;
}
if(MoveLeft) {
x=-0.01;
}
transform.Translate(x, 0, z);
}