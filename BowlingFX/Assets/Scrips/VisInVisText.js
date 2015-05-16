#pragma strict
var toInvisAnim: String = ""; 
var toVisAnim: String = ""; 
var WellcomeGO: GameObject;
var ExitGO: GameObject;
var EscapeGUI: GameObject;
var exit: boolean;
private var time: float;
private var timer: float;
var delayTime: float = 5.0;
function Start () {
EscapeGUI.gameObject.SetActiveRecursively(false);
WellcomeGO.active = true;
ExitGO.active = false;
animation.Play(toVisAnim);
NotificationCenter.DefaultCenter().AddObserver(this, "Cancel");
}

function Update () {
time= Time.time;
if (Input.GetKeyDown(KeyCode.Escape))
	{
	timer=Time.time;
	 animation.Play(toInvisAnim);
	 if(exit == false)exit = true;
	 else exit = false;
	}
	if(exit)
	{
	if(time>=timer+delayTime)
	 Cancel(); 
	 }
}

function CanChange()
{
if(exit)
	{
	WellcomeGO.active = false;
	animation.Play(toVisAnim);
	ExitGO.active = true;
	}
		else 
		{
		WellcomeGO.active = true;
		ExitGO.active = false;
		animation.Play(toVisAnim);
		EscapeGUI.gameObject.SetActiveRecursively(false);
		}
}

function CantChange()
{
if(exit)
{
EscapeGUI.gameObject.SetActiveRecursively(true);
}

}

function Cancel()
{
exit=false;
animation.Play(toInvisAnim);
}