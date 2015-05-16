#pragma strict

//этот скрипт будет собирать статискику по сбитым кеглям и посылать очки в счетчик раундов, 
var timeToWait: float = 1.5;
private var tmpTime: float;
var downBool: boolean;
var bool: boolean;
var scores: int[];
var AllScores: int;
function Start()
{
NotificationCenter.DefaultCenter().AddObserver(this, "PinDown");
NotificationCenter.DefaultCenter().AddObserver(this, "NextRound");
NotificationCenter.DefaultCenter().AddObserver(this, "NextHalfRound");
NotificationCenter.DefaultCenter().AddObserver(this, "BallIsRemoved");
NotificationCenter.DefaultCenter().AddObserver(this, "Restart");
}

function Update()
{
	if(Time.time >= tmpTime+timeToWait && bool)
	{
	AllScores = scores[0] + scores[1] + scores[2] + scores[3] + scores[4] + scores[5] + scores[6] + scores[7] + scores[8] + scores[9] ;
	NotificationCenter.DefaultCenter().PostNotification(this, "ScoresIs",  AllScores);
	if(scores[6]==0 && scores[9]==0 && AllScores==8) NotificationCenter.DefaultCenter().PostNotification(this, "Split3DEvent");
	if((scores[6]!=0 || scores[9]!=0) && AllScores==8) NotificationCenter.DefaultCenter().PostNotification(this, "Pins83Devent");
	bool=false;
	
	 }
}
function PinDown(notification: Notification)
{
tmpTime=Time.time;
if(notification.data=="Keglya1") scores[0] =1;
if(notification.data=="Keglya2") scores[1] =1;
if(notification.data=="Keglya3") scores[2] =1;
if(notification.data=="Keglya4") scores[3] =1;
if(notification.data=="Keglya5") scores[4] =1;
if(notification.data=="Keglya6") scores[5] =1;
if(notification.data=="Keglya7") scores[6] =1;
if(notification.data=="Keglya8") scores[7] =1;
if(notification.data=="Keglya9") scores[8] =1;
if(notification.data=="Keglya10") scores[9] =1;
}

function NextRound()
{
bool=false;
AllScores=0;
for(var i: int=0; i<scores.Length; i++)
		{
		scores[i] = 0;
	 	}
}

function IsNextHalfRound()
{
bool=false;
}

function BallIsRemoved()
{
bool=true;
}

function Restart()
{
NextRound();
}