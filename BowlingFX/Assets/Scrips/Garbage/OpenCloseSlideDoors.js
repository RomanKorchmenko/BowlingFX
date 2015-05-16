#pragma strict
function Start () {
OpenFunction();
//NotificationCenter.DefaultCenter().AddObserver(this, "NewRound");
NotificationCenter.DefaultCenter().AddObserver(this, "NextBall");

}

function Update () {

}

function OpenFunction()
{
animation["open"].time = 2.2;
animation.Play("open");
//print("Open");
}

function CloseFunction()
{
animation["close"].time = 2.2;
animation.Play("close");
//print("Close");
}

function NextBall()
{
CloseFunction();
yield WaitForSeconds (4.5);
OpenFunction();
}