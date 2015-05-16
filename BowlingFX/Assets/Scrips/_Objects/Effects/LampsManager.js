#pragma strict
@script RequireComponent(MeshRenderer)
var speed: float=1.0;
var speedLight: float=1.0;
var a: float=1.0;
var lowerCase: Transform;
var highCase: Transform;
var i:float;
var lowcaseZ: float;
var highCaseZ: float;
var max: float;
var activate: boolean;
var activateMessage: String;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "ActivateFunction");
lowcaseZ=Mathf.Abs(lowerCase.position.z);
highCaseZ=Mathf.Abs(highCase.position.z)-Mathf.Abs(lowerCase.position.z);
}
function LateUpdate () {
if(activate)
{
iction();
i= Mathf.Clamp(i, 0, highCaseZ+1);
for (var child : Transform in transform)
{
if ((Mathf.Abs(child.position.z)-lowcaseZ)< i )
{
On();
child.renderer.material.color.a=a;
}
if ((Mathf.Abs(child.position.z)-lowcaseZ)> i )
{
child.renderer.material.color.a=0;
}
}
}
if (!activate) 
{
for (var child : Transform in transform)
{
a = Mathf.Lerp(1, 0, speedLight*Time.time);
child.renderer.material.color.a=a;
}
}
}
function Blink()
{
a=Mathf.PingPong (speedLight*Time.time, 1);
}
function On()
{
//a =Mathf.Clamp(a, 0, 1.0);
a = Mathf.Lerp(0, 1, speedLight*Time.time);
}
function iction()
{
if (i<highCaseZ+1)
i+=speed*Time.deltaTime;
if(i==highCaseZ+1)
i=0;
}

function ActivateFunction(notification: Notification)
{
var active=notification.data;
if(active==activateMessage) activate=true;
}