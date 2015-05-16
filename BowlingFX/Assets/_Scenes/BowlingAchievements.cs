using UnityEngine;
using System.Collections;
using GooglePlayGames;
using GooglePlayGames.BasicApi.Multiplayer;
using System.Collections.Generic;
using UnityEngine.SocialPlatforms;
public class BowlingAchievements : MonoBehaviour
{
	private const float FontSizeMult = 0.05f;
	private bool mWaitingForAuth = false;
	private string mStatusText = "Ready.";
	public string TutorialAchievementId = ""; //regular
	// Curve (Ball trick)
	public string FirstBallCurveAchievementId = ""; //regular
	public string BallCurveRecruitAchievementId = ""; //Incremental
	public string BallCurveOfficerlAchievementId = ""; //Incremental
	public string BallCurveGeneralAchievementId = ""; //Incremental
	//strike
	public string FirstStrikeSubmitAchivementId = ""; //regular
	public string StrikerRecruitAchievementId = ""; //Incremental//-----------------
	public string StrikerOfficerAchievementId = ""; //Incremental--------------------
	public string StrikerGeneralAchievementId = ""; //Incremental-------------------
	//spare
	public string FirstSpareSubmitAchivementId = ""; //regular
	public string SpareRecruitAchievementId = ""; //Incremental---------------
	public string SpareOfficerAchievementId = ""; //Incremental---------------
	public string SpareGeneralAchievementId = ""; //Incremental---------------
	//game
	public string FirstGameSubmitAchivementId = ""; //regular
	public string GameRecruitAchievementId = ""; //Incremental
	public string GameOfficerAchievementId = ""; //Incremental
	public string GameGeneralAchievementId = ""; //Incremental
	// blinde Sniper (lose ball)
	public string FirstBlindeSniperAchievementId = "";
	public string BSniperRecruitAchievementId = ""; //Incremental
	public string BSniperOfficerAchievementId = ""; //Incremental
	public string BSniperGeneralAchievementId = ""; //Incremental
	//split
	public string FirstSplitSubmitAchivementId = ""; //regular
	public string SplitRecruitAchievementId = ""; //Incremental
	public string SplitOfficerAchievementId = ""; //Incremental
	public string SplitGeneralAchievementId = ""; //Incremental	
	//multystrike
	public string FirstMultyStrikeSubmitAchivementId = ""; //regular
	public string MultyStrikeRecruitAchievementId = ""; //Incremental
	public string MultyStrikeOfficerAchievementId = ""; //Incremental
	public string MultyStrikeGeneralAchievementId = ""; //Incremental
	//bowling master 200scores
	public string HanamiMasterAchievementId = ""; //hiden
	public string SciFiMasterAchievementId = ""; //hiden
	public string SteamPunkMasterAchievementId = ""; //hiden
		//300 scores
	public string AmazingHanamiMasterAchievementId = ""; //hiden
	public string AmazingSciFiMasterAchievementId = ""; //hiden
	public string AmazingSteamPunkMasterAchievementId = ""; //hiden
	//master
	public string BowlingMasterAchievementId = ""; //hiden
	
	//awesome
	public string AwesomeBowlingGodAchievementId = ""; //hiden
	
	void Start(){
		GooglePlayGames.PlayGamesPlatform.Activate();
	}
	public void ShowAchievements()
	{
		GooglePlayGames.PlayGamesPlatform.Instance.ShowAchievementsUI();
		//		Ugs.Game.ShowAchievements();
	}
	void FirstSpareSubmitAchivement()
	{
//		Ugs.Game.UnlockAchievement(FirstSpareSubmitAchivementId);
//		Ugs.Game.IncrementAchievement(SpareRecruitAchievementId, 1); // incrimental
//		Ugs.Game.IncrementAchievement(SpareOfficerAchievementId, 1); // incrimental
//		Ugs.Game.IncrementAchievement(SpareGeneralAchievementId, 1); // incrimental
		Social.ReportProgress(FirstSpareSubmitAchivementId, 100.0f, (bool success) => {
			// handle success or failure
		});
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			SpareRecruitAchievementId, 1, (bool success) => {
			// handle success or failure
		});
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			SpareOfficerAchievementId, 1, (bool success) => {
			// handle success or failure
		});
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			SpareGeneralAchievementId, 1, (bool success) => {
			// handle success or failure
		});
	}
	
	void FirstStrikeSubmitAchivement()
	{
//		Ugs.Game.UnlockAchievement(FirstStrikeSubmitAchivementId);
		Social.ReportProgress(FirstStrikeSubmitAchivementId, 100.0f, (bool success) => {
			// handle success or failure
		});
//		Ugs.Game.IncrementAchievement(StrikerRecruitAchievementId, 1);// incrimental
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			StrikerRecruitAchievementId, 1, (bool success) => {
			// handle success or failure
		});
