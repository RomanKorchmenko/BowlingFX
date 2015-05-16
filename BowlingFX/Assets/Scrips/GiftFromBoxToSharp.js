#pragma strict
var GO: GameObject;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "GiftGyro");
NotificationCenter.DefaultCenter().AddObserver(this, "GiftBomb");
NotificationCenter.DefaultCenter().AddObserver(this, "UseGyro");
NotificationCenter.DefaultCenter().AddObserver(this, "UseBomb");
NotificationCenter.DefaultCenter().AddObserver(this, "Restart");
}

function GiftGyro()
{
GO.SendMessage("GiftGyro");
}

function UseGyro()
{
//GO.SendMessage("UseGyro");
}
function Restart()
{
GO.SendMessage("Restart");
}
function GiftBomb()
{
GO.SendMessage("GiftBomb");
}

function UseBomb()
{
//GO.SendMessage("UseBomb");
}