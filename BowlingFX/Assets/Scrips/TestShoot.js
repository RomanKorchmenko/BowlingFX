#pragma strict
var pref: GameObject;
function Start () {

}

function Update () {
if(Input.GetButtonDown("Jump")) Instantiate(pref, transform.position, transform.localRotation);
}