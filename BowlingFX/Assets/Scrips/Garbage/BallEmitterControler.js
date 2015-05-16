#pragma strict
//ball emiting
var nextBallActive: boolean;
var ball: GameObject;
var MultyForce: float=0.10;
var forceX: float;
var forceZ: float;
var minForce: float=50000;
var maxForce: float=130000;
var emiter: Transform;
private var clone: GameObject;
var counter:int;
var dir : Vector3 = Vector3.zero;
var timerPause: boolean;
var hasTouched: boolean = false;
var lastPos:Vector2 = Vector3.zero;
var oldPos:Vector2;
var someSpeedValue: float=0.01;
var dirF: Vector2;
var  direction:  Vector2;
var startPos: Vector3;
var action: boolean;
var oldTime: float;
var currentTime: float;
var deltaTime: float;
var ballTouched: boolean;
//ball emiting
// ball moving
var speed : float = 1.1;
var touchspeed: float=0.01;
var hit : RaycastHit; 
var startY: float; 
var accelX: float;
var startZ: float;
var touchDeltaPosition:Vector2;
// ball moving
var hight: float;
var distance: float;
var ballTime = 1.0;
function Start () {
hight = Screen.height/4;
startPos= transform.position;
nextBallActive=true;
NotificationCenter.DefaultCenter().AddObserver(this, "NextBall");
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
//ball moving
transform.position.x =0;
startY = transform.position.y;
startZ = transform.position.z;
//ball moving
}

function Update () {
if (nextBallActive==true){
clone=Instantiate(ball, transform.position, transform.rotation);
clone.transform.parent=transform;	
nextBallActive=false;
	}
	//if(!timerPause && (deltaTime< ballTime && deltaTime>0) && ballTouched && distance> Screen.height/4) FingerForce();
	//if(Input.GetMouseButtonDown(2) && !timerPause) EditorForde();
	if((deltaTime< ballTime && deltaTime>0) && distance> Screen.height/4 && !timerPause )
	{
	//print("BallMostForced");
	 EditorForde();
	 FingerForce();
	}
	//ball mover
	accelX= Input.acceleration.x;
transform.position.z= Mathf.Clamp(transform.position.z, startZ-12, startZ+12); 
transform.position.x= Mathf.Clamp(transform.position.x, -8, 8); 
//#if (UNITY_EDITOR)
 if(Input.GetMouseButton(0) && !timerPause)
    {
    var ray1:Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
    if (Physics.Raycast (ray1, hit, 100)) {
	   if(hit.collider.gameObject.tag == "ball")
    {
        ballTouched=true;
    if(Input.GetMouseButton(0))
    		{
     transform.Translate (Input.GetAxis("Mouse X") , 0, Input.GetAxis("Mouse Y")* speed);
     
    		
    		}
    	}
    	  if(hit.collider.gameObject.tag != "ball") ballTouched= false;
    }
}
  if(Input.GetMouseButtonDown(0))
  {      
   oldPos = Input.mousePosition;
   oldTime = Time.time;
  }
if(Input.GetMouseButtonUp(0))
{
//ballTouched = false;
lastPos = Input.mousePosition;
currentTime = Time.time;
}
deltaTime = currentTime - oldTime;
direction = oldPos - lastPos;
distance = Vector3.Distance(oldPos, lastPos);
dirF = direction.normalized;
//#endif
    if (Input.touchCount > 0 &&
      Input.GetTouch(0).phase == TouchPhase.Moved && !timerPause) {
       var ray:Ray = Camera.main.ScreenPointToRay(Input.touches[0].position);
        if(Physics.Raycast(ray, hit, 100)){
        if(hit.collider.gameObject.tag == "ball")
        {
        ballTouched=true;
        touchDeltaPosition = Input.GetTouch(0).deltaPosition;
        transform.Translate (touchDeltaPosition.x * touchspeed, 0, touchDeltaPosition.y);
    		}
    		if(hit.collider.gameObject.tag != "ball") ballTouched= false;
    	} 
    }
	//ball mover
	}
function EditorForde()
{
if(!action)
	{
forceZ = (Random.Range(minForce, maxForce))*50.0;
forceX=0.2*dir.x;
clone.AddComponent("Rigidbody");
clone.rigidbody.mass = 100.0;
clone.rigidbody.AddForce(Vector3.forward * forceZ);
clone.transform.parent=null;
ResetBallEmiter();
counter++;
Count();
action = true;
distance=0;
	}
}

function Count()
{
yield WaitForSeconds(15);
counter=0;
}
function NextBall()
{
yield WaitForSeconds(2);
nextBallActive=true;
action=false;
}
function FingerForce()
{
    if(Input.touchCount >0 && Input.GetTouch(0).phase == TouchPhase.Began) // finger down
    {
    oldPos = Input.touches[0].position;
    oldTime = Time.time;
        
        }
    if(Input.touchCount == 1 && Input.GetTouch(0).phase == TouchPhase.Canceled && Input.GetTouch(0).phase == TouchPhase.Ended) // released
    {
    lastPos = Input.touches[0].position;   
    currentTime = Time.time;
        if(!action)
		{
        clone.AddComponent("Rigidbody");
		clone.rigidbody.mass = 100.0;
		clone.transform.parent=null;
		forceZ = Mathf.Abs(dirF.y)*someSpeedValue;
		forceZ = Mathf.Clamp(forceZ, minForce, maxForce );
		clone.rigidbody.AddForce(Vector3(Mathf.Abs(dirF.x)*someSpeedValue/20, 0, forceZ), ForceMode.Impulse);
		ResetBallEmiter();
        counter++;
		Count();
		action = true;
		distance= 0;
		}
        hasTouched = false;
    }
}

function ResetBallEmiter()
{
oldTime=0;
currentTime=0;
yield WaitForSeconds(2);
transform.position = startPos;
}

function Pause(notification: Notification)
{
if(notification.data==1) timerPause=true;
if(notification.data==0) timerPause=false;
}
