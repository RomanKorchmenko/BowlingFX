#pragma strict
var emit: boolean;
var particles: ParticleSystem[];
private var particle: ParticleSystem;
var xdur=1.0;
function Update() {
     if(emit)
     {
     for(var i: int; i<particles.Length; i++)
	     {
	     particle = particles[i];
	     particle.particleSystem.enableEmission = true;
	     }
	     Yeld();
     }
     else if(!emit)
     {
     for(var n: int; n<particles.Length; n++)
	     {
	     particle = particles[n];
	     particle.particleSystem.enableEmission = false;
	     }
     }
}

function OnTriggerEnter(other: Collider)
{
if(other.gameObject.tag == "activeball")emit = true;
}
function Yeld()
{
yield WaitForSeconds(xdur);
emit = false;
}