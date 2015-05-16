#pragma strict
var timerPause: boolean;
var objects = new List.<GameObject>();
private var obj: GameObject;
function Start () {
timerPause=false;
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
Optimise ();
}
function Awake()
{
//InvokeRepeating("Optimise",0 , 0.5);
}


function Optimise () {
if(!timerPause)
	{
	for(var i: int; i<objects.Count; i++)
		{
		obj = objects[i];
		obj.gameObject.SetActiveRecursively(false);
		//obj.gameObject.SetActive(false);
		}
	}
	if(timerPause)
	{
	for(var p: int; p<objects.Count; p++)
		{
		obj = objects[p];
		obj.gameObject.SetActiveRecursively(true);
		//obj.gameObject.SetActive(true);
		}
	}
	if(p>objects.Count) p=objects.Count;
	if(i>objects.Count) i=objects.Count;
}

function Pause(notification: Notification)
{
if(notification.data==1) timerPause=true;
if(notification.data==0) timerPause=false;
Optimise ();
}