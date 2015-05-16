#pragma strict
var x_move: Joystick;
var zForce:Joystick;
var touchCount = 0;
//var BallPrefab: Rigidbody;
var nextBallActive: boolean;
var ball: GameObject;
var horizontalSpeed: float=1.0;
var verticalSpeed: float=0.3;
var MultyForce: float=1.0;
var minposX: float;
var maxposX: float;
var minposY: float;
var maxposY: float;
var x : float;
var y : float;
var force: float;
var minForce: float=50000;
var maxForce: float=130000;
var emiter: Transform;
private var layerMask = (1 <<  8) | (1 << 2);
var hit: RaycastHit;
var counter: int;
private var clone: GameObject;
//var count = Input.touchCount;
function Start () {
nextBallActive=true;
NotificationCenter.DefaultCenter().AddObserver(this, "NextBall");
layerMask =~ layerMask;
counter=0;
}

function Update () {
x=horizontalSpeed *x_move.position.x;
y=verticalSpeed*x_move.position.y;
//x= horizontalSpeed * Input.GetAxis ("Mouse X");
transform.position.x = Mathf.Clamp(transform.position.x, minposX, maxposX);
transform.position.y = Mathf.Clamp(transform.position.y, minposY, maxposY);
transform.Translate (x, y, 0);
if (nextBallActive==true){
clone=Instantiate(ball, transform.position, transform.rotation);
clone.transform.parent=transform;	
clone.transform.position.y = transform.position.y;
nextBallActive=false;
}

if ( zForce.position.y )
{
 
 
  if(Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Ended ) 
  {
   Force();
}
else if(Input.GetKeyDown(KeyCode.Mouse1)) 
{
Force();
}
}
}
function Count()
{
yield WaitForSeconds(15);
counter=0;
}

function NextBall()
{
nextBallActive=true;
}

function Force()
{
force=(Random.Range(minForce, maxForce))*MultyForce*zForce.position.y;
//force=Mathf.Clamp(force, 100, 150000);
clone.AddComponent("Rigidbody");
clone.rigidbody.mass = 100.0;
clone.rigidbody.AddForce(Vector3.forward * force);
clone.transform.parent=null;
counter++;
Count();
}