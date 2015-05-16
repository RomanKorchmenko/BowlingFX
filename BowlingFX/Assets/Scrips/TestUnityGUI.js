#pragma strict
/* Button Content examples */

// JavaScript
var icon : Texture2D;
var customSkin : GUISkin;
function OnGUI () {
GUI.skin = customSkin;
GUILayout.BeginArea (Rect (10,10,400,400));
	GUILayout.Button ("I am a re-Skinned Button", GUILayout.Width(400), GUILayout.Height(60));
	GUILayout.EndArea ();
}