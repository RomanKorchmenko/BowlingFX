#pragma strict

var xdur=1.0;
var axysX:boolean;
var axysY:boolean; 
var axysZ:boolean;
var vec: Vector3;
//var localRot: Quaternion;
function Start()
{
//localRot = transform.rotation;
}

function Compare()
{
if (axysX==true)
 {
 axysY=false;
 axysZ=false;
  }
  else if (axysY==true)
  {
  axysX=false;
  axysZ=false;
  }
  else if (axysZ==true)
  {
  axysX=false;
  axysY=false;
}
} 

function Update() {
    Compare();
    if (axysZ==true)
    {
    vec =Vector3.forward;
    }
    else if(axysX==true){
    vec=Vector3.right;
        }
    else if(axysY==true){
    vec=Vector3.up;
        }
    transform.Rotate(vec * Time.fixedDeltaTime*xdur, Space.Self);
    //transform.position += Vector3.forward * Time.deltaTime;
}