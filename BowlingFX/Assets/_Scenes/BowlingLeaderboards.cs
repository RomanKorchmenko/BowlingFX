using UnityEngine;
using System.Collections;
using GooglePlayGames;
using GooglePlayGames.BasicApi.Multiplayer;
using System.Collections.Generic;
public class BowlingLeaderboards : MonoBehaviour
{
	public string ScoreLeaderboardId = "";
//	public string TimeLeaderboardId = "";
//	public string MoneyLeaderboardId = "";
	void Awake()
	{
		GooglePlayGames.PlayGamesPlatform.Activate();
	}
	void Start()
	{
		//Ugs.Config.AppStateEnabled = false;
		//Ugs.Config.GamesEnabled = true;
		
		//InitConnectionCallbacks();
		//Ugs.Client.Connect();
//		Ugs.Game.OnLeaderboardsLoaded += () =>
//		{
//			Debug.Log("Leaderboards loaded:");
//			foreach(var leaderboard in Ugs.Game.Leaderboards)
//				Debug.Log("  " + leaderboard);
//		};
//		
//		Ugs.Game.OnLeaderboardsLoadingFailed += () =>
//		{
//			Debug.LogWarning("Leaderboards loading failed");
//		};
//		
//		Ugs.Game.OnLeaderboardScoresLoaded += (leaderboard) =>
//		{
//			Debug.Log("Leaderboard Scores loaded for " + leaderboard.DisplayName +
//			          " [" + leaderboard.Data.Span + ", " + leaderboard.Data.Collection + "]");
//			foreach(var score in leaderboard.Data.Scores)
//				Debug.Log("  [" + score.Rank + "] " + score.ScoreHolderName + " - " + score.Score);
//		};
//		
//		Ugs.Game.OnLeaderboardScoresLoadingFailed += () =>
//		{
//			Debug.LogWarning("Leaderboard scores loading failed");
//		};
	}
	
	public void ShowAllLeaderboard()
	{
		//Ugs.Game.ShowLeaderboard(ScoreLeaderboardId);
		GooglePlayGames.PlayGamesPlatform.Instance.ShowLeaderboardUI(ScoreLeaderboardId);

	}
	
	void SubmitScores(long scores)
	{
		Social.ReportScore(scores, ScoreLeaderboardId, (bool success) => {
			// handle success or failure
		});
		//Ugs.Game.SubmitScore(ScoreLeaderboardId, scores);
	}
	/*
	void OnGUI()
	{
		GUILayout.BeginArea(new Rect(10, 10, Screen.width - 20, Screen.height - 20));
		GUI.skin.button.fixedHeight = (Screen.height - 20) / 10;
		GUI.skin.button.fixedWidth = Screen.width - 20;
			
		if (!Ugs.Game.IsConnected)
		{
			if (GUILayout.Button("Connect"))
			{
				Ugs.Game.Connect();
			}
			
			if (GUILayout.Button("Sign In"))
			{
				Ugs.Game.SignIn();
			}
		}
		else
		{
			if (GUILayout.Button("Load Leaderboards"))
			{
				Ugs.Game.LoadLeaderboards();
			}
			
			if (GUILayout.Button("Show All Leaderboards"))
			{
				Ugs.Game.ShowLeaderboards();
			}
			
			GUI.skin.button.fixedWidth = (Screen.width - 20) / 3 - 3;
			
			if (ScoreLeaderboardId != "")
			{
				GUILayout.BeginHorizontal();
			
				if (GUILayout.Button("Submit Score"))
				{
					long score = 1 + (long)(100.0f / Random.Range(0.01f, 100.0f));
					Debug.Log("Submitting score: " + score);
					Ugs.Game.SubmitScore(ScoreLeaderboardId, score);
				}
				if (GUILayout.Button("Show"))
				{
					Ugs.Game.ShowLeaderboard(ScoreLeaderboardId);
				}
				if (GUILayout.Button("Load Top"))
				{
					Ugs.Game.LoadScores(ScoreLeaderboardId,
						Ugs.LeaderboardSpan.Weekly,
						Ugs.LeaderboardCollection.Public,
						Ugs.LeaderboardSeed.Top);
				}
			
				GUILayout.EndHorizontal();
			}
			
			if (TimeLeaderboardId != "")
			{
				GUILayout.BeginHorizontal();
				
				if (GUILayout.Button("Submit Time"))
				{
					long time = (long)Mathf.Sqrt(Random.Range(0.001f, 100.0f)) * 10000;
					Debug.Log("Submitting time: " + time);
					Ugs.Game.SubmitScore(TimeLeaderboardId, time);
				}
				if (GUILayout.Button("Show"))
				{
					Ugs.Game.ShowLeaderboard(TimeLeaderboardId);
				}
				if (GUILayout.Button("Load Top"))
				{
					Ugs.Game.LoadScores(TimeLeaderboardId,
						Ugs.LeaderboardSpan.Weekly,
						Ugs.LeaderboardCollection.Public,
						Ugs.LeaderboardSeed.Top);
				}
				
				GUILayout.EndHorizontal();
			}
			
			
			if (MoneyLeaderboardId != "")
			{
				GUILayout.BeginHorizontal();
			
				if (GUILayout.Button("Submit Money"))
				{
					long money = 1 + (long)(100.0f / Random.Range(0.01f, 100.0f)) * 1000000;
					Debug.Log("Submitting money: " + money);
					Ugs.Game.SubmitScore(MoneyLeaderboardId, money);
				}
				if (GUILayout.Button("Show"))
				{
					Ugs.Game.ShowLeaderboard(MoneyLeaderboardId);
				}
				if (GUILayout.Button("Load Top"))
				{
					Ugs.Game.LoadScores(MoneyLeaderboardId,
						Ugs.LeaderboardSpan.Weekly,
						Ugs.LeaderboardCollection.Public,
						Ugs.LeaderboardSeed.Top);
				}
			
				GUILayout.EndHorizontal();
			}
			
			GUI.skin.button.fixedWidth = Screen.width - 20;
			
			if (GUILayout.Button("Disconnect"))
			{
				Ugs.Game.Disconnect();
			}
			
			if (GUILayout.Button("Sign Out"))
			{
				Ugs.Game.SignOut();
			}
		}
		
		if (GUILayout.Button("Exit"))
		{
			Application.Quit();
		}
		
		GUILayout.EndArea();
	}*/

	public void LogIn()
	{
		//Ugs.Client.SignIn();
	}
}
