#pragma strict
var steamTrow: ParticleSystem;
var duration: float=10;
private var coef: float;
private var rand: float;
var perc: float=20;
var enable: float=0.5;
function Start () {
steamTrow = this.gameObject.GetComponent(ParticleSystem);
InvokeRepeating("Randomize", 0, 20.0);
}

function Update () {
Emit();
}


function Emit()
{

coef = (Mathf.PingPong(Time.time, duration+rand))/(duration+rand);
if(coef>enable) steamTrow.particleSystem.enableEmission = true;
else steamTrow.particleSystem.enableEmission = false;
}

function Randomize()
{
rand = Random.Range(duration/perc, duration/(perc*0.5));
}
//
//function OnBecameVisible()
//{
//enable=true;
//}
//
//function OnBecameInvisible()
//{
//enable=false;
//}