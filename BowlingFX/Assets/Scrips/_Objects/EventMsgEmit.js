#pragma strict
var timerPause: boolean;
var meshes: GameObject[];
var particles: GameObject[];
private var particle: GameObject;
var levelIDComponent: _LevelID;
var LevelID: String;
function Start () {
levelIDComponent = GameObject.Find("__LevelID").GetComponent(_LevelID);
LevelID = levelIDComponent.levelID;
if(LevelID == "Hanami")
{
particle = particles[0];
}
if(LevelID == "SciFi")
{ 
particle = particles[1];
}
if(LevelID == "SteamPunk")
{ 
particle = particles[2];
}
NotificationCenter.DefaultCenter().AddObserver(this, "EventMSG");
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
}

function LateUpdate () {
}
function EventMSG(notification:Notification)
{
if(!timerPause)
{
	var part =  Instantiate(particle, transform.position, transform.rotation);
	var msg = Instantiate(meshes[notification.data], transform.position, transform.rotation);
	msg.transform.parent = this.transform;
	part.transform.parent = msg.transform;
	NotificationCenter.DefaultCenter().PostNotification(this, "PlaySoundFX", "Event3D");
	Destroy (msg, 10);
	}
}

function Pause(notification: Notification)
	{
if(notification.data==1)
{ timerPause=true;
}
if(notification.data==0) timerPause=false;
	}
	