#pragma strict
var num: int;
var bool: boolean;
var PrizeGO:GameObject;
var pos: Transform;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "Prize");
}

function Update () {
if(!bool)
	{
	var prize = Instantiate(PrizeGO, pos.position, transform.rotation);
	bool = true;
	}
}

function Prize(notification:Notification)
{
if(num == notification.data) bool = false;
}