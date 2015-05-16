#pragma strict
var onTex: Texture2D;
var offTex: Texture2D;
enum SoundType {fx, music, voices};
var SoundTypeCurrent:SoundType;
private var ison: int;
function Start () {

}

function Update () {

}

function OnMouseDown()
{
	if(ison==1)
	{
	this.guiTexture.texture  = onTex;
	PauseEnd();
	//ison=0;
	}
if(ison==0)
{
this.guiTexture.texture = offTex;
Pause();
//ison=1;
}
ison++;
if(ison>1) ison=0;
}

function PauseEnd()
{
//print("play");
switch (SoundTypeCurrent) {
			case SoundType.fx:SoundPauseFxOn(); break;
			case SoundType.music:  MusicPauseOn(); break;
			case SoundType.voices: SoundPauseOn(); break;
				}
}

function Pause()
{
//print("pause");
switch (SoundTypeCurrent) {
			case SoundType.fx:SoundPauseFxOff(); break;
			case SoundType.music:  MusicPauseOff(); break;
			case SoundType.voices: SoundPauseOff(); break;
				}
}

function SoundPauseFxOn()
{
NotificationCenter.DefaultCenter().PostNotification(this, "SoundPauseEnd", "fx");
PlayerPrefs.SetString("SoundPauseFx", "on");
}

function SoundPauseFxOff()
{
NotificationCenter.DefaultCenter().PostNotification(this, "SoundPause", "fx");
PlayerPrefs.SetString("SoundPauseFx", "off");
}

function MusicPauseOn()
{
NotificationCenter.DefaultCenter().PostNotification(this, "MusicPauseEnd");
PlayerPrefs.SetString("MusicPause", "on");
}

function MusicPauseOff()
{
NotificationCenter.DefaultCenter().PostNotification(this, "MusicPause");
PlayerPrefs.SetString("MusicPause", "off");
}

function SoundPauseOn()
{
NotificationCenter.DefaultCenter().PostNotification(this, "SoundPause", "Voices");
PlayerPrefs.SetString("SoundPause", "on");
}

function SoundPauseOff()
{
NotificationCenter.DefaultCenter().PostNotification(this, "SoundPause", "Voices");
PlayerPrefs.SetString("SoundPause", "off");
}