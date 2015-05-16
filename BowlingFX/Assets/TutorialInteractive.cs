using UnityEngine;
using System.Collections;

public class TutorialInteractive : MonoBehaviour {
	public bool activateTutorial;
	public dfPanel GiftCollect;
	public dfPanel MoveBall;
	public dfPanel KickBall;
	public dfPanel TweestBall;
	public dfPanel DiagonalKick;
	public dfPanel GyroTutorial;
	public dfPanel BombUser;
	public dfSprite BombBtn;
	public dfSprite GyroBtn;
	public dfButton DisableButton;
	public dfButton NewGameImmediately;
	public bool moved;
	public bool kicked;
	public bool GetGift;
	public bool dotwisted;
	public bool twist;
	public bool diagonalTutActivate;
	public bool diagon;
	public bool gyroTutActive;
	public bool bombTutActivate;
	public bool gyrotut;
	public Transform TutorialBoxEmiter;
	public GameObject TutorialBox;
	public float realtime;
	public float nowSpeed;
	public GameObject SoundFX;
	public GameObject GoogleServices;
	//public AudioClip finishStepTutAudio;
	// Use this for initialization
	void Start () {
//		Debug.Log(PlayerPrefs.GetInt("TutorialEnd"));
		if(PlayerPrefs.GetInt("TutorialEnd")==1) return;
		activateTutorial = true;
		//realtime = Time.timeScale;
		if(activateTutorial)// нужно сделать в будущем проверку на запись в сейве перед показом тутора
		{
			EmitTutorialBox();
			//StartCoroutine(SetSpeedTime(0f));
			//Time.timeScale = 0f;
			GUICollectActive(true); //сбор подарков активен при старте 
			GUIMoveBallActive(false);
			GUIKickBallActive(false);
			GUITweestBallActive(false);
			GUIDiagonalKickActive(false);
			GUIGyroDriverActive(false);
			GUIBombUserActive(false);
			EnableBombBtn(false);
			EnableGyroBtn(false);
			DissableButtonActivate(true);
		}
	}

	void EmitTutorialBox()
	{
		Instantiate(TutorialBox, TutorialBoxEmiter.transform.position, TutorialBoxEmiter.transform.rotation);
	}
	void DissableButtonActivate(bool enable)
	{
		if(enable)
		{
			DisableButton.IsEnabled = true;
			DisableButton.IsVisible = true;
		}
		else
		{
			DisableButton.IsEnabled = false;
			DisableButton.IsVisible = false;
		}
	}

	void EnableBombBtn(bool enable)
	{
		if(enable)
		{
			BombBtn.IsEnabled = true;
			BombBtn.IsVisible = true;
		}
		else
		{
			BombBtn.IsEnabled = false;
			BombBtn.IsVisible = false;
		}
	}
	void EnableGyroBtn(bool enable)
	{
		if(enable)
		{
			GyroBtn.IsEnabled = true;
			GyroBtn.IsVisible = true;
		}
		else
		{
			GyroBtn.IsEnabled = false;
			GyroBtn.IsVisible = false;
		}
	}
	void Update()
	{
		//nowSpeed = Time.timeScale;
	}

	// Update is called once per frame
	void GUICollectActive(bool active)
	{
		if(active)
		{
			GiftCollect.IsEnabled = true;
			GiftCollect.IsVisible = true;
		}
		else
		{
			GiftCollect.IsEnabled = false;
			GiftCollect.IsVisible = false;
		}
	}

	void GUIMoveBallActive(bool active)
	{
		if(active)
		{
			MoveBall.IsEnabled = true;
			MoveBall.IsVisible = true;
		}
		else
		{
			MoveBall.IsEnabled = false;
			MoveBall.IsVisible = false;
		}
	}

	void GUIKickBallActive(bool active)
	{
		if(active)
		{
			KickBall.IsEnabled = true;
			KickBall.IsVisible = true;
		}
		else
		{
			KickBall.IsEnabled = false;
			KickBall.IsVisible = false;
		}
	}

	void GUITweestBallActive(bool active)
	{
		if(active)
		{
			TweestBall.IsEnabled = true;
			TweestBall.IsVisible = true;
		}
		else
		{
			TweestBall.IsEnabled = false;
			TweestBall.IsVisible = false;
		}
	}

	void GUIDiagonalKickActive(bool active)
	{
		if(active)
		{
			DiagonalKick.IsEnabled = true;
			DiagonalKick.IsVisible = true;
		}
		else
		{
			DiagonalKick.IsEnabled = false;
			DiagonalKick.IsVisible = false;
		}
	}

	void GUIGyroDriverActive(bool active)
	{
		if(active)
		{
			GyroTutorial.IsEnabled = true;
			GyroTutorial.IsVisible = true;
		}
		else
		{
			GyroTutorial.IsEnabled = false;
			GyroTutorial.IsVisible = false;
		}
	}

	void GUIBombUserActive(bool active)
	{
		if(active)
		{
			BombUser.IsEnabled = true;
			BombUser.IsVisible = true;
		}
		else
		{
			BombUser.IsEnabled = false;
			BombUser.IsVisible = false;
		}
	}

