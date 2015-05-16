#pragma strict
var target : Transform;
private var ball: Vector3;
private var ballTransform: Transform;
var smoothTime = 0.5;
private var thisTransform : Transform;
private var velocity : Vector3;
var getIt: boolean;
var cam: Camera;
private var time: float;
var timer: float=6;
var maxDist: float =100;
var normal: float;
var timerPause: boolean;
var Pinching: boolean;
function Start()
{
	thisTransform = transform;
	NotificationCenter.DefaultCenter().AddObserver(this, "BallOut");
	NotificationCenter.DefaultCenter().AddObserver(this, "BallIsRemoved");
	//normal = Camera.main.fieldOfView;
}

function FixedUpdate() 
{
CameraX();
}

function BallOut()
{
getIt=true;
ballTransform = GameObject.FindGameObjectWithTag("activeball").transform;
}

function BallIsRemoved()
{

getIt=false;
time = Time.time;
}

function CameraX()
{

cam.fieldOfView = Mathf.Clamp(cam.fieldOfView, normal, 76);
if(!timerPause)
{
if(!getIt)
{
cam.fieldOfView -= 0.4;
if(Time.time>= time+timer)
{
thisTransform.position.z = Mathf.SmoothDamp( thisTransform.position.z, -65, velocity.z, smoothTime); //возвращение шара
}
	thisTransform.position.x = Mathf.SmoothDamp( thisTransform.position.x, target.position.x, velocity.x, smoothTime); //горизонталь
	thisTransform.position.y = Mathf.SmoothDamp( thisTransform.position.y, target.position.y, velocity.y, smoothTime);//вертикаль 
		}
		
		else if(getIt && Time.time>= time+timer) //пока шар катиться камера катиться за ним
		{
		thisTransform.position.x = Mathf.SmoothDamp( thisTransform.position.x, 0, velocity.x, smoothTime); //возврат камеры в ноль по горизонтали
		ball =  ballTransform.position;
		if(ball!=null)
		if(cam.transform.position.z <maxDist)
		thisTransform.position.z = Mathf.SmoothDamp( thisTransform.position.z, ball.z-55, velocity.z, smoothTime);//если найден шар - следуем за ним
		cam.fieldOfView = Mathf.SmoothDamp( cam.fieldOfView, 75, velocity.z, smoothTime);
		}
}
}
//function OnPinchBall(gesture: PinchGesture  )
//{
//    if(!timerPause)
//    {
//        if( gesture.Phase == ContinuousGesturePhase.Started )
//        {
//            Pinching = true;
//        }
//        else if( gesture.Phase == ContinuousGesturePhase.Updated )
//        {
//            if( Pinching )
//            {
//          		cam.fieldOfView += gesture.Delta*0.01;
//          		cam.fieldOfView = Mathf.Clamp(camera.fieldOfView, normal, normal+10);
//     
//        
//            }
//        }
//        else
//        { 
//     
//            if( Pinching )
//            {
//                Pinching = false;
//            }
//        }
//    }
//}

function Pause(notification: Notification)
{
if(notification.data==1)
	{ 
	timerPause=true;
	}
if(notification.data==0) timerPause=false;
}