//		Ugs.Game.IncrementAchievement(StrikerOfficerAchievementId, 1);// incrimental
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			StrikerOfficerAchievementId, 1, (bool success) => {
			// handle success or failure
		});
//		Ugs.Game.IncrementAchievement(StrikerGeneralAchievementId, 1);// incrimental
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			StrikerGeneralAchievementId, 1, (bool success) => {
			// handle success or failure
		});

	}
	
	void FirstGameSubmitAchivement()
	{
//		Ugs.Game.UnlockAchievement(FirstGameSubmitAchivementId);
		Social.ReportProgress(FirstGameSubmitAchivementId, 100.0f, (bool success) => {
			// handle success or failure
		});
//		Ugs.Game.IncrementAchievement(GameRecruitAchievementId, 1);// incrimental
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			GameRecruitAchievementId, 1, (bool success) => {
			// handle success or failure
		});
//		Ugs.Game.IncrementAchievement(GameOfficerAchievementId, 1);// incrimental
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			GameOfficerAchievementId, 1, (bool success) => {
			// handle success or failure
		});
//		Ugs.Game.IncrementAchievement(GameGeneralAchievementId, 1);// incrimental
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			GameGeneralAchievementId, 1, (bool success) => {
			// handle success or failure
		});
	}
	
	void BlindeSniperAchievement()
	{
//		Ugs.Game.UnlockAchievement(FirstBlindeSniperAchievementId);
		Social.ReportProgress(FirstBlindeSniperAchievementId, 100.0f, (bool success) => {
			// handle success or failure
		});
//		Ugs.Game.IncrementAchievement(BSniperRecruitAchievementId, 1);// incrimental
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			BSniperRecruitAchievementId, 1, (bool success) => {
			// handle success or failure
		});
//		Ugs.Game.IncrementAchievement(BSniperOfficerAchievementId, 1);// incrimental
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			BSniperOfficerAchievementId, 1, (bool success) => {
			// handle success or failure
		});
//		Ugs.Game.IncrementAchievement(BSniperGeneralAchievementId, 1);// incrimental
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			BSniperGeneralAchievementId, 1, (bool success) => {
			// handle success or failure
		});
	}
	
	void BallCurveAchievement()
	{
//		Ugs.Game.IncrementAchievement(BallCurveRecruitAchievementId, 1);// incrimental
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			BallCurveRecruitAchievementId, 1, (bool success) => {
			// handle success or failure
		});
//		Ugs.Game.IncrementAchievement(BallCurveOfficerlAchievementId, 1);// incrimental
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			BallCurveOfficerlAchievementId, 1, (bool success) => {
			// handle success or failure
		});
//		Ugs.Game.IncrementAchievement(BallCurveGeneralAchievementId, 1);// incrimental
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			BallCurveGeneralAchievementId, 1, (bool success) => {
			// handle success or failure
		});
//		Ugs.Game.UnlockAchievement(FirstBallCurveAchievementId);
		Social.ReportProgress(FirstBallCurveAchievementId, 100.0f, (bool success) => {
			// handle success or failure
		});
	}
	
	void SplitAchievement()
	{
//	Ugs.Game.UnlockAchievement(FirstSplitSubmitAchivementId);
		Social.ReportProgress(FirstSplitSubmitAchivementId, 100.0f, (bool success) => {
			// handle success or failure
		});
//	Ugs.Game.IncrementAchievement(SplitRecruitAchievementId, 1);// incrimental
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			SplitRecruitAchievementId, 1, (bool success) => {
			// handle success or failure
		});
//	Ugs.Game.IncrementAchievement(SplitOfficerAchievementId, 1);// incrimental
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			SplitOfficerAchievementId, 1, (bool success) => {
			// handle success or failure
		});
//	Ugs.Game.IncrementAchievement(SplitGeneralAchievementId, 1);// incrimental
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			SplitGeneralAchievementId, 1, (bool success) => {
			// handle success or failure
		});
	}
	
	void MultyStrikeAchievement()
	{
//		Ugs.Game.UnlockAchievement(FirstMultyStrikeSubmitAchivementId); // first multystrike
		Social.ReportProgress(FirstMultyStrikeSubmitAchivementId, 100.0f, (bool success) => {
			// handle success or failure
		});
//	Ugs.Game.IncrementAchievement(MultyStrikeRecruitAchievementId, 1);// incrimental
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			MultyStrikeRecruitAchievementId, 1, (bool success) => {
			// handle success or failure
		});
