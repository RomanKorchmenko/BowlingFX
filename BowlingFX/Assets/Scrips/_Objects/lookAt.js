#pragma strict

function Start () {

}

function Update () {
if(!Camera.main) return;
transform.LookAt(Camera.main.transform);
//var events = GameOject.FindWithTag("3dEvents");
//Destroy(GameObject.FindWithTag("3dEvents"), 15);
//Destroy (gameObject, 15);
}