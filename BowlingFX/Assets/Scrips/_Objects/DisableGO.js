#pragma strict
var ParentGO: GameObject;
function Start () {

}

function Update () {

}

function OnMouseDown()
{
ParentGO.gameObject.SetActiveRecursively(false);
//ParentGO.gameObject.SetActive(false);
}