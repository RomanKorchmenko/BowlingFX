#pragma strict
var SocialGO : GameObject;
var throwsString: String[];
var framesString: String[]; 
//для скореборда
private var j: int;
private var l: int;
var ballIsremoved: boolean;
var isCloseDoor: boolean;
var scores: int; //очки за подход
var scores1: int; //очки за первый подход
var scores2: int; // очки зха второй подход
var IsDoorAnimated: boolean;
var DoorStayCloseTime: float = 4.0;
var IsPinsRemove: boolean;
var PinsRemoveDelay: float = 0.0;
var IsPinsDownRemove: boolean;
var PinsDownRemoveDelay: float;
var IsPinsBirth: boolean;
var PinsBirthDelay: float = 0.0;
var IsBallBirth: boolean;
var IsBallDeath: boolean;
var BallBirthDelay: float=0.0;
var IsNextRound: boolean;
var NextRoundDelay: float=0.0;
var IsNextHalfRound: boolean;
var NextHalfRoundDelay: float;
var gameIsEnded: boolean;
var isRestart: boolean;
var bool: boolean;
var timerPause: boolean;
var newGame: boolean;
private var init: boolean;
var frames: int; //счетчик всех  фреймов
var throws: int; // одна вторая фрейма
var allThrows: int; // счетчик всех полуфреймов
var doorState: boolean; // if true - opened, if false - closed
var framesArray: int[]; //массив очков всех фреймов
var throwsArray: int[]; // массив всех полуфреймов 
var sumFrames: int[];
var bonusThrows: int;
var ScoreToPrefs0: int;
var ScoreToPrefs1: int;
var ScoreToPrefs2: int;
var ScoreToPrefs3: int;
var ScoreToPrefs4: int;
var PrefsToScore0: int;
var PrefsToScore1: int;
var PrefsToScore2: int;
var PrefsToScore3: int;
var PrefsToScore4: int;
var playerFinalScore: int;
var strikeConter: int;
var StrikeFrames: int[];
var SpareFrames: int[];
var spareBalls: int[];
var strikeBalls: int[];
var removedBalls: int;
function Start () {
SocialGO = GameObject.Find("___SocialServices");
IsBallBirth = true;
NotificationCenter.DefaultCenter().AddObserver(this, "Restart");
NotificationCenter.DefaultCenter().AddObserver(this, "BallIsRemoved");
NotificationCenter.DefaultCenter().AddObserver(this, "ScoresIs");
NotificationCenter.DefaultCenter().AddObserver(this, "DoorClosed");
NotificationCenter.DefaultCenter().AddObserver(this, "DoorOpened");
NotificationCenter.DefaultCenter().AddObserver(this, "Split3DEvent");
NotificationCenter.DefaultCenter().AddObserver(this, "Pins83Devent");
NotificationCenter.DefaultCenter().AddObserver(this, "MoveUp");
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
//NotificationCenter.DefaultCenter().AddObserver(this, "PlayerIsChanged");
//IsPinsBirth = true;
StrikeFrames = new int[3];
strikeBalls = new int[3];
SpareFrames = new int[2];
spareBalls = new int[2];
//newGame=true;
}
function Awake()
{
DontDestroyOnLoad(transform.gameObject);
SocialGO = GameObject.Find("___SocialServices");
}
function Update () {
if(SocialGO==null) SocialGO = GameObject.Find("___SocialServices");
//GameEnd();
if(newGame)
{
NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 0);
newGame=false;
}
if(gameIsEnded && !bool)
		{
GameEnded();
bool = true;
}
if(frames>10) frames = 10;
if(isCloseDoor)
{
NotificationCenter.DefaultCenter().PostNotification(this, "CloseDoor");
isCloseDoor=false;
}


if(IsDoorAnimated) //тестирование анимации двери по месседжу
	{
	NotificationCenter.DefaultCenter().PostNotification(this, "DoorsAnimation", DoorStayCloseTime);
	IsDoorAnimated=false;
	}

if(IsPinsRemove) // тестирование удаление пинов по месседжу
		{
		NotificationCenter.DefaultCenter().PostNotification(this, "PinsRemove", PinsRemoveDelay);
		IsPinsRemove=false;
		}

if(IsPinsDownRemove) // тестирование удаление упавших пинов по месседжу
		{
		NotificationCenter.DefaultCenter().PostNotification(this, "PinsDownRemove", PinsDownRemoveDelay);
		IsPinsDownRemove=false;
		}

