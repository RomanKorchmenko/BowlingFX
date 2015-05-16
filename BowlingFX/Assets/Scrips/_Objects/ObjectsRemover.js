#pragma strict
var removeSound : AudioClip;
var IsClosed: boolean;
var goBall: boolean;
var ball: int;
function Start()
{
NotificationCenter.DefaultCenter().AddObserver(this, "Restart");
}
function OnTriggerEnter (other : Collider) {

if (other.tag == "activeball")
	{
	audio.PlayOneShot(removeSound);
	ball++;
	NotificationCenter.DefaultCenter().PostNotification(this, "BallIsRemoved", ball );
//	print("BallRemoved by Object Remover");
	}
	
	if (other.tag == "kegli")
	{
	audio.PlayOneShot(removeSound);
	}
	Destroy(other.gameObject);
}

function Restart()
{
ball=0;
}