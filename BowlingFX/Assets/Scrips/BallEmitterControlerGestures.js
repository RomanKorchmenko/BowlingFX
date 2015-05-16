#pragma strict
//var isTestMode: boolean;
var scaleXYZ: float;
var width: float;
var OwnScale: float;
var isBallBirth: boolean;
var BallBirthDelay: float;
var nextBallActive: boolean;
var ball: GameObject;
//ball section
var HanamyBall: GameObject;
var SteamBall: GameObject;
var SciFiBall: GameObject;
//ball section
var MultyForce: float=0.10;
var forceX: float;
var forceZ: float;
var minForce: float=3000;
var maxForce: float=4000;
var emiter: Transform;
private var clone: GameObject;
public var timerPause: boolean;
var action: boolean;
private var dragFingerIndex: int = -1;
var move:Vector2;
var velocity: float;
var counter:int;
var direction:FingerGestures.SwipeDirection ;
var maxVelocity: float=300.0;
var dir: Vector3;
private var hit : RaycastHit; 
var speed : float = 1.1;
private var ballRemove: GameObject;
var Trails:GameObject[];
var leaves: GameObject;
//wind section
var HanamyWind: GameObject;
var SciFiWind: GameObject;
var SteamWind: GameObject;
//wind section
var num: int;
var bool: boolean;
var played: boolean;
var BallCount: int;
var camPosition:Transform;
var camStart: boolean;
var bonusCounter: int;
private var currentQuality: int;
var zRotation=0.0;
var yRotation=0.0;
var levelIDComponent: _LevelID;
var LevelID: String;
var TutorialGO: GameObject;
function Awake()
{
InvokeRepeating("ScaleCollider", 0, 0.2);
currentQuality = QualitySettings.GetQualityLevel();
}

function Start () {
levelIDComponent = GameObject.Find("__LevelID").GetComponent(_LevelID);
LevelID = levelIDComponent.levelID;
if(LevelID == "Hanami")
{
ball = HanamyBall;
leaves = HanamyWind;
}
if(LevelID == "SciFi")
{ 
ball = SciFiBall;
leaves = SciFiWind;
}
if(LevelID == "SteamPunk")
{ 
ball = SteamBall;
leaves = SteamWind;
}
OwnScale = transform.GetComponent(SphereCollider).radius;
transform.position.x =0;
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
NotificationCenter.DefaultCenter().AddObserver(this, "BallBirth");
NotificationCenter.DefaultCenter().AddObserver(this, "Restart");
NotificationCenter.DefaultCenter().AddObserver(this, "BallIsRemoved");
NotificationCenter.DefaultCenter().AddObserver(this, "EventMSG");
NotificationCenter.DefaultCenter().AddObserver(this, "QualityChanged");
NotificationCenter.DefaultCenter().AddObserver(this, "Throws");
NotificationCenter.DefaultCenter().AddObserver(this, "DoTwist");
NotificationCenter.DefaultCenter().AddObserver(this, "BallCurveTrick");
transform.position.x =0;
}
function Update () {
//yRotation += Input.GetAxis("Horizontal");
zRotation=-270*transform.position.x/8;
//yRotation = 180*transform.position.z/4;
if(clone!=null)
{
clone.transform.eulerAngles.z = zRotation;
//clone.transform.eulerAngles.x = yRotation;

}
if(!timerPause)
{
if (nextBallActive==true && BallCount==0)
	{
clone=Instantiate(ball, transform.position, transform.rotation);
clone.transform.parent=transform;
BallCount++;	
nextBallActive=false;
	}
}
if(!timerPause)
		{
		var bool: boolean;
		var bool2: boolean;
		if(!Camera.main) return;	
	}	
}
	function OnSwipe(gesture: SwipeGesture ) 
{
if(!timerPause)
	{
velocity = gesture.Velocity;
direction = gesture.Direction;
move = gesture.Move;
var mtmp: Vector2 = move.normalized;
if(velocity>=maxVelocity)
		{
	
	if(!action)
			{
			if(BallCount==1)
			{
	if(direction ==gesture.Direction.UpperRightDiagonal || direction ==gesture.Direction.Up || direction ==gesture.Direction.UpperLeftDiagonal)
				{
				if(camStart)
				{
	transform.collider.enabled = false;
	clone.collider.enabled = true;
	forceZ = Mathf.Clamp(velocity, minForce, maxForce)*(120+Random.Range(10, 50));
	clone.AddComponent("Rigidbody");
	clone.rigidbody.mass = 100.0;
	clone.rigidbody.AddForce(Vector3(mtmp.x*forceZ/10, 0,forceZ*mtmp.y));
	clone.transform.parent=null;
	var cloneTrail = Instantiate(Trails[num], transform.position, transform.rotation);
	cloneTrail.transform.parent = clone.transform;
	if(currentQuality !=0)
	{
	var falling = Instantiate(leaves, transform.position, transform.rotation);
	falling.transform.parent = clone.transform;
	}
	NotificationCenter.DefaultCenter().PostNotification(this, "BallOut");
	action = true;
	TutorialGO.SendMessage("BallKicked");
	if(Mathf.Abs(mtmp.x)>0.1) TutorialGO.SendMessage("DiagonalKicking");
						}
					}
				}
			}
			else if (action)
			{
			 NotificationCenter.DefaultCenter().PostNotification(this, "BallTrick", mtmp.x);
			 TutorialGO.SendMessage("GyroUseTut");
			 }
		}
	}
}
function BallBirth()
{
TutorialGO.SendMessage("BallnewTut");
nextBallActive=true;
transform.collider.enabled = true;
action=false;
}
function Pause(notification: Notification)
{
if(notification.data==1) timerPause=true;
if(notification.data==0) timerPause=false;
}

function Restart()
{
bonusCounter=0;
var OldBalls = GameObject.FindGameObjectsWithTag ("activeball");
for(OldBall in OldBalls)
{
Destroy(OldBall);
}
BallCount=0;
}

function ScaleCollider()
{
//width = Screen.width;
//scaleXYZ = Mathf.Clamp(width/768, 1, 2.0);
//transform.GetComponent(SphereCollider).radius = OwnScale*scaleXYZ;
if(camPosition.transform.position.z<-60) camStart=true;
if(camPosition.transform.position.z>-60) camStart=false;
}

function BallIsRemoved()
{
BallCount=0;
}

function EventMSG(notification:Notification)
{
	num = notification.data;
	if(notification.data ==2) bonusCounter=2;
}
function Throws()
{
if(bonusCounter>0)bonusCounter--;
if(bonusCounter==0)num=0;
}
function QualityChanged()
{
currentQuality = QualitySettings.GetQualityLevel();
}
function BallChanger(type: String)
{
//print(type);
var OldBalls = GameObject.FindGameObjectsWithTag ("activeball");
for(OldBall in OldBalls)
{
Destroy(OldBall);
}
if(type == "Hanami")
{
ball = HanamyBall;
}
if(type == "SciFi")
{ 
ball = SciFiBall;
}
if(type == "SteamPunk")
{ 
ball = SteamBall;
}
clone=Instantiate(ball, transform.position, transform.rotation);
clone.transform.parent=transform;
}
function DoTwist()
{
TutorialGO.SendMessage("DoTwistNow");
}
function BallCurveTrick()
{
TutorialGO.SendMessage("Tweested");
}