if(IsPinsBirth) // тестирование рождения пинов по месседжу
		{
		if(!gameIsEnded)
		NotificationCenter.DefaultCenter().PostNotification(this, "PinsBirth", PinsBirthDelay);
		IsPinsBirth=false;
		}
				
if(IsBallBirth) // тестирование рождения ball по месседжу
		{
		NotificationCenter.DefaultCenter().PostNotification(this, "BallBirth");
		IsBallBirth=false;
		}
		if(IsBallDeath) // тестирование рождения ball по месседжу
		{
		Destroy(GameObject.FindGameObjectWithTag("activeball"));
		//NotificationCenter.DefaultCenter().PostNotification(this, "Ballath");
		IsBallDeath=false;
		}

if(IsNextRound) // тестирование смены раунда подсчета очков по месседжу
		{
		PlayerChanged();
		NotificationCenter.DefaultCenter().PostNotification(this, "NextRound", NextRoundDelay);
		frames++; // больше 10+1 бонусный не бывает 
		scores1 = 0;
		scores2 = 0;
		scores = 0;
		IsNextRound=false;
		}
		
if(IsNextHalfRound) // тестирование смены полураунда подсчета очков по месседжу
		{
		NotificationCenter.DefaultCenter().PostNotification(this, "NextHalfRound", NextHalfRoundDelay);
		IsNextHalfRound=false;
		}
}

function ScoresIs(notification: Notification)
{
scores = notification.data;
allThrows++; //нужно для адреса массива очков всех полуфреймов
throws++; // больше 2х небывает	
if(!gameIsEnded)
{
if(throws==1) // первый раунд
	{
	scores1 = scores;
	throwsArray[allThrows-1] =scores1;
		if(scores<10)
		{
		strikeConter=0;
		IsPinsDownRemove=true;
		IsDoorAnimated=true;
			yield WaitForSeconds(0.5);
			framesArray[frames] = scores1 + scores2;
					//  очки за каждый полуфрейм в текст борд
				ThrowsSetText(allThrows-1);
			NotificationCenter.DefaultCenter().PostNotification(this, "ThrowScore", throwsArray[allThrows-1]); 
			NotificationCenter.DefaultCenter().PostNotification(this, "Throws", allThrows-1);
			IsBallBirth=true;	
			NeutralVoice();
			Summ();
		if(scores1 ==0) Zerro3DEvent();
		if(scores1 ==2) pin2_3DEvent();
		if(scores1 ==3) pin3_3DEvent();
		if(scores1 ==4) pin4_3DEvent();
		if(scores1 ==5) pin5_3DEvent();
		if(scores1 ==6) pin6_3DEvent();
		if(scores1 ==7) pin7_3DEvent();
		if(scores1 ==8) pin8_3DEvent();
		if(scores1 ==9) pin9_3DEvent();
		//if(scores1 ==10) Zerro3DEvent();
		One3DEvent();
		return;
		}
	if(scores==10)
		{
		strikeConter++;
		SocialGO.SendMessage ("FirstStrikeSubmitAchivement", null, SendMessageOptions.DontRequireReceiver);//incriment strike counter
		if(strikeConter==1) Strike3DEvent();
		if(strikeConter==2) DoubleStrike3DEvent();
		if(strikeConter==3) TrippleStrike3DEvent();
		if(strikeConter>3)
		{
		 MultyStrike3DEvent();
		SocialGO.SendMessage ("MultyStrikeAchievement", null, SendMessageOptions.DontRequireReceiver);//incriment strike counter
		 }
		IsDoorAnimated=true;
			IsPinsRemove=true;
			yield WaitForSeconds(1);
			IsPinsBirth=true;
			NotificationCenter.DefaultCenter().PostNotification(this, "StrikeFrame", frames); // отправляет номер фрейма в котором был страйк
			framesArray[frames] = scores1 + scores2;
			Summ();
			bonusThrows=2;//два бонусных хода за страйк
			NotificationCenter.DefaultCenter().PostNotification(this, "BonusThrows", 2);
			throws=0;
				if(j>StrikeFrames.Length-1)j=0;
			StrikeFrames[j] = frames+1;
			strikeBalls[j] =removedBalls;
			j++;
			ThrowsSetText(allThrows-1);				
			NotificationCenter.DefaultCenter().PostNotification(this, "ThrowScore", 0 ); 
			NotificationCenter.DefaultCenter().PostNotification(this, "Throws", allThrows-1);
			
			allThrows++;
			//framesArray[frames] = scores1 + scores2;
			IsNextRound=true;
			IsBallBirth=true;
		}

}

else if(throws==2)
{
	scores2 = scores-scores1;
	throwsArray[allThrows-1] =scores2;
	throws=0;
	strikeConter=0;
	if(scores<10)
		{
		IsDoorAnimated=true;
			IsPinsRemove=true;
			yield WaitForSeconds(1);
			IsPinsBirth=true;
			framesArray[frames] = scores1 + scores2;
			Summ();
			BadVoice();
			//  очки за каждый полуфрейм в текст борд
			ThrowsSetText(allThrows-1);
			NotificationCenter.DefaultCenter().PostNotification(this, "ThrowScore", throwsArray[allThrows-1]); 
			NotificationCenter.DefaultCenter().PostNotification(this, "Throws", allThrows-1);
			IsNextRound=true;
			IsBallBirth=true;
			if(scores2 ==0) Zerro3DEvent();
			return;
		}
		if(scores==10)
		{
		IsDoorAnimated=true;
			Spare3DEvent();
			SocialGO.SendMessage ("FirstSpareSubmitAchivement", null, SendMessageOptions.DontRequireReceiver);
			IsPinsRemove=true;
			yield WaitForSeconds(1);
			IsPinsBirth=true;
			framesArray[frames] = scores1 + scores2;
			Summ();
			IsNextRound=true;
			bonusThrows=1; //один бонусный ход для спеа
			NotificationCenter.DefaultCenter().PostNotification(this, "BonusThrows", 1);
			//  очки за каждый полуфрейм в текст борд
			ThrowsSetText(allThrows-1);
			NotificationCenter.DefaultCenter().PostNotification(this, "ThrowScore", 0); 
			NotificationCenter.DefaultCenter().PostNotification(this, "Throws", allThrows-1);
				if(l>SpareFrames.Length-1)l=0;
			//SpareFrames[l] = removedBalls;
			SpareFrames[l] = frames+1;
			spareBalls[l] = removedBalls;
			l++;
			IsBallBirth=true;
			//return;
		}
	}
}


				
}
function DoorClosed() //check door is closed?
{
doorState=false;
}