//	Ugs.Game.IncrementAchievement(MultyStrikeOfficerAchievementId, 1);// incrimental
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			MultyStrikeOfficerAchievementId, 1, (bool success) => {
			// handle success or failure
		});
//	Ugs.Game.IncrementAchievement(MultyStrikeGeneralAchievementId, 1);// incrimental
		((PlayGamesPlatform) Social.Active).IncrementAchievement(
			MultyStrikeGeneralAchievementId, 1, (bool success) => {
			// handle success or failure
		});
	}
	
	void HanamiMaster()
	{
//		Ugs.Game.RevealAchievement(HanamiMasterAchievementId); //unhide
//		Ugs.Game.UnlockAchievement(HanamiMasterAchievementId); // заработал в ханами 200 очков
		Social.ReportProgress(HanamiMasterAchievementId, 100.0f, (bool success) => {
			// handle success or failure
		});
//		Ugs.Game.RevealAchievement(BowlingMasterAchievementId); //unhide
		Social.ReportProgress(BowlingMasterAchievementId, 100.0f, (bool success) => {
			// handle success or failure
		});
	}
	
		void SciFiMaster()
	{
//		Ugs.Game.RevealAchievement(SciFiMasterAchievementId); //unhide
//		Ugs.Game.UnlockAchievement(SciFiMasterAchievementId); // заработал в scifi 200 очков
		Social.ReportProgress(SciFiMasterAchievementId, 100.0f, (bool success) => {
			// handle success or failure
		});
//		Ugs.Game.RevealAchievement(BowlingMasterAchievementId); //unhide
		Social.ReportProgress(BowlingMasterAchievementId, 100.0f, (bool success) => {
			// handle success or failure
		});
	}
	
		
		void SteamPunkMaster()
	{
//		Ugs.Game.RevealAchievement(AmazingSteamPunkMasterAchievementId); //unhide
		Social.ReportProgress(AmazingSteamPunkMasterAchievementId, 100.0f, (bool success) => {
			// handle success or failure
		});
//		Ugs.Game.UnlockAchievement(AmazingSteamPunkMasterAchievementId); // заработал в steampunk 200 очков
//		Ugs.Game.RevealAchievement(BowlingMasterAchievementId); //unhide
		Social.ReportProgress(BowlingMasterAchievementId, 100.0f, (bool success) => {
			// handle success or failure
		});
	}
	
	void AmazingHanamiMaster()
	{
//		Ugs.Game.RevealAchievement(AmazingHanamiMasterAchievementId); //unhide
		Social.ReportProgress(AmazingHanamiMasterAchievementId, 100.0f, (bool success) => {
			// handle success or failure
		});
//		Ugs.Game.UnlockAchievement(AmazingHanamiMasterAchievementId); // заработал в hanami 300 очков
	}
	
		void AmazingSciFiMaster()
	{
//		Ugs.Game.RevealAchievement(AmazingSciFiMasterAchievementId); //unhide
		Social.ReportProgress(AmazingSciFiMasterAchievementId, 100.0f, (bool success) => {
			// handle success or failure
		});
//		Ugs.Game.UnlockAchievement(AmazingSciFiMasterAchievementId); // заработал в scifi 300 очков
	}
	
	
	void AmazingSteamPunkMaster()
	{
//		Ugs.Game.RevealAchievement(AmazingSteamPunkMasterAchievementId); //unhide
		Social.ReportProgress(AmazingSteamPunkMasterAchievementId, 100.0f, (bool success) => {
			// handle success or failure
		});

	}
	
	void AwesomeBowlingGod()
	{
		
		//Ugs.Game.UnlockAchievement(AwesomeBowlingGodAchievementId); // заработал в 3 столах по 300 очков
		Social.ReportProgress(AwesomeBowlingGodAchievementId, 100.0f, (bool success) => {
			// handle success or failure
		});
	}
	
	void BowlingMaster()
	{
		
		//Ugs.Game.UnlockAchievement(BowlingMasterAchievementId); // заработал в 3х столах 200 очков
		Social.ReportProgress(BowlingMasterAchievementId, 100.0f, (bool success) => {
			// handle success or failure
		});
	}

	void TutorialComplete()
	{
		Social.ReportProgress(TutorialAchievementId, 100.0f, (bool success) => {
			// handle success or failure
		});
	}
}
	 