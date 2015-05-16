var impact : AudioClip;
var KegelImpacts : AudioClip[];
var KegelImpactDefoult : AudioClip;
var timer: float =5.0;
var currentQuality: int;
var Explosions: GameObject[];
var changer: boolean;
var dist: float;
var drag: float;
var ballSpeed: float;
public var timerPause: boolean;
var move: Vector3;
var velocity: float;
var direction: FingerGestures.SwipeDirection;
var dragging: boolean;
var gyroX: float;
private var gyro: Gyroscope;
var gyroBool: boolean;
var gyroEnable: boolean;
var bombBool: boolean;
var bombEnable: boolean;
var Boom: GameObject;
var twisted: boolean;
function Awake()
{
dragging = true;
}
function Start()
{
currentQuality = QualitySettings.GetQualityLevel();
NotificationCenter.DefaultCenter().AddObserver(this, "QualityLevelIs");
NotificationCenter.DefaultCenter().AddObserver(this, "BallTrick");
NotificationCenter.DefaultCenter().AddObserver(this, "Ballspeed");
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
NotificationCenter.DefaultCenter().AddObserver(this, "UseGyro");
NotificationCenter.DefaultCenter().AddObserver(this, "UseBomb");
gyroBool = SystemInfo.supportsGyroscope;
gyroEnable=false;
if (gyroBool) {
   gyro = Input.gyro;
   gyro.enabled = true;             
   } 
bombBool=true;
}
function Update () {
if(Rigidbody)
	{
	  #if !UNITY_EDITOR
	if(gyroBool && gyroEnable) 
	{
	gyroX = Input.gyro.gravity.x;
	rigidbody.AddForce(Vector3.right*gyroX*20, ForceMode.Impulse);
	}
	  #endif
	if (!gyroBool && gyroEnable)
	{
	if (Mathf.Abs(drag)>0 && dragging)
	rigidbody.AddForce(Vector3.right*1.5*drag*ballSpeed/10, ForceMode.Impulse);
	}
	if(transform.position.z>dist)
		{
		if(!twisted){
		NotificationCenter.DefaultCenter().PostNotification(this, "DoTwist");
		twisted=true;
		}
		ballSpeed = rigidbody.velocity.z;
		if(transform.position.y>1)
		{
		rigidbody.AddForce(Vector3.right*1.5*drag*ballSpeed/10, ForceMode.Impulse);
		if (Mathf.Abs(drag)>0 && dragging)
		{
		NotificationCenter.DefaultCenter().PostNotification(this, "BallCurveTrick");
		dragging = false;
		}
		}
		}
		if(bombBool && bombEnable && transform.position.z>170)
{
Instantiate(Boom, transform.position, transform.rotation);
bombEnable=false;
}
	}
}
function OnCollisionEnter (collision : Collision) {
if (collision.gameObject.tag == "floor" )
{
    audio.PlayOneShot(impact);
}
else  if (collision.gameObject.tag == "kegli" )
{  

//if(bombBool && bombEnable)
//{
//Instantiate(Boom, transform.position, transform.rotation);
//bombEnable=false;
//}
    
    if (currentQuality !=0)
    { 
     audio.PlayOneShot(KegelImpacts[Random.Range(0, KegelImpacts.Length)]);
     var t: float = Random.Range(20.0, 30.0);
     yield WaitForSeconds(1/t);
     var cloneShuriken = Instantiate(Explosions[Random.Range(0, Explosions.Length)], transform.position, transform.rotation);
    }
    else 
    	audio.PlayOneShot(KegelImpactDefoult);
}
}
function QualityLevelIs(notification:Notification)
{
currentQuality = notification.data;
}

function BallTrick(notification:Notification)
{
drag = notification.data;
}

function Pause(notification: Notification)
{
if(notification.data==1) timerPause=true;
if(notification.data==0) timerPause=false;
}

function UseGyro(notification: Notification)
{
gyroEnable = true;
//if(notification.data==0) gyroEnable = false;
//if(notification.data==1) gyroEnable = true;
}

function UseBomb(notification: Notification)
{
//if(notification.data==0) gyroEnable = false;
//if(notification.data==1) 
bombEnable = true;
}

function OnDestroy()
{
transform.DetachChildren ();
}
