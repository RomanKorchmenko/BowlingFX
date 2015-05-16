#pragma strict
@script RequireComponent( GUITexture )
var cameraGUI: Camera;
var ball: Transform;
var viewPos : Vector3 ;
function Start()
{
cameraGUI = Camera.main;
//if(cameraGUI == null) cameraGUI = Camera.main;
}
function Update()
{	
//viewPos = cameraGUI.WorldToViewportPoint (Vector3(ball.position.x, ball.position.y, ball.position.z));
if ( Camera.main!=null)viewPos = Camera.main.WorldToViewportPoint (Vector3(ball.position.x, ball.position.y, ball.position.z));
//Camera.main.worldToCameraMatrix
transform.position.x = viewPos.x;
transform.position.y = viewPos.y;
transform.position.z = viewPos.z;
}