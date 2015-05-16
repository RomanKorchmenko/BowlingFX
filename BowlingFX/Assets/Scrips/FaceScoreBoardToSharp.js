#pragma strict
var GO: GameObject;
function Start () 
{
NotificationCenter.DefaultCenter().AddObserver(this, "ZerroScore");
NotificationCenter.DefaultCenter().AddObserver(this, "Frames");
NotificationCenter.DefaultCenter().AddObserver(this, "Summ");
NotificationCenter.DefaultCenter().AddObserver(this, "Throws"); 
NotificationCenter.DefaultCenter().AddObserver(this, "ThrowScore");
NotificationCenter.DefaultCenter().AddObserver(this, "EventMSG");
NotificationCenter.DefaultCenter().AddObserver(this, "NextRound");
NotificationCenter.DefaultCenter().AddObserver(this, "Restart");
NotificationCenter.DefaultCenter().AddObserver(this, "BonusThrows");
NotificationCenter.DefaultCenter().AddObserver(this, "StrikeFrame");
NotificationCenter.DefaultCenter().AddObserver(this, "UpdScoreBoard");
NotificationCenter.DefaultCenter().AddObserver(this, "PlayerIsChanged");
}

function Throws(notification:Notification)
{
//GO.gameObject.SendMessage("Throws",notification.data);	
GO.gameObject.SendMessage("Throws");
}

function ThrowScore(notification:Notification)
{
//GO.gameObject.SendMessage("ThrowScore",notification.data);	

}



function Frames(notification:Notification) //счет фреймов
{
//GO.gameObject.SendMessage("Frames",notification.data);	
}

function Summ(notification: Notification)
{
//GO.gameObject.SendMessage("Summ",notification.data);	
} 

function zerroScore()
{
GO.gameObject.SendMessage("zerroScore");

}
function BonusThrows(notification: Notification)
{
//GO.gameObject.SendMessage("BonusThrows", notification.data);
}


function NextRound()
{
//GO.gameObject.SendMessage("NextRound");
}

function Restart()
{
GO.gameObject.SendMessage("Restart");
zerroScore();
}

function StrikeFrame(notification:Notification)
{
//GO.gameObject.SendMessage("StrikeFrame", notification.data);
}

function UpdScoreBoard()
{
GO.gameObject.SendMessage("SetLineText");
}

function PlayerIsChanged()
{
GO.gameObject.SendMessage("PlayerChanger");
}
