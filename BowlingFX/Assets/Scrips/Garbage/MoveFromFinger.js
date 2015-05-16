#pragma strict
var speed : float = 1.0;
var touchspeed: float=0.1;
var hit : RaycastHit; 
var startY: float; 
var accelX: float;
var startZ: float;
var timerPause: boolean;
function Start()
{
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
transform.position.x =0;
startY = transform.position.y;
startZ = transform.position.z;
}
function FixedUpdate () {
accelX= Input.acceleration.x;
transform.position.z= Mathf.Clamp(transform.position.z, startZ-3, startZ+3); 
transform.position.x= Mathf.Clamp(transform.position.x, -8, 8); 
#if (UNITY_EDITOR)
 if(Input.GetMouseButton(0) && !timerPause)
    {
    var ray1 : Ray = Camera.main.ScreenPointToRay (Input.mousePosition);
if (Physics.Raycast (ray1, hit, 100)) {
    if(hit.collider.gameObject.tag == "ball")
    {
    
    transform.Translate (Input.GetAxis("Mouse X") * speed, 0, Input.GetAxis("Mouse Y"));
    	}
    }
}
#endif
    if (Input.touchCount > 0 &&
      Input.GetTouch(0).phase == TouchPhase.Moved && !timerPause) {
       var ray:Ray = Camera.main.ScreenPointToRay(Input.touches[0].position);
        if(Physics.Raycast(ray, hit, 100)){
        if(hit.collider.gameObject.tag == "ball")
        {
        var touchDeltaPosition:Vector2 = Input.GetTouch(0).deltaPosition;
        transform.Translate (touchDeltaPosition.x * touchspeed, 0, touchDeltaPosition.y);
    		}
    	}
    }
}

function Pause(notification: Notification)
{
if(notification.data==1) timerPause=true;
if(notification.data==0) timerPause=false;
}