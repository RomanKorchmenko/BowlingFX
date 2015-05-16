#pragma strict
//var corner1: Transform;
//var corner2: Transform;
var pos: Vector3;
var tick: float = 45;
var GyroGift: GameObject;
var BombGift: GameObject;
var RandomGift: GameObject;
private var gift: GameObject;
var i: int; 
var n: int;
var Positions: Vector3[];
var timerPause: boolean;
var strikeToBombCount: int;
function Start () {
Positions = new Vector3[transform.childCount];
//Positions = gameObject.GetComponentsInChildren(Transform);
for (var child : Transform in transform) {
	if(i>transform.childCount) i=0;
    Positions[i] = child.position;
i++;
    //child.position += Vector3.up * 10.0;
}
NotificationCenter.DefaultCenter().AddObserver(this, "EventMSG");
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
	//if(!PlayerPrefs.GetString("Gift"))
	//{
// 	print(PlayerPrefs.GetString("Gift"));
	//TakeGyroGift();
	//yield WaitForSeconds(2);
	//TakeBombGift();
	//yield WaitForSeconds(2);
	//TakeGyroGift();
	//TakeRandomGift();
	//PlayerPrefs.SetString("Gift", "false");
	//}
}
function TakeAGift()
{
if(!timerPause)
	{
pos = Positions[Random.Range(0, transform.childCount)];
	gift = GyroGift;
	Instantiate(gift, Vector3(pos.x, pos.y, pos.z), Quaternion.Euler(Vector3(0, Random.Range(-90, 90), 0)));
	}
}
function Pause(notification: Notification)
	{
	if(notification.data==1)
	{ 
	timerPause=true;
	}
if(notification.data==0) timerPause=false;
}
	
function EventMSG(notification:Notification)
{
	if(notification.data==2 || notification.data==4 || notification.data==5 || notification.data==10) //страйк
	{
	TakeGyroGift();
	}
		if(notification.data==4 || notification.data==5 || notification.data==10) //страйк
	{
	if(strikeToBombCount==2)
	{
	TakeBombGift();
	strikeToBombCount=0;
	}
	strikeToBombCount++;
	}
}

function TakeGyroGift()
{
		pos = Positions[Random.Range(0, transform.childCount)];
		gift = GyroGift;
		Instantiate(gift, Vector3(pos.x, pos.y, pos.z),  Quaternion.Euler(Vector3(0, Random.Range(-90, 90), 0)));
}

function TakeBombGift()
{
		pos = Positions[Random.Range(0, transform.childCount)];
		gift = BombGift;
		Instantiate(gift, Vector3(pos.x, pos.y, pos.z),  Quaternion.Euler(Vector3(0, Random.Range(-90, 90), 0)));
}
function TakeRandomGift()
{
		pos = Positions[Random.Range(0, transform.childCount)];
		gift = RandomGift;
		Instantiate(gift, Vector3(pos.x, pos.y, pos.z),  Quaternion.Euler(Vector3(0, Random.Range(-90, 90), 0)));
}
