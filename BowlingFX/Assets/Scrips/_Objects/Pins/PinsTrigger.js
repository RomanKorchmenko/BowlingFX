var PinNum: String;
var moved: boolean;
var init: boolean;
function Start()
{
NotificationCenter.DefaultCenter().AddObserver(this, "DoorClosed");
//NotificationCenter.DefaultCenter().AddObserver(this, "BallIsRemoved");
}
function OnTriggerExit(collisionInfo : Collider) {
    if (collisionInfo.gameObject.tag == "kegli")
{
PinNum=collisionInfo.transform.name;
moved=true;
NotificationCenter.DefaultCenter().PostNotification(this, "PinDown", PinNum );
}
}

function DoorClosed()
{
moved=false;
init=false;
}

function BallIsRemoved()
{
init=true;
}