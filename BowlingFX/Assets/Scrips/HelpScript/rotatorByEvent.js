#pragma strict
var rot: boolean;
var trigger: TriggerScale;
var xdur=1.0;
var axysX:boolean;
var axysY:boolean; 
var axysZ:boolean;
var vec: Vector3;

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
rot = trigger.scale;
  
    // argument for cosine
    //var phi : float = Time.time / duration * xdur * Mathf.PI;
    // get cosine and transform from -1..1 to 0..1 range
    //var amplitude : float = Mathf.Cos( phi ) * x;
    //amplitude = Mathf.Clamp(amplitude, 0.35, 0.5);
    // set light color
    //transform.localEulerAngles = Vector3(0, 0 , Time.deltaTime);
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
        if(rot) transform.Rotate(vec * Time.deltaTime*xdur, Space.Self);
    //transform.position += Vector3.forward * Time.deltaTime;
}