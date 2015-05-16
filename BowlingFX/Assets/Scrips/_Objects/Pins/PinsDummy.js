//@script ExecuteInEditMode ()
#pragma strict
private var PinsBirthDelay: float;
var kegelNumber: String;
var pins: Transform[];
var kegliPrefab: Transform;
var door: boolean;
private var ownKeglya: Transform;
var emit: boolean;
var levelIDComponent: _LevelID;
var LevelID: String;
function Start () {
levelIDComponent = GameObject.Find("__LevelID").GetComponent(_LevelID);
LevelID = levelIDComponent.levelID;
if(LevelID == "Hanami")
{
kegliPrefab = pins[0];
}
if(LevelID == "SciFi")
{ 
kegliPrefab = pins[1];
}
if(LevelID == "SteamPunk")
{ 
kegliPrefab = pins[2];
}

NotificationCenter.DefaultCenter().AddObserver(this, "DoorClosed");
NotificationCenter.DefaultCenter().AddObserver(this, "DoorOpened");
NotificationCenter.DefaultCenter().AddObserver(this, "PinsBirth");
}

function Update()
{
if(emit && !door)
{
ownKeglya=Instantiate(kegliPrefab, transform.position, transform.rotation);
ownKeglya.name = "Keglya"+kegelNumber;
ownKeglya.transform.parent=transform;
emit=false;
}
}


function PinsBirth(notification: Notification)
{
PinsBirthDelay = notification.data;
yield WaitForSeconds(PinsBirthDelay);
emit = true;
}

function DoorClosed()
{
door=false;
}
function DoorOpened()
{
door = true;
}