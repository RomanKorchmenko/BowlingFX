#pragma strict
var optionGUIint: int;
var qalityGUIint: int;
var newGameGUIint: int;
var currentQuality: String;
var Gtext: GUIText;
//menus GOs
var QualityGUIMenu: GameObject;//
var OptionGUIMenu: GameObject;//
var soundGUIMenu: GameObject;//
var RestartGUIMenu: GameObject;//
var FinalScoreGUI: GameObject;//
//var ResetScoresGUI: GameObject;
var ResetScoresAnswerGUI: GameObject;//
var LevelSelectorGUI: GameObject;//
var levelSelectorAnswerGUI: GameObject;//
var SocialsGUI: GameObject;//
var SettingsGUI: GameObject;//
var CreditsGUI: GameObject;//
var timerPause: boolean;
function Awake()
{
//InvokeRepeating("GUIUpdate", 0, 0.1);
}

function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "OptionGUI");
NotificationCenter.DefaultCenter().AddObserver(this, "QualityGUI");
NotificationCenter.DefaultCenter().AddObserver(this, "SoundGUI");
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
NotificationCenter.DefaultCenter().AddObserver(this, "NewGameGUI");
//NotificationCenter.DefaultCenter().AddObserver(this, "Final");// окно показа очков в конце игры
NotificationCenter.DefaultCenter().AddObserver(this, "FinalScore");
NotificationCenter.DefaultCenter().AddObserver(this, "ResetScoreGUI");
NotificationCenter.DefaultCenter().AddObserver(this, "LevelSelector");
NotificationCenter.DefaultCenter().AddObserver(this, "MoveUp");
NotificationCenter.DefaultCenter().AddObserver(this, "Socials");
}
function Update () {
currentQuality = QualitySettings.names[QualitySettings.GetQualityLevel()];
Gtext.text=currentQuality;
if(!timerPause)
{
//OptionGUIMenu.gameObject.SetActiveRecursively(false);
//QualityGUIMenu.gameObject.SetActiveRecursively(false);
//soundGUIMenu.gameObject.SetActiveRecursively(false);
////RestartGUIMenu.gameObject.SetActiveRecursively(false);
////FinalScoreGUI.gameObject.SetActiveRecursively(false);
////ResetScoresGUI.gameObject.SetActiveRecursively(false);
//LevelSelectorGUI.gameObject.SetActiveRecursively(false);
////ResetScoresAnswerGUI.gameObject.SetActiveRecursively(false);
//levelSelectorAnswerGUI.gameObject.SetActiveRecursively(false);
////SocialsGUI.gameObject.SetActiveRecursively(false);
//SettingsGUI.gameObject.SetActiveRecursively(false);
//CreditsGUI.gameObject.SetActiveRecursively(false);
//return;
}
}
function OptionGUI(notification: Notification)
{
optionGUIint ++;
newGameGUIint=0;
if(optionGUIint>1) optionGUIint=0;
if(optionGUIint==1)
{
OptionGUIMenu.gameObject.SetActiveRecursively(true);
QualityGUIMenu.gameObject.SetActiveRecursively(false);
soundGUIMenu.gameObject.SetActiveRecursively(false);
RestartGUIMenu.gameObject.SetActiveRecursively(false);
FinalScoreGUI.gameObject.SetActiveRecursively(false);
ResetScoresAnswerGUI.gameObject.SetActiveRecursively(false);
levelSelectorAnswerGUI.gameObject.SetActiveRecursively(false);
return;
}
else if(optionGUIint==0)
{
OptionGUIMenu.gameObject.SetActiveRecursively(false);
QualityGUIMenu.gameObject.SetActiveRecursively(false);
soundGUIMenu.gameObject.SetActiveRecursively(false);
RestartGUIMenu.gameObject.SetActiveRecursively(false);
FinalScoreGUI.gameObject.SetActiveRecursively(false);
ResetScoresAnswerGUI.gameObject.SetActiveRecursively(false);
levelSelectorAnswerGUI.gameObject.SetActiveRecursively(false);
SocialsGUI.gameObject.SetActiveRecursively(false);
return;
}
//optionGUIint++;
//if(optionGUIint>1) optionGUIint = 0;
}
function QualityGUI()
{
QualityGUIMenu.gameObject.SetActiveRecursively(true);
OptionGUIMenu.gameObject.SetActiveRecursively(false);
soundGUIMenu.gameObject.SetActiveRecursively(false);
RestartGUIMenu.gameObject.SetActiveRecursively(false);
FinalScoreGUI.gameObject.SetActiveRecursively(false);
return;
}

