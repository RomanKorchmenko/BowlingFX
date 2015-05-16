#pragma strict
var start: Vector3;
var ball: Vector3;
var getIt: boolean;
var dist: float;
var startHi: float;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
NotificationCenter.DefaultCenter().AddObserver(this, "BallOut");
NotificationCenter.DefaultCenter().AddObserver(this, "BallIsRemoved");
startHi = transform.position.y;

}

function LateUpdate () {
if(getIt)
{
ball = GameObject.Find("BallLods(Clone)").transform.position;
transform.position.z =  Mathf.Lerp(transform.position.z, ball.z, Time.time);
}
else if ( !getIt) transform.position = Vector3.zero;
}

function BallOut()
{
getIt=true;
}

function BallIsRemoved()
{
getIt=false;
}