function DoorOpened()//check door is opened?
{
doorState=true;
}
// msg to 3d events
function Spare3DEvent()
{
NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 1); //spare
GoodVoice();
}
function Strike3DEvent()
{
NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 2);//strike
GoodVoice();
throws=0;
}

function Split3DEvent()
{
if(throws==1)
	{
	if(scores<10 && scores>0)
		{
		NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 3);
		BadVoice();
		}
	}
}

function Pins83Devent()
{
if(throws==1)
	{
	NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 16);
	}
}

function One3DEvent()
{
	if(scores==9)
		{
		// девять сбито
		NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 17);
		NeutralVoice();
	}
}

function DoubleStrike3DEvent()
{
NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 4);
GoodVoice();
}
function TrippleStrike3DEvent()
{
NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 5);
GoodVoice();
}
function MultyStrike3DEvent()
{
NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 10);
GoodVoice();
}
function Zerro3DEvent()
{
NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 7); // не сбито ни одной
BadVoice();
}

function pin2_3DEvent()
{
NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 8); // сбито 2
}
function pin3_3DEvent()
{
NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 11); // сбито 3
}

function pin4_3DEvent()
{
NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 12); // сбито 4
}

function pin5_3DEvent()
{
NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 13); // сбито 5
}

function pin6_3DEvent()
{
NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 14); // сбито 6
}

function pin7_3DEvent()
{
NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 15); // сбито 7
}

function pin8_3DEvent()
{
//NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 16); // сбито 8
}

function pin9_3DEvent()
{
NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 17); // сбито 9
}


function EndGame3DEvent()
{
yield WaitForSeconds(5);
NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 9);
}

