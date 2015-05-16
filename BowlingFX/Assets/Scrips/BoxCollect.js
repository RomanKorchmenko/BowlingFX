#pragma strict
var collect: String = "";
var bool: boolean;
var stars: GameObject;
var emit: Transform;
var delay: float = 1;
var createSound: AudioClip;
enum GyftMode {Gyro, Bomb, RandomGift};
var Gyft: GyftMode;
var enableAutodestroi: boolean;
function Start () {
if(enableAutodestroi)DelayDestroy();
audio.PlayOneShot(createSound);
}

function Update () {

if(bool)
	{
	 animation.Play(collect);
	}
}

function OnCollisionEnter(other: Collision)
{
	if(other.gameObject.tag=="activeball" && !bool)
	{
	Notify();
	bool=true;
	}
}
//function OnMouseDown()
function CollectOnTap()
{
	Notify();
	animation.Play(collect);
	bool=true;
}

function Destroy()
{
Instantiate(stars, emit.position, Quaternion.identity);
Destroy(gameObject);
}
function DelayDestroy()
{
yield WaitForSeconds (delay);
bool = true;
}

function Notify()
{
switch (Gyft) {
			case Gyft.Gyro: NotificationCenter.DefaultCenter().PostNotification(this, "GiftGyro"); break;
			case Gyft.Bomb: NotificationCenter.DefaultCenter().PostNotification(this, "GiftBomb"); break;
			case Gyft.RandomGift: NotificationCenter.DefaultCenter().PostNotification(this, "GiftRandom"); break;
			
			}
}