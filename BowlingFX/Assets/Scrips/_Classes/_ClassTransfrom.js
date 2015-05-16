#pragma strict
import System.Collections.Generic;
class MyTranslate
{
var TranslateObject: GameObject;
var open: float;
var close: float;
var speed: int=4;
var offset: Vector3;
var moveTime: float;
//var dir: int =1;
var ToSide = Sides.Left_Right;
enum Sides { Left_Right, Bottom_Top}

function Awake()
{
//moveTime = Time.deltaTime*speed;
}
function Start () {
//close=TranslateObject.transform.position.y;
moveTime = (Mathf.Abs(open-close))/speed;
}

function Swithing()
{
switch(ToSide)
	{
	case ToSide.Left_Right:
				offset = Vector3.left;
				break;
	case ToSide.Bottom_Top:
				offset = Vector3.up;
				break;
	}
}
function Open()
{
//TranslateObject.transform.collider.enabled=false;
TranslateObject.transform.position.x=Mathf.Lerp(TranslateObject.transform.position.x, open, Time.deltaTime*speed);
}
function Close()
{
//TranslateObject.transform.collider.enabled=true;
TranslateObject.transform.position.x=Mathf.Lerp(TranslateObject.transform.position.x, close, Time.deltaTime*speed);
}
}