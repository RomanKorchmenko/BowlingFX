#pragma strict
//voices
var GoodEvents: AudioClip[];
var BadEvents: AudioClip[];
var NeutralEvents: AudioClip[];
private var voice: AudioClip;
//voices
var played: boolean;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "GoodEvent");
NotificationCenter.DefaultCenter().AddObserver(this, "BadEvent");
NotificationCenter.DefaultCenter().AddObserver(this, "NeutralEvent");

}

function Update () {
audio.clip =voice;
if(!played) 
	{
	audio.PlayOneShot(voice);
	played=true;
	}
}

function GoodEvent()
{
//voice = GoodEvents[Random.Range(0, GoodEvents.Length)];
played=false;
}

function BadEvent()
{
if(BadEvents.Length>0)
{
//voice = BadEvents[Random.Range(0, BadEvents.Length)];
played=false;
}
}

function NeutralEvent()
{
//voice = NeutralEvents[Random.Range(0, NeutralEvents.Length)];
played=false;
}
