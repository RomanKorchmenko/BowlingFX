#pragma strict
var lamps: Renderer[];
private var i: int;
//private var u: int;
var speed: float=7.0;
var a: float=1.0;
var off: boolean;
var y: float=0.01;
function Start () {
lamps = new Renderer[transform.childCount];
for (var child : Transform in transform) {
if(i>transform.childCount) i=0;
lamps[i] = child.gameObject.renderer;
i++;

}
}

function Update () {
RoadLights();
}

function RoadLights()
{
a =Mathf.Clamp(a, 0, 1.0);
if (off==true) a+=y*speed;
if (off==false) a-=y*speed;
if (a<0) off=true;
if (a>1) off=false;
var lamps = GameObject.FindGameObjectsWithTag ("lamps");
for (var u: int; u<transform.childCount; u++)
{
if (u>transform.childCount) u=9;
yield WaitForSeconds(1);
lamps[u].renderer.material.color.a=a ;
}
}