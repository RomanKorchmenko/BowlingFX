#pragma strict
var Off: Texture2D;
var On: Texture2D;
var number: int;
var ownNumber: int;
var delay: float;
var msg: String;
var scoreStar: HighScoreArray;
var bool: boolean;
var time: float;
function Start () {
//NotificationCenter.DefaultCenter().AddObserver(this, "BonusStar");
NotificationCenter.DefaultCenter().AddObserver(this, "Restart");
guiTexture.texture = Off;
bool=false;
scoreStar = gameObject.Find("ScoreBoardGUI").GetComponent(HighScoreArray);
	 //StartCoroutine("Bonus");
}

function Update () {
number = scoreStar.stars;
Bonus();
}

function Awake()
{
time = Time.realtimeSinceStartup;
}


function Bonus()
{
if(ownNumber <= number)
{
		if(Time.realtimeSinceStartup>=time+delay && !bool)
		{
		guiTexture.texture = On;
		NotificationCenter.DefaultCenter().PostNotification(this, "PlaySoundFX", msg);
		bool=true;
		}
	}
}
function OnDisable()
{
guiTexture.texture = Off;
bool=false;
}


