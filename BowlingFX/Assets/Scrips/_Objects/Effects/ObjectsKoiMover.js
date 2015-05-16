#pragma strict
var moveTargets = new List.<Transform>();
var currentTarget: Transform;
var timeToSwitch: float;
var minTime: float = 2;
var maxTime: float = 5;
var rand: int;
var delta: float=3;
var timer: float;
var distance: float;
var minDist: float=5;
//var maxDist: float=30;
var speed:float=0.1;
var minspeed: float=0.03;
var maxspeed: float=0.1;
var lerpspeed: float=0.001;
var lerpRot: float = 0.001;
var speedRand: float;
var IsNotRandom: boolean = true;
var distDisable: boolean;
function Start () {
//NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
delta = minTime;
timer = 0;
}
function Awake()
{
InvokeRepeating("RandomValue", 0, 0.5);
}


function Update ()
{
//delta = Random.Range(minTime, maxTime);
if(!IsNotRandom){
if(Time.time> timer+delta)
{
//rand = Random.Range(0, moveTargets.Count);
timer= Time.time;
speed = Mathf.Lerp(speed, speedRand, lerpspeed*Time.fixedTime);
}
}
if(IsNotRandom)
{
if (distance <= minDist)
 rand++;
if(rand> moveTargets.Count-1)
 rand = 0;
}
currentTarget  = moveTargets[rand];
var relativePos = currentTarget.position - transform.position;
    var rotation = Quaternion.LookRotation(relativePos);
    transform.rotation = Quaternion.Lerp(transform.rotation, rotation, lerpRot*Time.fixedDeltaTime);
distance = Vector3.Distance(transform.position, currentTarget.position);
transform.Translate(Vector3.forward*speed);
}
function RandomValue()
{

if(!IsNotRandom)
{ 
delta = Random.Range(minTime, maxTime);
rand = Random.Range(0, moveTargets.Count);
speedRand = Random.Range(minspeed, maxspeed);
}
}