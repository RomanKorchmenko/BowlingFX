#pragma strict
//@script RequireComponent( GUITexture )
var cameraGUI: Camera;
var gui: Transform;
var viewPos : Vector3 ;
function Start()
{
if(cameraGUI == null) cameraGUI = Camera.main;
}
function Update()
{	
viewPos = cameraGUI.ViewportToWorldPoint(Vector3(gui.transform.position.x, gui.transform.position.y, gui.transform.position.z));
//Camera.main.worldToCameraMatrix
transform.position.x = viewPos.x;
transform.position.y = viewPos.y;
//transform.position.z = viewPos.z;
}