// msg to 3d events
function Summ()
{

if (frames==0)
	{
		sumFrames[frames] = framesArray[frames]; // nachinaetsa ot nula 
	}
if(frames>0)
	{
		if(bonusThrows==0)
		{
	 	sumFrames[frames] = sumFrames[frames-1]+framesArray[frames]; // каждый последующий суммируется с предыдущим числом
		for(var k: int; k<StrikeFrames.Length; k++) // обнуление стека страйкового и спейрового фреймов если нонусы все вышли 
				{
				if(StrikeFrames[k]>0) StrikeFrames[k]=0;
				}
				
		for(var u: int; u<SpareFrames.Length; u++)
				{
				if(SpareFrames[u]>0) SpareFrames[u]=0;
				}
			}
		else if(bonusThrows>0)
			{
		
	for(var i: int; i<StrikeFrames.Length; i++)
	{
			if(StrikeFrames[i]>0 && (removedBalls-strikeBalls[i])<=2)
			{
			//Debug.Log(removedBalls-strikeBalls[i]);
			if((removedBalls-strikeBalls[i])==1 && scores<10)
			{
			 sumFrames[StrikeFrames[i]-1] = sumFrames[StrikeFrames[i]-1] + scores1;
			 sumFrames[frames] = sumFrames[frames-1]+framesArray[frames];
			 }
			if( ((removedBalls-strikeBalls[i])==1 && scores==10)) 
			{
			sumFrames[StrikeFrames[i]-1] = sumFrames[StrikeFrames[i]-1] +framesArray[frames];
			 sumFrames[frames] = sumFrames[frames-1]+framesArray[frames];
			}
			if((removedBalls-strikeBalls[i])==2  && scores<10)
			{
			  sumFrames[StrikeFrames[i]-1] = sumFrames[StrikeFrames[i]-1] + scores2;
			 sumFrames[frames] = sumFrames[frames-1]+framesArray[frames];
			 }
			 	if((removedBalls-strikeBalls[i])==2  && scores==10)
			{
			  sumFrames[StrikeFrames[i]-1] = sumFrames[StrikeFrames[i]-1] + framesArray[frames];
			 sumFrames[frames] = sumFrames[frames-1]+framesArray[frames];
			 }
		 }
		 
	}
	
		for(var y: int; y<SpareFrames.Length; y++)
	{
//			if((removedBalls - spareBalls[y])>1)
//			{
//			 SpareFrames[y]=0;
//			 spareBalls[y]=0;
//			 }
			if(SpareFrames[y]>0 && (removedBalls - spareBalls[y])==1)
			{
			sumFrames[SpareFrames[y]-1] = sumFrames[SpareFrames[y]-1]+scores1;
			sumFrames[frames] = sumFrames[frames-1]+framesArray[frames];
		  }
		 
	}
			if(ballIsremoved)
		{
		bonusThrows--;
		ballIsremoved=false;
		}

	}
}
ScoresReciver();
	playerFinalScore = sumFrames[frames];
	yield WaitForSeconds(3);
	GameEnd();
}
function GameEnd()
{
if(allThrows>19)
{
if(StrikeFrames[0]==11 || StrikeFrames[1]==11 || StrikeFrames[2]==11)
{
	gameIsEnded=true;
	return;
}
if(StrikeFrames[0]!=10 && StrikeFrames[1]!=10 && StrikeFrames[2]!=10 && SpareFrames[0]!=10 && SpareFrames[1]!=10)
{
if(allThrows==20) 
	gameIsEnded=true;
	return;
} // если на десятом фрейме нет страйка или спеа то игра заканчивается
if(SpareFrames[0]==10 || SpareFrames[1]==10)
{
if(allThrows==21) 
	gameIsEnded=true;
	return;
}// если на 10 фрейме есть спеа то игра оканчивается на 21 полуфрейме
if(StrikeFrames[0]==10 || StrikeFrames[1]==10 || StrikeFrames[2]==10)
{
if(allThrows==22) 
	gameIsEnded=true;
	return;
}// если на десятом есть страйк то игра оканчивается на 22 полуфрейме
}
}
function Restart()
{
l = 0;
j = 0;
scores1 = 0;
scores2 = 0;
scores = 0;
removedBalls = 0;																																	
strikeConter = 0;
IsDoorAnimated=true;
NotificationCenter.DefaultCenter().PostNotification(this, "ZerroScore");
IsPinsRemove=true;
bonusThrows=0; // обнуление бонус ходов
frames=0; // обнуление количества фреймов
allThrows=0; // обнуление количество всех полуподходов
throws = 0; // обнуление полуподходов(макс  2)
gameIsEnded=false; //отмена окончания игры
//yield WaitForSeconds(1);
playerFinalScore = 0;
NotificationCenter.DefaultCenter().PostNotification(this, "EventMSG", 0);
bool = false;
for(var x: int; x<sumFrames.length ; x++) //обнуление массива очков фрейма
{
sumFrames[x] =0;
}
//var y: int;
//while(y<throwsArray.length){
//throwsArray[y] =0;
//throwsString[y] = "";
//y++;
//if(y>=throwsArray.length) y=0;
//}
for(var y: int; y<throwsArray.length ; y++) //обнуление массива очков throw
{
throwsArray[y] =0;
throwsString[y] = "";
}

for(var z: int; z<framesArray.length ; z++) //обнуление массива очков фрейм array
{
framesArray[z] =0;
framesString[z] = "";
}
	for(var k: int; k<StrikeFrames.Length; k++) // обнуление стека страйкового и спейрового фреймов
				{
				StrikeFrames[k] = 0;
				strikeBalls[k] = 0;
				}
				
		for(var u: int; u<SpareFrames.Length; u++)
				{
				SpareFrames[u] = 0;
				spareBalls[u] = 0;
				}
SetDataString();
IsPinsBirth = true;
IsBallBirth = true;

}
function MoveUp()
{
if(gameIsEnded) NotificationCenter.DefaultCenter().PostNotification(this, "Restart");
}

