#pragma strict
var SocialGO : GameObject;
var scores: int;
var LevelID: String;
var stars: int;
//string from player prefs init on submit score
var hanami200: String;
var scifi200: String;
var steampunk200: String;
var hanami300: String;
var scifi300: String;
var steampunk300: String;
//var GameManager: _GameManager;
//var GameManager: ScoreTransfer;

var levelIDComponent: _LevelID;
function Start () {
stars=0;
NotificationCenter.DefaultCenter().AddObserver(this, "ScoresIs");
NotificationCenter.DefaultCenter().AddObserver(this, "ResetScores");
NotificationCenter.DefaultCenter().AddObserver(this, "FinalScore");
NotificationCenter.DefaultCenter().AddObserver(this, "GameEnded");
NotificationCenter.DefaultCenter().AddObserver(this, "BlindeSniper");
NotificationCenter.DefaultCenter().AddObserver(this, "BallCurveTrick");
NotificationCenter.DefaultCenter().AddObserver(this, "Split3DEvent");
NotificationCenter.DefaultCenter().AddObserver(this, "LevelIDIs");
NotificationCenter.DefaultCenter().AddObserver(this, "BallBirth");
NotificationCenter.DefaultCenter().AddObserver(this, "Restart");
//GameManager = gameObject.Find("__GameManager").GetComponent(ScoreTransfer);
levelIDComponent = gameObject.Find("__LevelID").GetComponent(_LevelID);
LevelID = levelIDComponent.levelID;
SocialGO = GameObject.Find("___SocialServices");
}

function Restart()
{
stars = 0;
}

function Stars()
{
/*if (scores >75) stars = 1; 
if (scores >150) stars = 2;
if (scores >225) stars = 3;
if (scores >280) stars = 4;*/
if (scores >50) stars = 1; 
if (scores >100) stars = 2;
if (scores >150) stars = 3;
if (scores >200) stars = 4;
}

function FinalScore(notification:Notification)
{
scores = notification.data;
Stars();
}
function BallBirth()
{
//scores = GameManager.playerFinalScore;
Stars();
}
function GameEnded()
{
Stars();
//scores = GameManager.playerFinalScore;
hanami200 = PlayerPrefs.GetString("Hanami200");
scifi200 = PlayerPrefs.GetString("SciFi200");
steampunk200 = PlayerPrefs.GetString("SteamPunk200");

hanami300 = PlayerPrefs.GetString("Hanami300");
scifi300 = PlayerPrefs.GetString("SciFi300");
steampunk300 = PlayerPrefs.GetString("SteamPunk300");

SocialGO.SendMessage ("SubmitScores", scores);
//game master
if(scores>=200 && LevelID == "Hanami")
{
 SocialGO.SendMessage ("HanamiMaster", null, SendMessageOptions.DontRequireReceiver);
 PlayerPrefs.SetString("Hanami200", "achievement");
 }
if(scores>=200 && LevelID == "SciFi")
{
 SocialGO.SendMessage ("SciFiMaster", null, SendMessageOptions.DontRequireReceiver);
 PlayerPrefs.SetString("SciFi200", "achievement");
 }
if(scores>=200 && LevelID == "SteamPunk")
{
 SocialGO.SendMessage ("SteamPunkMaster", null, SendMessageOptions.DontRequireReceiver);
 PlayerPrefs.SetString("SteamPunk200", "achievement");
 }
//bowling master
if(hanami200 =="achievement" && scifi200 == "achievement" && steampunk200 == "achievement")
{
SocialGO.SendMessage ("BowlingMaster", null, SendMessageOptions.DontRequireReceiver);
}
//amazing game master
if(scores==300 && LevelID == "Hanami")
{
 SocialGO.SendMessage ("AmazingHanamiMaster", null, SendMessageOptions.DontRequireReceiver);
 PlayerPrefs.SetString("Hanami300", "achievement");
 }
if(scores==300 && LevelID == "SciFi")
{
 SocialGO.SendMessage ("AmazingSciFiMaster", null, SendMessageOptions.DontRequireReceiver);
 PlayerPrefs.SetString("SciFi200", "achievement");
 }
if(scores==300 && LevelID == "SteamPunk")
{
 SocialGO.SendMessage ("AmazingSteamPunkMaster", null, SendMessageOptions.DontRequireReceiver);
  PlayerPrefs.SetString("SteamPunk200", "achievement");
 }
// amasing bowling master
//amazing bouling god
if(hanami300 =="achievement" && scifi300 == "achievement" && steampunk300 == "achievement")
{
SocialGO.SendMessage ("BowlingMaster", null, SendMessageOptions.DontRequireReceiver);
}
}
function BlindeSniper()
{
SocialGO.SendMessage ("BlindeSniperAchievement", null, SendMessageOptions.DontRequireReceiver);
}

function BallCurveTrick()
{
SocialGO.SendMessage ("BallCurveAchievement", null, SendMessageOptions.DontRequireReceiver);
}

function Split3DEvent()
{
SocialGO.SendMessage ("SplitAchievement", null, SendMessageOptions.DontRequireReceiver);
}

function LevelIDIs(notification:Notification)
{
LevelID = notification.data;
}