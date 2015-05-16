#pragma strict
var target: Transform;
var myCamera: Camera;
private var Rot: Quaternion;
var rotationSpeed: float=1.0;
var autorotCoef: float =10000;
var rotationY : float;
var deltaY: float = 0.1;
var autorot:float;
var autorotDelta: float=0.1;
var touchCount: int;
var lastShotTime: float;
var stopTime: float=2.0;
var autorotationBool: boolean;
var touchDeltaPosition: Vector2;
var targets = new List.<Transform>();
var carrentTarget: Transform;
var plus: int;
var timeToSwitch: float=5.0;
var timer: float;
var timerPause: boolean;
var speedLerp: float = 0.0002;
var Y: float;
var maxY: float = 25;
var Pinching: boolean;
var normal: float;
var zoom: float = 65;
var time: float;
var once: boolean;
function Start () {
//InvokeRepeating("Switcher", timeToSwitch, timeToSwitch);
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
Rot = transform.rotation;
lastShotTime = 0;
normal = Camera.main.fieldOfView;
}
function LateUpdate () {

if(myCamera.enabled)
	{
	Switcher();
transform.LookAt(target);
if (Time.realtimeSinceStartup>(lastShotTime +stopTime))
//Autorotation();   	
transform.RotateAround(target.position, Vector3(0,1,0), rotationY);
//if(Vector3.Distance(transform.position, carrentTarget.position)<1) plus++;
var x: float = Mathf.Lerp(target.transform.position.x, carrentTarget.position.x, speedLerp*0.005*Time.realtimeSinceStartup);
var z: float = Mathf.Lerp(target.transform.position.z, carrentTarget.position.z, speedLerp*0.005*Time.realtimeSinceStartup);
target.transform.position = Vector3(x, target.transform.position.y, z);
	}
}
function Autorotation()
	{
rotationY  = Time.realtimeSinceStartup*autorotCoef;
rotationY = Mathf.Clamp(rotationY, -rotationSpeed*0.5, rotationSpeed*0.5); 
}

function Pause(notification: Notification)
{
if(notification.data==1)
	{ timerPause=true;
timer = Time.time;
	}
if(notification.data==0) timerPause=false;
}

    function OnPinch(gesture: PinchGesture  )
    {
    if(myCamera.enabled)
	{
    if(timerPause)
    {
        if( gesture.Phase == ContinuousGesturePhase.Started )
        {
            Pinching = true;
        }
        else if( gesture.Phase == ContinuousGesturePhase.Updated )
        {
            if( Pinching )
            {
          		camera.fieldOfView -= gesture.Delta*0.05;
          		camera.fieldOfView = Mathf.Clamp(camera.fieldOfView, 40, 70);
     
        
            }
        }
        else
        { 
     
            if( Pinching )
            {
                Pinching = false;
            }
        }
    }
}
}
function Switcher()
{

	if(Time.realtimeSinceStartup>= time + timeToSwitch && !once)
	{
	plus++;
	if (plus>targets.Count-1) {
	plus = 0;
	}
	carrentTarget  = targets[plus];
	time = Time.realtimeSinceStartup;
	once = true;
	}
	else once=false;
}