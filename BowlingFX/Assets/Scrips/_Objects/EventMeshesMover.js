#pragma strict
//private var startScale: float =1;
var bool: boolean;
var newsc:float;
function Start () {
//startScale = transform.localScale.x;


}
function OnEnable() {
//newsc =0;
bool=true;
}
function Update() {
newsc= Mathf.Clamp(newsc, 0, 5);
if(bool)
{
//transform.parent = Camera.main.transform;
  newsc +=0.1;
 transform.localScale.x = newsc;
 transform.localScale.y = newsc;
 transform.localScale.z = newsc;
// transform.localEulerAngles.x = Mathf.Lerp(90, 1890, 0.2*Time.frameCount);
// if(transform.localScale.x ==5 )
// {
//// var time: float = Time.time;
//// if(Time.time>time+7)
Reverce();
// // }
 }
}

function Reverce()
{
yield WaitForSeconds(4);
newsc -=0.1;
 transform.localScale.x = newsc;
 transform.localScale.y = newsc;
 transform.localScale.z = newsc;
 //transform.localEulerAngles.x = Mathf.Lerp(0, 1890, 0.1*Time.time);
// yield WaitForSeconds(7);
bool=false;
}