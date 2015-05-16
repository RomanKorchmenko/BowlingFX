#pragma strict
var myCamera: Camera;
function Start () {

}

function LateUpdate () {
if(myCamera.enabled)
{
 //myCamera.GetComponent(AudioListener).enabled = true ;
  myCamera.GetComponent(SmoothFollow3DBowling).enabled = true ;
 }
else if (!myCamera.enabled)
{
  //myCamera.GetComponent(AudioListener).enabled = false ;
  myCamera.GetComponent(SmoothFollow3DBowling).enabled = false ;
  }
}