function GoodVoice()
{
yield WaitForSeconds(3);
NotificationCenter.DefaultCenter().PostNotification(this, "GoodEvent");
}

function BadVoice()
{
yield WaitForSeconds(3);
NotificationCenter.DefaultCenter().PostNotification(this, "BadEvent");
}
function NeutralVoice()
{
yield WaitForSeconds(3);
NotificationCenter.DefaultCenter().PostNotification(this, "NeutralEvent");
}

function Pause(notification: Notification)
	{
if(notification.data==1)
{ timerPause=true;
}
if(notification.data==0) timerPause=false;
	}
function GameEnded()
{
		//Summ(); // закоментил сумму а окончании игры
		yield WaitForSeconds(2);
		sumFrames[10] = playerFinalScore;
		//EndGame3DEvent();
		NotificationCenter.DefaultCenter().PostNotification(this, "GameEnded"); //  для войсов
		SocialGO.SendMessage ("FirstGameSubmitAchivement", null, SendMessageOptions.DontRequireReceiver);
		NotificationCenter.DefaultCenter().PostNotification(this, "FinalScore", playerFinalScore);
		//NotificationCenter.DefaultCenter().PostNotification(this, "MoveDown");
		NotificationCenter.DefaultCenter().PostNotification(this, "PlaySoundFX", "fireworks");
		isCloseDoor = true;
		IsPinsRemove = true;
		IsBallDeath = true;
}

function BallIsRemoved(notification: Notification)
{
ballIsremoved=true;
//removedBalls++;
removedBalls= notification.data;
}

function PlayerChanged()
{
//NotificationCenter.DefaultCenter().PostNotification(this, "PlayerChanger");
if(bonusThrows==0 ){
 		NotificationCenter.DefaultCenter().PostNotification(this, "PlayerIsChanged");
 		}
}

function SetDataString()
{
for(var i:int; i<sumFrames.Length; i++)
			{
			framesString[i] = ""+sumFrames[i];
			
			}
}
			function ThrowsSetText(n: int)
			{
			if(scores1!=10 && scores2!=10 && scores!=10){
			 throwsString[n] = ""+throwsArray[n];
			 }
				if(scores1!=10 && scores==10)
					{
						//throwsString[n] = ""+throwsArray[n];
					 	throwsString[n] = "/";
					 }
					if(scores1==10 )
						{
							throwsString[n] = "x";
							//throwsString[n]=""+throwsArray[n+1];
							throwsString[n+1] = "-";
						}
		}
function ScoresReciver()
{
SetDataString();
for(var i:int; i<sumFrames.Length; i++)
			{
			NotificationCenter.DefaultCenter().PostNotification(this, "Summ", sumFrames[i]); 
			NotificationCenter.DefaultCenter().PostNotification(this, "Frames", i);
			}
			
NotificationCenter.DefaultCenter().PostNotification(this, "UpdScoreBoard");
}