#pragma strict
var dpi: float;
function Start () {
InvokeRepeating("GetDPI", 0, 0.1);
}

function Update () {

}

function GetDPI()
{
dpi = Mathf.Sqrt(Screen.width*Screen.width + Screen.height * Screen.height);
}
