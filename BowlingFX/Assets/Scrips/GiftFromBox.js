#pragma strict
var gyroCounter: int;
var bombCounter: int;
var GyroCounterText: GUIText;
var BombCounterText: GUIText;
var GyroBtn: GameObject;
var BombBtn: GameObject;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "GiftGyro");
NotificationCenter.DefaultCenter().AddObserver(this, "GiftBomb");
NotificationCenter.DefaultCenter().AddObserver(this, "UseGyro");
NotificationCenter.DefaultCenter().AddObserver(this, "UseBomb");
NotificationCenter.DefaultCenter().AddObserver(this, "Restart");
if(gyroCounter==0)
{
GyroBtn.gameObject.SetActiveRecursively(false);
GyroCounterText.gameObject.SetActiveRecursively(false);
}
if(bombCounter==0)
{
BombBtn.gameObject.SetActiveRecursively(false) ;
BombCounterText.gameObject.SetActiveRecursively(false);
}
}

function LateUpdate () {
if(gyroCounter==0)
{
GyroBtn.gameObject.SetActiveRecursively(false) ;
GyroCounterText.gameObject.SetActiveRecursively(false);
}
if(bombCounter==0)
{
BombBtn.gameObject.SetActiveRecursively(false) ;
BombCounterText.gameObject.SetActiveRecursively(false);
}
}

function GiftGyro()
{
gyroCounter++;
	if(gyroCounter>0)
	{
	GyroBtn.gameObject.SetActiveRecursively(true);
	GyroCounterText.gameObject.SetActiveRecursively(true);
	}
GyroCounterText.text = ""+gyroCounter;
}

function UseGyro()
{
gyroCounter--;
if(gyroCounter==0)
{
GyroBtn.gameObject.SetActiveRecursively(false) ;
GyroCounterText.gameObject.SetActiveRecursively(false);
}
GyroCounterText.text = ""+gyroCounter;
}
function Restart()
{
gyroCounter=0;
GyroCounterText.text = ""+gyroCounter;
GyroBtn.gameObject.SetActiveRecursively(false) ;
GyroCounterText.gameObject.SetActiveRecursively(false);
}
function GiftBomb()
{
bombCounter++;
	if(bombCounter>0)
	{
	BombBtn.gameObject.SetActiveRecursively(true);
	BombCounterText.gameObject.SetActiveRecursively(true);
	}
BombCounterText.text = ""+bombCounter;
}

function UseBomb()
{
bombCounter--;
if(bombCounter==0)
{
BombBtn.gameObject.SetActiveRecursively(false) ;
BombCounterText.gameObject.SetActiveRecursively(false);
}
BombCounterText.text = ""+bombCounter;
}