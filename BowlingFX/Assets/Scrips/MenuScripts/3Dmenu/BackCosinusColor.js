#pragma strict
var speed: float=0.1;
var color1: Color;
var color2: Color;
function Start () {

}

function LateUpdate () {
//transform.renderer.material.color = Vector4(Mathf.Clamp(Mathf.Cos(speed*Time.time), 0.2, 0.80), Mathf.Clamp( Mathf.Sin(speed*Time.time), 0.2, 0.80), Mathf.Clamp( Mathf.Cos(speed*Time.time), 0.2, 0.80), 0);
 var lerp : float = Mathf.PingPong (Time.time, speed) / speed;
renderer.material.color = Color.Lerp (color1, color2, lerp);
//transform.renderer.material.color = Color.Lerp(color1, color2, speed*Time.time);
}