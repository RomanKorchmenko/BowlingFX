#pragma strict
var Camera1: Camera;
var Camera2: Camera;
var skymat: Material;
function Start () {
//Camera1.AddComponent("Skybox");
Camera1.GetComponent(Skybox).material = skymat;
Camera2.GetComponent(Skybox).material = skymat;
}

function Update () {

}