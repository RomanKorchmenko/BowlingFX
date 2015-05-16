#pragma strict
var timerPause: boolean;
var PauseSound : AudioClip;
var gameSound : AudioClip;
var currVolume: float;
var audio1Volume: float;
var offSound: boolean;
//var stateTxt: GUIText;
var state: String = "Sound is On";
function Start () {
//if(PlayerPrefs.GetString("MusicPause")=="on") offSound=false;
//if(PlayerPrefs.GetString("MusicPause")=="off") offSound=true;
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
NotificationCenter.DefaultCenter().AddObserver(this, "MusicPause");
NotificationCenter.DefaultCenter().AddObserver(this, "MusicPauseEnd");
//currVolume = audio.volume;
audio.volume= 0;
}

function Update () {
//audio1Volume = Mathf.Clamp(audio1Volume, 0, currVolume);
if (timerPause )
{
if(!audio.isPlaying) audio.Play();
audio.clip = PauseSound;
//fadeIn();
}
if(!timerPause)
{
if(!audio.isPlaying) audio.Play();
audio.clip =gameSound;
//audio.volume  = currVolume;
}
}

function Pause(notification: Notification)
{
if(notification.data==1) timerPause=true;
if(notification.data==0) timerPause=false;
}