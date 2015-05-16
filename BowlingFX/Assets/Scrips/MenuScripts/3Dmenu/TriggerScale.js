#pragma strict
@script RequireComponent(AudioSource)
var soundToPlay: AudioClip;
public var scale:boolean;
var scaleSpeed:float = 0.1;
//var levelInt: int;
//var level: String;
var OwnScale: float;
var maxScale: float = 1.5;
//public var LvlObject:GameObject;
function Start () {
OwnScale = transform.localScale.x;
//NotificationCenter.DefaultCenter().AddObserver(this, "LevelCheckt");
}

function FixedUpdate () {
if(!scale)
{
transform.localScale.x = Mathf.Lerp(transform.localScale.x, OwnScale, scaleSpeed*Time.time);
transform.localScale.y = Mathf.Lerp(transform.localScale.y, OwnScale, scaleSpeed*Time.time);
}

if(scale)
{
transform.localScale.x = Mathf.Lerp(transform.localScale.x, OwnScale*maxScale, scaleSpeed*Time.time);
transform.localScale.y = Mathf.Lerp(transform.localScale.y, OwnScale*maxScale, scaleSpeed*Time.time);
}

}

function OnTriggerEnter (other : Collider)
{
Click();
scale = true;
}


function OnTriggerExit (other : Collider)
{
scale = false;
}

function Click()
{
audio.PlayOneShot(soundToPlay); 
}