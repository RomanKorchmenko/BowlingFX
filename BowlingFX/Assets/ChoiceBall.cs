using UnityEngine;
using System.Collections;
public class ChoiceBall : MonoBehaviour {
	// Use this for initialization

	public enum BallType{Blue, Red, Green}
	public BallType ball;
	public dfSprite blueBall;
	public dfSprite greenBall;
	public dfSprite redBall;
	public dfSprite sprite;
	public GameObject ballEmiter;
	public _LevelID id;
	void Start()
	{
		sprite = GetComponent<dfControl>().Find<dfSprite>( "Balls" );
		ballEmiter = GameObject.Find("BallEmitter");
		id = GameObject.Find("__LevelID").GetComponent<_LevelID>();
		if(id.levelID == "Hanami") ball = BallType.Red; 
		if(id.levelID == "SciFi") ball = BallType.Blue; 
		if(id.levelID == "SteamPunk") ball = BallType.Green; 
	}
	// Update is called once per frame
	void LateUpdate () {

		switch (ball){
		//case BallType.ChoiceABall: sprite.SpriteName = "ChoiceABall"; break;
		//case BallType.ChoiceABall_active: sprite.SpriteName = "ChoiceABall_active"; break;
		case BallType.Blue: sprite.SpriteName = "Blue"; break;
		case BallType.Red: sprite.SpriteName = "Red"; break;
		case BallType.Green: sprite.SpriteName = "Green"; break;
		}
	}

	public void BlueBallSet()
	{
		ball = BallType.Blue; 
		ballEmiter.SendMessage("BallChanger", "SciFi");
	}
	public void RedBallSet()
	{
		ballEmiter.SendMessage("BallChanger", "Hanami");
		ball = BallType.Red; 
	}
	public void GreenBallSet()
	{
		ball = BallType.Green; 
		ballEmiter.SendMessage("BallChanger", "SteamPunk");

	}

}
