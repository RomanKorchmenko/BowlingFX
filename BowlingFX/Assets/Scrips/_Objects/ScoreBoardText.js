#pragma strict
var scores: int;
var ownscores: int;
var scoretext: GUIText;
var speed: float= 0.1;
var score:boolean;
var once: boolean;
var timerPause: boolean;
var time: float;
private var GameManager: _GameManager;
function Start () {
StartCoroutine("ScoreCounter");
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
ownscores= 0;
scoretext.text = ""+0;
NotificationCenter.DefaultCenter().AddObserver(this, "Restart");
GameManager = gameObject.Find("__GameManager").GetComponent(_GameManager);
}

function Awake () {
//if(timerPause)	InvokeRepeating("ScoreCounter", 2, speed);
time = Time.realtimeSinceStartup;
}
function ScoreCounter()
{
if (ownscores<scores){
ownscores = Mathf.FloorToInt(Time.realtimeSinceStartup-time);
scoretext.text = ""+ownscores;
}
}
function Update()
{
scores = GameManager.playerFinalScore;
scoretext.text = ""+scores;
//ScoreCounter();
}
function Restart()
{
}

function Pause(notification: Notification)
	{
	
if(notification.data==1)
{
 timerPause=true;
}
if(notification.data==0) 
{
timerPause=false;
}
}