function SoundGUI()
{
soundGUIMenu.gameObject.SetActiveRecursively(true);
OptionGUIMenu.gameObject.SetActiveRecursively(false);
QualityGUIMenu.gameObject.SetActiveRecursively(false);
RestartGUIMenu.gameObject.SetActiveRecursively(false);
FinalScoreGUI.gameObject.SetActiveRecursively(false);
return;
}


function Pause(notification: Notification)
	{
if(notification.data==1)
{ timerPause=true;
}
if(notification.data==0) timerPause=false;
	}
	
	
function NewGameGUI(notification:Notification)
{
optionGUIint=0;
newGameGUIint++;
if(newGameGUIint>1) newGameGUIint=0;

//var count: int = notification.data;

	if(newGameGUIint ==1)
	{
	RestartGUIMenu.gameObject.SetActiveRecursively(true);
	soundGUIMenu.gameObject.SetActiveRecursively(false);
	OptionGUIMenu.gameObject.SetActiveRecursively(false);
	QualityGUIMenu.gameObject.SetActiveRecursively(false);
	FinalScoreGUI.gameObject.SetActiveRecursively(false);
	return;
	}
	else if (newGameGUIint ==0)
	{
	//FinalScoreGUI.gameObject.SetActiveRecursively(false);
	RestartGUIMenu.gameObject.SetActiveRecursively(false);
	soundGUIMenu.gameObject.SetActiveRecursively(false);
	OptionGUIMenu.gameObject.SetActiveRecursively(false);
	QualityGUIMenu.gameObject.SetActiveRecursively(false);
	return;
	}
}
function FinalScore()
{
FinalScoreGUI.gameObject.SetActiveRecursively(true);
RestartGUIMenu.gameObject.SetActiveRecursively(false);
soundGUIMenu.gameObject.SetActiveRecursively(false);
OptionGUIMenu.gameObject.SetActiveRecursively(false);
QualityGUIMenu.gameObject.SetActiveRecursively(false);
}

function ResetScoreGUI()
{
//ResetScoresGUI.gameObject.SetActiveRecursively(true);
FinalScoreGUI.gameObject.SetActiveRecursively(false);
RestartGUIMenu.gameObject.SetActiveRecursively(false);
soundGUIMenu.gameObject.SetActiveRecursively(false);
OptionGUIMenu.gameObject.SetActiveRecursively(false);
QualityGUIMenu.gameObject.SetActiveRecursively(false);
}

function LevelSelector()
{
LevelSelectorGUI.gameObject.SetActiveRecursively(true);
OptionGUIMenu.gameObject.SetActiveRecursively(false);
}

function MoveUp()
{
FinalScoreGUI.gameObject.SetActiveRecursively(false);
ResetScoresAnswerGUI.gameObject.SetActiveRecursively(false);
SocialsGUI.gameObject.SetActiveRecursively(false);
optionGUIint=0;
newGameGUIint=0;

OptionGUIMenu.gameObject.SetActiveRecursively(false);
QualityGUIMenu.gameObject.SetActiveRecursively(false);
soundGUIMenu.gameObject.SetActiveRecursively(false);
RestartGUIMenu.gameObject.SetActiveRecursively(false);
//FinalScoreGUI.gameObject.SetActiveRecursively(false);
//ResetScoresGUI.gameObject.SetActiveRecursively(false);
LevelSelectorGUI.gameObject.SetActiveRecursively(false);
//ResetScoresAnswerGUI.gameObject.SetActiveRecursively(false);
levelSelectorAnswerGUI.gameObject.SetActiveRecursively(false);
//SocialsGUI.gameObject.SetActiveRecursively(false);
SettingsGUI.gameObject.SetActiveRecursively(false);
CreditsGUI.gameObject.SetActiveRecursively(false);
//NotificationCenter.DefaultCenter().PostNotification(this, "Pause", 0);
}

function Socials()
{
SocialsGUI.gameObject.SetActiveRecursively(true);
FinalScoreGUI.gameObject.SetActiveRecursively(false);
}