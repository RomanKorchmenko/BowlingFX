#pragma strict
//@script ExecuteInEditMode()
var Version: String;
var VersionScript: _VersionBundle;
function Start () {
Version = GameObject.Find("__GameManager").GetComponent(_VersionBundle).VersionBundle;
this.guiText.text = "Version: "+Version;
}

function Update () {

}