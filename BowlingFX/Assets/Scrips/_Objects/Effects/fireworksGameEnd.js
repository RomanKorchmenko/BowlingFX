#pragma strict
var init: boolean;
var GO: GameObject;
private var fire: GameObject;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "PlaySoundFX");
NotificationCenter.DefaultCenter().AddObserver(this, "Restart");
//GO.gameObject.SetActiveRecursively(false);
}

//function Update () {
//if(init) GO.gameObject.SetActiveRecursively(true);
//else if(!init) GO.gameObject.SetActiveRecursively(false);
//}

function PlaySoundFX(notification: Notification)
{
if(notification.data == "fireworks")
{
fire = Instantiate(GO, transform.position, transform.rotation);
}
}

function Restart()
{
Destroy(fire);
//init = false;
}