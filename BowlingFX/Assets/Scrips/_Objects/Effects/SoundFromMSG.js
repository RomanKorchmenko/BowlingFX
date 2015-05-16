#pragma strict
var sound: AudioClip;
var msg: String;
var played: boolean;
var loop: boolean;
var isRestarted: boolean;
function Start () {
played=true;
NotificationCenter.DefaultCenter().AddObserver(this, "PlaySoundFX");
NotificationCenter.DefaultCenter().AddObserver(this, "Restart");
}

function Update () {

		
}

function PlaySoundFX(notification: Notification)
{
if(msg == notification.data)
{
played=false;
if(!played) 
	{
	if(!loop)
	{
	audio.loop = false;
	 audio.PlayOneShot(sound);
	 }
	if(loop)
	{
	audio.loop = true;
	 audio.clip = sound;
	 audio.Play();
	 }
	played=true;
	}
}
}

function Restart()
{
if(isRestarted) audio.Stop();
}