#pragma strict
var framesText: GUIText[]; //  текстовое значение всех фреймов за всю игру
private var frameText: GUIText; // конкретное значение текста в конкретном ходе
var throwsText : GUIText[]; //текстовое значение всех половин фрейма за всю игру
private var throwText: GUIText; // текстовое значение конкретного элемента в конкретном ходе
var sum: int;
var thrc: int;
var sparestrike: int;
var throws: int;
var StrikeFrames: int[];
var j: int;
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
//NotificationCenter.DefaultCenter().AddObserver(this, "StrikeFrame");



	for(var i: int; i<framesText.length; i++) //обнуление текста в строках очков  фрейма
	{
	frameText = framesText[i];
	frameText.text = "";
	}
		for(var n: int; n<throwsText.length; n++) //обнуление текста в строках очков полуфрейма
		{
		throwText = throwsText[n];
		throwText.text = "";
		}
}

function Update () {

}


function Throws(notification:Notification)
{
throws = notification.data;
throwText=throwsText[throws];
if(sparestrike!=1 && sparestrike!=2) throwText.text = ""+thrc;
else if(sparestrike==1) throwText.text = "/";
else if(sparestrike==2 || sparestrike==4 || sparestrike==4)
{
 throwText.text = "x";
 throwText=throwsText[throws+1];
  throwText.text = "-";
}	
}

function ThrowScore(notification:Notification)
{
thrc = notification.data;
	
//print(thrc);
}



function Frames(notification:Notification) //счет фреймов
{
frameText =framesText[notification.data];
//print("framesText_"+notification.data);
if(sum!=0)frameText.text = ""+sum;
else frameText.text = "";
	
//frameText.text = ""+sumFrames[frames];
}

function Summ(notification: Notification)
{
 sum = notification.data;
//print("frameText.Text_"+notification.data);
} 

function zerroScore()
{

for(var i: int; i<framesText.length; i++) //обнуление текста в строках очков  фрейма
{
frameText = framesText[i];
frameText.text = "";
}
for(var n: int; n<throwsText.length; n++) //обнуление текста в строках очков полуфрейма
{
throwText = throwsText[n];
throwText.text = "";
}

}
function BonusThrows(notification: Notification)
{
sparestrike = notification.data;
}


function NextRound()
{
sparestrike=0;
}

function Restart()
{
sum=0;
throws=0;
thrc=0;
sparestrike=0;
zerroScore();
}

function StrikeFrame(notification:Notification)
{
if(j>2)j=0;
StrikeFrames[j] = notification.data;
//print(notification.data);
j++;
}