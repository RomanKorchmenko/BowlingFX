#pragma strict
var speed: float=7.0;
var a: float=1.0;
var off: boolean;
var y: float=0.01;
var lamps: GameObject[];
function FixedUpdate()
{
a =Mathf.Clamp(a, 0, 1.0);
if (off==true) a+=y*speed;
if (off==false) a-=y*speed;
if (a<0) off=true;
if (a>1) off=false;
//var lamps = GameObject.FindGameObjectsWithTag ("lamps");
for (var lamp in lamps)
    lamp.renderer.material.color.a=a ;
 }   
