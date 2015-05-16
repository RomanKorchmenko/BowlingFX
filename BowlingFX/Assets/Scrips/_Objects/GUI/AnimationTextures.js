#pragma strict
// набор текстур для анимации
var welcome= AnimatedTexture(); //приветствие
var strike= AnimatedTexture(); //страйк
var spare = AnimatedTexture(); // спеа
var split =  AnimatedTexture(); // сплит
var doubleStrike =  AnimatedTexture(); // двойной страйк
var trippleStrike =  AnimatedTexture(); // тройной страйк
var one = AnimatedTexture(); // осталась одна
var zerro = AnimatedTexture(); // не сбил не одну
var gameEnd = AnimatedTexture(); // общие очки
var hiscore = AnimatedTexture(); // общие очки
// boolean для включений анимаций
var isWelcome: boolean;
var isStrike: boolean;
var isSpare: boolean;
var isSplit: boolean;
var isDoubleStrike: boolean;
var isTrippleStrike: boolean;
var isOne: boolean;
var isZerro: boolean;
var isHighScore: boolean;
var isEndGame: boolean;
var activate: boolean;
//таргет экран
var target: GameObject;

var timeToWait: float =5;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "Welcome");
NotificationCenter.DefaultCenter().AddObserver(this, "Strike");
NotificationCenter.DefaultCenter().AddObserver(this, "Spare");
NotificationCenter.DefaultCenter().AddObserver(this, "Split");
NotificationCenter.DefaultCenter().AddObserver(this, "DoubleStrike");
NotificationCenter.DefaultCenter().AddObserver(this, "TrippleStrike");
NotificationCenter.DefaultCenter().AddObserver(this, "One");
NotificationCenter.DefaultCenter().AddObserver(this, "Zerro");
NotificationCenter.DefaultCenter().AddObserver(this, "HighScore");
NotificationCenter.DefaultCenter().AddObserver(this, "GameEnded");


welcome.Start();
strike.Start();
spare.Start();
split.Start();
//doubleStrike.Start();
//trippleStrike.Start();
//one.Start();
//zerro.Start();
//hiscore.Start();
gameEnd.Start();
target.gameObject.SetActive(false);
Welcome();
activate=true;
}

function Awake()
{

}

function FixedUpdate () {
if(activate==true)
{
target.gameObject.SetActive(true);
}
if(activate==false)
{
target.gameObject.SetActive(false);
}

if(isWelcome)
	{
	target.gameObject.SetActive(true);
	welcome.Animate();
	}
	if(welcome.switchTo == welcome.switchableTextures.Length)
		{ 
		welcome.switchTo=0;
		isWelcome=false;
		activate=false;
		//return;
		}



if(isStrike)
	{
	target.gameObject.SetActive(true);
	strike.Animate();
	if(strike.switchTo == strike.switchableTextures.Length)
		{ 
		strike.switchTo=0;
		isStrike=false;
		activate=false;
		//return;
		}	
	}
	
if(isSpare)
	{
	target.gameObject.SetActive(true);
	spare.Animate();
	if(spare.switchTo == spare.switchableTextures.Length)
		{ 
		spare.switchTo=0;
		isSpare=false;
		activate=false;
		//return;
		}	
	}
	
		
		if(isSplit)
	{
	target.gameObject.SetActive(true);
	split.Animate();
	if(split.switchTo == split.switchableTextures.Length)
		{ 
		split.switchTo=0;
		isSplit=false;
		activate=false;
		//return;
		}	
	}
	
		
	if(isEndGame)
	{
	target.gameObject.SetActive(true);
	gameEnd.Animate();
		if(gameEnd.switchTo == gameEnd.switchableTextures.Length)
		{ 
		gameEnd.switchTo=0;
		isEndGame=false;
		activate=false;
		//return;
		}	
	}

}


function Welcome()
{
yield WaitForSeconds(5);
isWelcome=true;
activate=true;
}


function Strike()
{
isStrike=true;
activate=true;
}

function Spare()
{
isSpare=true;
activate=true;
}
function Split()
{
isSplit=true;
activate=true;
}
function DoubleStrike()
{
isDoubleStrike=true;
activate=true;
}
function TrippleStrike()
{
isTrippleStrike = true;
activate=true;
}
function One()
{
isOne = true;
activate=true;
}
function Zerro()
{
isZerro = true;
activate=true;
}
function HighScore()
{
isHighScore = true;
activate=true;
}

function GameEnded()
{
isEndGame = true;
activate=true;
}