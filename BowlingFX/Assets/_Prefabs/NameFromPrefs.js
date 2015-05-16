#pragma strict
var Name: GUIText;
function Start () {
if(PlayerPrefs.GetString("Player Name")) Name.text = PlayerPrefs.GetString("Player Name");
else Name.text="Player1";
	
}

function Update () {

}