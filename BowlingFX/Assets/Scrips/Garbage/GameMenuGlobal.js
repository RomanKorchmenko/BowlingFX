#pragma strict
var touchCount = 0;
var changer: int;
enum GameButonType {playgame, quitgame, credits};
var GamecurrentType:GameButonType;
var level: String;
var ownGUI: GameObject;
var creditsGUI: GameObject;

function Start()
{

}
//function Update () {
//for (var i = 0; i < Input.touchCount; i++)
//	{
//var touch = Input.GetTouch(i);
//var hold =  Input.GetTouch(i);
//
//if(hold.phase == TouchPhase.Stationary && guiTexture.HitTest(hold.position))	
// 			{
// 			//changer++;
//			touchCount ++;
// 			}
// 				
//else if(touch.phase == TouchPhase.Began && guiTexture.HitTest(touch.position))
//    		{
//    		touchCount ++;
//    		switch (GamecurrentType) {
//			case GamecurrentType.playgame:  Application.LoadLevel (level); break;
//			case GamecurrentType.quitgame:  Application.Quit(); break;
//			case GamecurrentType.credits: print("Credits.............."); break;
//				}
//    		}
//}
//}

function OnMouseDown()
{
//changer++;
switch (GamecurrentType) {
			case GamecurrentType.playgame:  Application.LoadLevel (level); break;
			case GamecurrentType.quitgame:  Application.Quit(); break;
			case GamecurrentType.credits: print("Credits.............."); break;
				}
}