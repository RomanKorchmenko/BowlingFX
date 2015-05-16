using UnityEngine;
using System.Collections;

public class GameManager : MonoBehaviour
{
	public static  GameManager Instance;
	public string[] throwsString;
	public string[] framesString;
	int j;
	int l;
	public bool ballIsremoved;
	public bool isCloseDoor;
	public int scores;
	public int scores1;
	public int scores2;

	public enum GlobalStates{
		newGame,
		gameIsEnded
	}
	public GlobalStates CurrentGlobalStates;

	public enum GameStates{
		PinsRemove,
		PinsDownRemove,
		PinsBirth,
		BallBirth,
		NextRound,
		NextHalfRound
	}
	public GameStates CurrentGamestate;
	public int playerFinalScore;
	public int strikeConter;
	public int StrikeFrames;
	public int SpareFrames;
	public int spareBalls;
	public int[] strikeBalls;
	public int removedBalls;

	public int frames; //счетчик всех  фреймов
	public int throws; // одна вторая фрейма

	public int[] framesArray; //массив очков всех фреймов
	public int[] throwsArray; // массив всех полуфреймов 
	public int[] sumFrames;
	public int bonusThrows;

	void Awake()
	{
		Instance = this;
	}
		void Start ()
		{
	//	StrikeFrames = int[3];
	//	strikeBalls = int[3];
	//	SpareFrames = int[2];
	//	spareBalls = int[2];
		}

	public void NewGame()
	{
		// тут мы ресетим все пи  запускаем новую игру
	}


		// Update is called once per frame
		void Update ()
		{




		}

	public void Pause(int notification )
	{
		if(notification==1)
		{
			//timerPause=true; пауза активна
		}
		//if(notification==0) timerPause=false; пауза не активна
	}
	public void GameEnded()
	{
		//окончание игры
	}

	public void ScoresIs(int notification)
	{
		scores = notification;
		//allThrows++; //нужно для адреса массива очков всех полуфреймов
		throws++; // больше 2х небывает	
	
	//функция получения очков
	
	}
}