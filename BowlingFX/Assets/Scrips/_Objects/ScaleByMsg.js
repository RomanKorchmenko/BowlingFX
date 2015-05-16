#pragma strict
public var scale:boolean;
var level: String;
var scaleSpeed:float = 0.1;
var OwnScale: float;
var maxScale: float = 1.5;
var scaleXYZ: float;
var width: float;
var HasParticle: boolean;
var particle: ParticleSystem;
//var localScale: Vector3;
function Start () {
OwnScale = transform.localScale.x;
NotificationCenter.DefaultCenter().AddObserver(this, "LevelCheckt");
//localScale = transform.localScale;
}

function Awake()
{
InvokeRepeating("Width", 0, 0.2);
}



function Update () {
if(!scale)
{
transform.localScale.x = Mathf.Lerp(transform.localScale.x, OwnScale*scaleXYZ, scaleSpeed*Time.fixedTime);
transform.localScale.y = Mathf.Lerp(transform.localScale.y, OwnScale*scaleXYZ, scaleSpeed*Time.fixedTime);
transform.localScale.z = Mathf.Lerp(transform.localScale.z, OwnScale*scaleXYZ, scaleSpeed*Time.fixedTime);
if(HasParticle)particle.particleSystem.enableEmission = false;
}

if(scale)
{
transform.localScale.x = Mathf.Lerp(transform.localScale.x, OwnScale*maxScale*scaleXYZ, scaleSpeed*Time.fixedTime);
transform.localScale.y = Mathf.Lerp(transform.localScale.y, OwnScale*maxScale*scaleXYZ, scaleSpeed*Time.fixedTime);
transform.localScale.z = Mathf.Lerp(transform.localScale.z, OwnScale*maxScale*scaleXYZ, scaleSpeed*Time.fixedTime);
if(HasParticle)
	{
	particle.particleSystem.enableEmission = true;
	}
}

}

function LevelCheckt(notification:Notification)
{
if(notification.data ==level) scale = true;
else if(notification.data !=level) scale = false;
}

function Width()
{
width = Screen.width;
scaleXYZ = Mathf.Clamp(width/480, 1, 1.3);
}