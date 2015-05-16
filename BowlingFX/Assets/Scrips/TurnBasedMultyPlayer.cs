using UnityEngine;
using System.Collections;
using GooglePlayGames;
using GooglePlayGames.BasicApi.Multiplayer;
using System.Collections.Generic;
using System;

public class TurnBasedMultyPlayer : RealTimeMultiplayerListener {
	const int MinOpponents = 1;
	const int MaxOpponents = 1;
	const int Variant = 0;  // default
	static TurnBasedMultyPlayer sInstance = null;
	const float FakeProgressSpeed = 1.0f;
	const float MaxFakeProgress = 30.0f;
	float mRoomSetupStartTime = 0.0f;
	private string mMyParticipantId = "";
	private float mRoomSetupProgress = 0.0f;
	// Use this for initialization
	void Start () {
		PlayGamesPlatform.Activate();
		Social.localUser.Authenticate((bool success) => {
			// Код, выполняемый после удачной или неудачной попытки.

		});
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	public void GetFriends()
	{
		sInstance = new TurnBasedMultyPlayer();
		PlayGamesPlatform.Instance.TurnBased.CreateWithInvitationScreen(MinOpponents, MaxOpponents,Variant, OnMatchStarted);
		//PlayGamesPlatform.Instance.TurnBased.CreateQuickMatch (minPlayers, maxPlayers, variant, OnMatchStarted);
	}
	

	public void AcceptInvitation(string invitationId) {
		sInstance = new TurnBasedMultyPlayer();
		PlayGamesPlatform.Instance.RealTime.AcceptInvitation(invitationId, sInstance);
	}
	public void AcceptFromInbox() {
		sInstance = new TurnBasedMultyPlayer();
		PlayGamesPlatform.Instance.TurnBased.AcceptFromInbox( OnMatchStarted);
		//PlayGamesPlatform.Instance.RealTime.AcceptFromInbox(sInstance);
	}
	public static TurnBasedMultyPlayer Instance {
		get {
			return sInstance;
		}
	}

	
	/*public float RoomSetupProgress {
		get {
			float fakeProgress = (Time.time - mRoomSetupStartTime) * FakeProgressSpeed;
			if (fakeProgress > MaxFakeProgress) {
				fakeProgress = MaxFakeProgress;
			}
			//float progress = mRoomSetupProgress + fakeProgress;
			//return progress < 99.0f ? progress : 99.0f;
		}
	}*/
	public void OnRoomConnected(bool success) {
		if (success) {
//		Print("RoomConnected is " + success);
			//mRaceState = RaceState.Playing;
			mMyParticipantId = GetSelf().ParticipantId;
			//SetupTrack();
		}/* else {
//		Print("RoomConnected is " + success);
			//mRaceState = RaceState.SetupFailed;
		}*/
	}
	
	public void OnLeftRoom() {
		//if (mRaceState != RaceState.Finished) {
			//mRaceState = RaceState.Aborted;
		//}
	}
	
	public void OnPeersConnected(string[] peers) {
	}
	
	public void OnPeersDisconnected(string[] peers) {
		foreach (string peer in peers) {
			// if this peer has left and hasn't finished the race,
			// consider them to have abandoned the race (0 score!)
			//mGotFinalScore.Add(peer);
			//mRacerScore[peer] = 0;
			//RemoveCarFor(peer);
		}
		
		// if, as a result, we are the only player in the race, it's over
		//List<Participant> racers = GetRacers();
		//if (mRaceState == RaceState.Playing && (racers == null || racers.Count < 2)) {
			//mRaceState = RaceState.Aborted;
		//}
	}
		private Participant GetSelf() {
			return PlayGamesPlatform.Instance.RealTime.GetSelf();
		}
	public void OnRoomSetupProgress(float percent) {
		mRoomSetupProgress = percent;
	}
	public void OnRealTimeMessageReceived(bool isReliable, string senderId, byte[] data) {
		int score = (int)data[1];
		
		//if (data[0] == (byte)'I') 
		//{
			// interim score update
			//mRacerScore[senderId] = score;
		//} 
		//else if (data[0] == (byte)'F') 
		//{
			// finish notification
			//if (!mGotFinalScore.Contains(senderId)) {
				// record final score
				//mRacerScore[senderId] = score;
				//mGotFinalScore.Add(senderId);
				//UpdateMyRank();
				
				// finish race too, if we haven't yet
//				if (mRaceState == RaceState.Playing) {
//					FinishRace();
//				}
//			} else {
//				Debug.LogWarning("Received duplicate finish notification for " + senderId);
//			}
		//}
	}
	void OnMatchStarted(bool success, TurnBasedMatch match) {
		if (success) {
			// get the match data
			byte[] myData = match.Data;
			
			// I can only make a move if the match is active and it's my turn!
//			bool canPlay = (mMatch.Status == TurnBasedMatch.MatchStatus.Active &&
//			                mMatch.TurnStatus == TurnBasedMatch.MatchTurnStatus.MyTurn);
			
			// Deserialize game state from myData into scene and
			// go to gameplay screen. If canPlay == true, let user play a move; 
			// if not, they can only see the current state of the game but can't play.
		} else {
			// show error message, return to main menu
		}
	}
}