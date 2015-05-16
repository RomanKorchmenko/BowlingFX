#pragma strict
var emit: boolean;
var smoke: ParticleSystem;
var trigger: TriggerScale;
var xdur=1.0;
function Update() {
emit = trigger.scale;
  
    // argument for cosine
    //var phi : float = Time.time / duration * xdur * Mathf.PI;
    // get cosine and transform from -1..1 to 0..1 range
    //var amplitude : float = Mathf.Cos( phi ) * x;
    //amplitude = Mathf.Clamp(amplitude, 0.35, 0.5);
    // set light color
    //transform.localEulerAngles = Vector3(0, 0 , Time.deltaTime);
     if(emit) smoke.particleSystem.enableEmission = true;
     else if(!emit) smoke.particleSystem.enableEmission = false;
    //transform.position += Vector3.forward * Time.deltaTime;
}