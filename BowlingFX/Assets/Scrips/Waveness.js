var x = 0.50;
var duration : float= 2.0;
var xdur=1.0;
function Start()
{

}
function Update() {
    var phi : float = Time.time / duration * xdur * Mathf.PI;
    var amplitude : float = Mathf.Cos( phi ) * x;
    transform.localEulerAngles = Vector3(amplitude, 0, amplitude+2);   
  }