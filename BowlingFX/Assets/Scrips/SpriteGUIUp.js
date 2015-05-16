#pragma strict
var bool: boolean;
var anim: Animator;
//var hash : HashIDs;    
var msg: String;
var i: int;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "SpriteGUI");
}
function Awake()
{
anim = GetComponent(Animator);
//hash = GameObject.FindGameObjectWithTag(Tags.gameController).GetComponent(HashIDs);
}


function Update () {
if(bool) anim.SetBool("down", true);
else anim.SetBool("down", false);
}
function SpriteGUI(notification: Notification)
{
if(notification.data == msg)
{
i++;
if(i>1) i=0;
if(i==0)bool = false;
if(i==1)bool = true;
}
}
