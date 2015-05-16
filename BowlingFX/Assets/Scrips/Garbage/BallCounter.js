#pragma strict
var Strike: GameObject;
var Spare: GameObject;
var ownBallCounter:int;
var globalBallCounter: int;
var round: int;
var IsStrike: boolean;
var IsSpare: boolean;
var IsNewRound: boolean;
var removeSound : AudioClip;
var ball: int;
var scores: int;
var globalScores: int;
var scores1: int;
var scores2: int;
var myroundScore: int;

var textScores = new List.<GUIText>();
private var textScore: GUIText;
var roundScores = new List.<GUIText>();
private var roundScore: GUIText;
var AllscoresArray: int[];
var AllRoundsScoresArray: int[];
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "ScoresIs");
Spare.gameObject.SetActiveRecursively(false);
Strike.gameObject.SetActiveRecursively(false);
}
function OnTriggerEnter (other : Collider) {
if (other.tag == "ball")
	{
ownBallCounter++;
globalBallCounter++;
	}	

}
function Update () {

}
function SpareGUI()
{
print("Spare!!!");
yield WaitForSeconds(3);
Spare.gameObject.SetActiveRecursively(true);
yield WaitForSeconds(3); 
IsSpare=false; 
Spare.gameObject.SetActiveRecursively(false);
}
function StrikeGUI()
{
print("Strike!!!");
yield WaitForSeconds(3);
Strike.gameObject.SetActiveRecursively(true);
yield WaitForSeconds(3);  
IsStrike=false;
Strike.gameObject.SetActiveRecursively(false);
}

function ScoresIs(notification: Notification)
{
scores = notification.data;
if(ownBallCounter==1) scores1 = scores;
if(ownBallCounter==2) scores2 = scores-scores1;
myroundScore = scores1 + scores2;
AllRoundsScoresArray[round] = myroundScore;
roundScore = roundScores[round];
roundScore.text = ""+myroundScore;
//Обычная игра
if (ownBallCounter==1 && scores<10 )  //Обычная игра первый шар
{
AllscoresArray[globalBallCounter-1] = scores1;
textScore = textScores[globalBallCounter-1];
textScore.text = ""+scores1;
Debug.Log("obichnaya igra");
return;
}
if (ownBallCounter==2 && scores<10 )  //Обычная игра второй шар
	{
textScore = textScores[globalBallCounter-1];
textScore.text = ""+scores2;
Debug.Log("obichnaya igra");
ownBallCounter=0;
Rounds();
	}
if (ownBallCounter==2 && scores ==10 ) //Обычная игра со Спэа
{
textScore = textScores[globalBallCounter-1];
textScore.text = "/";
Debug.Log("obichnaya igra so spea");
SpareGUI();
ownBallCounter=0;
Rounds();
}
if (ownBallCounter==1 && scores ==10) //Обычная игра со страйком
	{
textScore = textScores[globalBallCounter-1];	
textScore.text = "X";
textScore = textScores[globalBallCounter];
textScore.text = "-";
Debug.Log("obichnaya igra co straikom");
StrikeGUI();
globalBallCounter++;
ownBallCounter=0;
Rounds();
	}
//Обычная игра
if(globalBallCounter==22)
{
EndGame();
}
}



function Rounds()
{
print("RoundsFunction");
NotificationCenter.DefaultCenter().PostNotification(this, "EndRound" );
yield WaitForSeconds(1);
NotificationCenter.DefaultCenter().PostNotification(this, "NewRound" );
scores =0;
round++;
}

function EndGame()
{
print("End Game!!!+YoursScoreIs"+globalScores);
}
// scores - отвечают за очки за партию при потере одного шара
// globalScores - отвечают за суммирование очков за все раунды
// bonusBallCounter - отвечает за подстчет поглощенныхъ шаров в бонус партии(макс 2)
// ownBallCounter - отвечает за досчет шаров в партии.(макс 2)
//