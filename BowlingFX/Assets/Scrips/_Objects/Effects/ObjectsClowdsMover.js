#pragma strict
var speed: float = 0.05;
var range: float = 100; 
function Start () {

}

function LateUpdate () {
transform.position.z = range*(Mathf.Sin(speed*Time.time)- Mathf.Cos(speed*Time.time));
//transform.position.x = Mathf.Sin(-1*Time.time);
}