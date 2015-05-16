#pragma strict
//var offSound: boolean;
var type: String;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
NotificationCenter.DefaultCenter().AddObserver(this, "SoundPause");
NotificationCenter.DefaultCenter().AddObserver(this, "SoundPauseEnd");
if(type=="fx" && PlayerPrefs.GetString("SoundPauseFx")!=null) 
{
if (PlayerPrefs.GetString("SoundPauseFx")=="on") audio.mute = false;
if (PlayerPrefs.GetString("SoundPauseFx")=="off") audio.mute = true;
}
if(type=="Voices" && PlayerPrefs.GetString("SoundPause")!=null) 
{
if (PlayerPrefs.GetString("SoundPause")=="on") audio.mute = false;
if (PlayerPrefs.GetString("SoundPause")=="off") audio.mute = true;
}
}


function SoundPause(notification:Notification)
{
//offSound=true;
if(notification.data == type)
if(audio.mute)
				audio.mute = false;
			else
				audio.mute = true;
//audio.Stop();
}

function SoundPauseEnd(notification:Notification)
{
//offSound=false;
if(notification.data == type)
if(audio.mute)
				audio.mute = false;
			else
				audio.mute = true;
//audio.Play();
}