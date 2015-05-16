using UnityEngine;
using System.Collections;
using GooglePlayGames;
using GooglePlayGames.BasicApi.Multiplayer;
public class MultyPlayerBtns : MonoBehaviour {
	Invitation invitation;
	static TurnBasedMultyPlayer sInstance = null;
	// Use this for initialization
	void Start () {
		PlayGamesPlatform.Activate();
		GetFriendsBtn();
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	public void GetFriendsBtn()
	{
		sInstance = new TurnBasedMultyPlayer();
		PlayGamesPlatform.Instance.TurnBased.CreateWithInvitationScreen(1, 1, 0, OnMatchStarted);
		//TurnBasedMultyPlayer.Instance.GetFriends();
	}
	public void AcceptIvitate()
	{
		sInstance = new TurnBasedMultyPlayer();
		PlayGamesPlatform.Instance.TurnBased.AcceptInvitation(invitation.InvitationId, OnMatchStarted);
		//PlayGamesPlatform.Instance.TurnBased.AcceptFromInbox( OnMatchStarted);
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
