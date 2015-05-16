#pragma strict
var Strike: GUITexture;
var Spare: GUITexture;
var score: int;
private var score1: int;
private var score2: int;
private var score3: int;
private var score4: int;
private var score5: int;
private var score6: int;
private var score7: int;
private var score8: int;
private var score9: int;
private var score10: int;
var ownBallCounter: int;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "Keglya1");
NotificationCenter.DefaultCenter().AddObserver(this, "Keglya2");
NotificationCenter.DefaultCenter().AddObserver(this, "Keglya3");
NotificationCenter.DefaultCenter().AddObserver(this, "Keglya4");
NotificationCenter.DefaultCenter().AddObserver(this, "Keglya5");
NotificationCenter.DefaultCenter().AddObserver(this, "Keglya6");
NotificationCenter.DefaultCenter().AddObserver(this, "Keglya7");
NotificationCenter.DefaultCenter().AddObserver(this, "Keglya8");
NotificationCenter.DefaultCenter().AddObserver(this, "Keglya9");
NotificationCenter.DefaultCenter().AddObserver(this, "Keglya10");
Spare.guiTexture.color=Vector4(1,1,1,0);
Strike.guiTexture.color=Vector4(1,1,1,0);
}

function LateUpdate () {
ownBallCounter=GameObject.Find("ObjectRemover").GetComponent(BallCounter).ownBallCounter;

score=score1+score2+score3+score4+score5+score6+score7+score8+score9+score10;

if (score ==10 && ownBallCounter==1)
{
NotificationCenter.DefaultCenter().PostNotification(this, "Strike" );
StrikeGUI();
}
if (score ==10 && ownBallCounter==2)
{
NotificationCenter.DefaultCenter().PostNotification(this, "Spare" );
SpareGUI();
}
if (score<10 && ownBallCounter==2)
{
NotificationCenter.DefaultCenter().PostNotification(this, "EndRound" );
}
}

function Keglya1 ()
{
score1 =1;
}
function Keglya2 ()
{
score2 =1;
}
function Keglya3 ()
{
score3 =1;
}
function Keglya4 ()
{
score4 =1;
}
function Keglya5 ()
{
score5 =1;
}
function Keglya6 ()
{
score6 =1;
}
function Keglya7 ()
{
score7 =1;
}
function Keglya8 ()
{
score8 =1;
}
function Keglya9 ()
{
score9 =1;
}
function Keglya10 ()
{
score10 =1;
}

function SpareGUI()
{
Spare.guiTexture.color.a=1;
yield WaitForSeconds(3);  
Spare.guiTexture.color=Vector4(1,1,1,0);
}
function StrikeGUI()
{
Strike.guiTexture.color.a=1;
yield WaitForSeconds(3);  
Strike.guiTexture.color=Vector4(1,1,1,0);
}