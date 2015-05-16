#pragma strict
var currentQuality: String;
var SharpController: GameObject;
function PauseOn()
{
NotificationCenter.DefaultCenter().PostNotification(this, "Pause", 1);
}

function PauseOff()
{
NotificationCenter.DefaultCenter().PostNotification(this, "Pause", 0);
//NotificationCenter.DefaultCenter().PostNotification(this, "MoveUp");
}

function RestartGame()
{
NotificationCenter.DefaultCenter().PostNotification(this, "Restart");
SharpController.SendMessage("Restart");
}
function IncreaseQuality()
{
QualitySettings.IncreaseLevel();
NotificationCenter.DefaultCenter().PostNotification(this, "QualityChanged");
}
function DecreaseQuality()
{
QualitySettings.DecreaseLevel();
NotificationCenter.DefaultCenter().PostNotification(this, "QualityChanged");
}

function LateUpdate()
{
currentQuality = QualitySettings.names[QualitySettings.GetQualityLevel()];
//Gtext.text=currentQuality;
}