	//после сборки подарков автоматический ативируется "Подвигай шар", после него идет "кинь шар", после кинь шар активируется - сделай подсечку. Все последующие уроки туториала должны происходить при рождении нового шара

	void GiftCollected()// проверка, собраны ли подарки, вызывается при положительном результате
	{
		if(activateTutorial)
		{
		GetGift = true;
		SoundFX.SendMessage("PlaySoundFX", "star1");
		GUIMoveBallActive(true);
		GUICollectActive(false);
		Time.timeScale = realtime;
		}
	}
	void BallMoved()
	{
		if(activateTutorial)
		{
			if(GetGift && !moved)
			{
			moved = true;
				SoundFX.SendMessage("PlaySoundFX", "star2");
				GUIMoveBallActive(false);
				GUIKickBallActive(true);
			}
		}
	}
	void BallKicked()
	{
		if(activateTutorial)
		{
			if(moved && !kicked)
			{
			kicked=true;
				SoundFX.SendMessage("PlaySoundFX", "star3");
				GUIKickBallActive(false);
			}
			//if(gyroTutActive) GUIGyroDriverActive(true);
		}

	}

	void DoTwistNow() // метод вызывается при переходе шаром черты за которй можно делать подсечку - рисует гуи подсечки
	{
		if(activateTutorial)
		{
			if(kicked && !dotwisted)
			{
				Time.timeScale =0.01F;
				GUITweestBallActive(true);
				dotwisted=true;
			}
		}
	}
	void Tweested() // метод вызывается при удачной подсечке, выключает гуи подсечки и взводит бульку показа гуи для диагонального бороска
	{
		if(activateTutorial)
		{
			if(!twist && dotwisted)
			{
			Time.timeScale = realtime;
				GUITweestBallActive(false);
				SoundFX.SendMessage("PlaySoundFX", "star4");
				diagonalTutActivate = true;
				twist=true;
			}
		}
	}

	void DiagonalKicking()
	{
		if(activateTutorial)
		{
			if(diagonalTutActivate && twist)
			{
				diagonalTutActivate = false;
				GUIDiagonalKickActive(false);
				SoundFX.SendMessage("PlaySoundFX", "star4");
				gyroTutActive = true;
				//bombTutActivate = true;
			}
		}
	}

	public void GyroUseTut()
	{
		if(activateTutorial)
		{
			if(gyroTutActive && gyrotut )
			{
				SoundFX.SendMessage("PlaySoundFX", "star4");
				gyroTutActive = false;
				GUIGyroDriverActive(false);
				bombTutActivate = true;

			}
		}
	}

	public void BombUsed()
	{
		if(activateTutorial)
		{
			if(bombTutActivate && gyrotut)
			{
				SoundFX.SendMessage("PlaySoundFX", "TutorialEnd");
				GoogleServices.SendMessage("TutorialComplete");
				bombTutActivate = false;
				DeactivateTutorial();
				PlayerPrefs.SetInt("TutorialEnd", 1);
			}
		}
	}

	void BallnewTut() //вызывается при появление нового шара к этому методу нужно привязать все части туториала после бак кик, чтобы они какждый раз происходили при новом рожденном шаре
	{
		if(activateTutorial)
		{

			if(diagonalTutActivate)
			{
				GUIDiagonalKickActive(true);
			}
				if(gyroTutActive)
				{
					GUIGyroDriverActive(true);
					EnableGyroBtn(true);
					gyrotut=true;
				}
					if(bombTutActivate)
					{
						GUIBombUserActive(true);
						EnableBombBtn(true);
					}
		}

	}


	IEnumerator SetSpeedTime (float waittime)
	{
		//yield return new WaitForEndOfFrame();//при начале туториала обнуляет скорость игрового времени 
		yield return new WaitForSeconds(5f);
		Time.timeScale =0F;
	}

	void ResetDefines()
	{
		moved = false;
		kicked = false;
		GetGift = false;
		dotwisted = false;
		twist = false;
		diagonalTutActivate = false;
		gyroTutActive = false;
		bombTutActivate = false;
		gyrotut = false;
	}
	public void ActivateTutorial() //активация туториала, первый раз автоматом, потом запись в сейвы и дальше активация только по вызову по кнопке из меню.
	{
		NewGameImmediately.DoClick();
		EnableBombBtn(false);
		EnableGyroBtn(false);
		StartCoroutine(SetSpeedTime(0f));
		EmitTutorialBox();
		activateTutorial=true;
		ResetDefines();
		GUICollectActive(true);
		DissableButtonActivate(false);
		GUIMoveBallActive(false);
		GUIKickBallActive(false);
		GUIDiagonalKickActive(false);
		GUIGyroDriverActive(false);
		GUITweestBallActive(false);
		GUIBombUserActive(false);
		DissableButtonActivate(true);
	}

	public void DeactivateTutorial()
	{
		DissableButtonActivate(false);
		activateTutorial = false;
		GUICollectActive(false);
		GUIMoveBallActive(false);
		GUIKickBallActive(false);
		GUIDiagonalKickActive(false);
		GUIGyroDriverActive(false);
		GUITweestBallActive(false);
		GUIBombUserActive(false);
		Time.timeScale = realtime;
	}
	
}
