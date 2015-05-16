#pragma strict
var nimus: float=0.1;
var ownPositionY: float;
var Lighter: Renderer;
private var color: Color;
var ToColor: Color;
var duration : float = 1.0;
var rand: float;
var colorRange:Color[];
private var tmpScale: float;
function Start () {
tmpScale = transform.localScale.x;
ToColor = colorRange[Random.Range(0, colorRange.Length)];
rand = Random.Range(1, 5);
ownPositionY = transform.position.y;
color = Lighter.material.color;
var sc: float = tmpScale*Random.Range(0.5, 1.5);
transform.localScale.x = sc;
transform.localScale.y = tmpScale*Random.Range(0.9, 1.2);
transform.localScale.z = sc;
}

function LateUpdate () {
var lerp : float = Mathf.PingPong (Time.time, duration) / duration;
transform.localRotation.z = nimus*Mathf.Cos(0.2*Time.time*rand/5);
transform.position.y = ownPositionY+ Mathf.PingPong(Time.time*rand/3, 20);
Lighter.material.color = Color.Lerp(color, ToColor, lerp*rand/5);
}

