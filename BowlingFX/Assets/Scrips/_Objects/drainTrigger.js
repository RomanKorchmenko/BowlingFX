#pragma strict
var forced: boolean;
var ball: GameObject;
var imp: float =1000;
function Start () {
}

function FixedUpdate () {
if (forced)
{
ball = GameObject.FindGameObjectWithTag("activeball");
if(ball) ball.rigidbody.AddForce(Vector3(0, 0, imp), ForceMode.Impulse);
else if (!ball) forced=false;
}
}

function OnTriggerEnter(other: Collider)
{
if(other.tag == "activeball")
	{
	//yield WaitForSeconds(5);
	forced = true;
	NotificationCenter.DefaultCenter().PostNotification(this, "BlindeSniper");
	}
}