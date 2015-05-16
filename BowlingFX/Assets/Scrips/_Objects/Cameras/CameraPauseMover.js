#pragma strict
var target: Transform;
var myCamera: Camera;
var defoultTime: float;
private var Rot: Quaternion;
var rotationSpeed: float=1.0;
var autorotCoef: float =10000;
var rotationY : float;
var autorot:float;
var autorotDelta: float=0.1;
var touchCount: int;
var lastShotTime: float;
var stopTime: float=2.0;
var autorotationBool: boolean;
var touchDeltaPosition: Vector2;
function Start () {
defoultTime =  Time.timeScale;
Rot = transform.rotation;
lastShotTime = 0;
}

function FixedUpdate () {
if(myCamera.enabled)
{
//myCamera.GetComponent(AudioListener).enabled = true ;
transform.LookAt(target);
if (Input.GetMouseButton(0))
{
//rotation from mouse
 Rotation();
 lastShotTime=Time.time;
}
if(Input.anyKey) autorotationBool=false;
if(!Input.GetMouseButton(0) && (Input.touchCount == 0) && !autorotationBool)
{
//damping rotation
rotationY  = Mathf.Lerp(rotationY, 0.0, autorot*Time.deltaTime);
}

if(!Input.GetMouseButton(0) && (Time.time>(lastShotTime +stopTime)))
{
//autorotation without mouse
Autorotation();
autorotationBool=true;
}
for (var i = 0; i < Input.touchCount; i++)
	{
var touch = Input.GetTouch(i);
var hold =  Input.GetTouch(i);
if (Input.touchCount > 0 && (Input.GetTouch(0).phase == TouchPhase.Moved ))
{        
        autorotationBool=false;
    	touchCount ++;
    	//rotation from finger
        //rotationY= Input.GetAxis("Mouse X")*rotationSpeed;
        //Rotation();
        touchDeltaPosition = Input.GetTouch(0).deltaPosition;
        rotationY= touchDeltaPosition.x*rotationSpeed;
 		lastShotTime=Time.time;
                }
    	if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Ended && (Time.time>(lastShotTime +stopTime))) 
    	{
    	Autorotation();
    	autorotationBool=true;
    	}
    	}
rotationY = Mathf.Clamp(rotationY, -rotationSpeed, rotationSpeed);    	
transform.RotateAround(target.position, Vector3.up, rotationY);
}
//else if (!myCamera.enabled) myCamera.GetComponent(AudioListener).enabled = false ;
}
function Rotation()
{
rotationY= Input.GetAxis("Mouse X")*rotationSpeed;
}
function Autorotation()
{
rotationY  = rotationSpeed*(Time.time/autorotCoef);
}