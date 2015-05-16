// Pulse light's intensity over time
var dob = 0.0;
var duration : float= 1.0;
var TmpDelay: float=3.0;
var delay: float;
private var time: float;
var minimum: float=0.1;
var maximum: float=1.0;
var amplitude:float;
var defoultScale: Vector3;
function Start()
{
delay=TmpDelay+dob;
defoultScale = transform.localScale;
}

function Update() {
    // argument for cosine
    var phi : float = Time.time / duration * 2 * Mathf.PI;
    // get cosine and transform from -1..1 to 0..1 range
    amplitude = Mathf.Cos( phi ); //frow -1 to +1
    amplitude = Mathf.Clamp(amplitude, minimum, maximum);
    if(Time.time> time+delay)
    {
    transform.localScale=defoultScale*amplitude;
    //light.intensity = amplitude;
    Reset();
    }
  if(Time.time< time+delay)
	{
	transform.localScale= defoultScale*minimum;
	//light.intensity=minimum;
	}
	
}
function Reset()
{
yield WaitForSeconds(duration/2);
time = Time.time;
}