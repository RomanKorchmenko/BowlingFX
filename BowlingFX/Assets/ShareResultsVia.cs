using UnityEngine;
using System.Collections;
using UnityEngine.SocialPlatforms;
using System.Collections.Generic;
using GooglePlayGames.BasicApi;
using GooglePlayGames.OurUtils;
//using Facebook.MiniJSON;
using System;
public class ShareResultsVia : MonoBehaviour {
	int scores;
		// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	//public void ShareFacebook()
	//{
		/*GameObject social;
		social = GameObject.Find ("_UserControllerFB");
		int scores;
		scores = HiScoresSharp.instance.scores;
		social.gameObject.SendMessage("GetOwnScores", scores);
		if(!FB.IsLoggedIn)social.gameObject.SendMessage("LOGINFB");
		if (FB.IsLoggedIn)
		{
			social.gameObject.SendMessage ("onBragClicked"); 
		}
		print ("Share via Facebook");
	}
	public void ShareGooglePlus()
	{
		print ("Share via G+");
	}
	public void LOGINFB()
	{
		FB.Login("email,publish_actions", LoginCallback);
	}
	void LoginCallback(FBResult result)
	{
		Util.Log("LoginCallback");
	}
*/
	// Your app’s unique identifier.
	public string AppID = "278152059028073";
	
	// The link attached to this post.
		public string Link = "https://play.google.com/store/apps/details?id=com.roman.korchmenko.BowlingFX";
	
	// The URL of a picture attached to this post. The picture must be at least 200px by 200px.
		public string Picture = "https://dl.dropboxusercontent.com/u/8519619/BFX_ico_512.png";
	
	// The name of the link attachment.
		public string Name = "Check Out my Friend,  my Scores greatness!";
	
	// The caption of the link (appears beneath the link name).
	public string Caption ;

	
	// The description of the link (appears beneath the link caption). 
	public string Description = "https://play.google.com/store/apps/details?id=com.roman.korchmenko.BowlingFX";
	
	
public	void ShareScoreOnFB(){
		scores = HiScoresSharp.instance.scores;
		Caption = "I just Get a Score " + scores + "!" + " Friends! Can you beat it? " + "https://play.google.com/store/apps/details?id=com.roman.korchmenko.BowlingFX";
		Application.OpenURL("https://www.facebook.com/dialog/feed?"+
		                    "app_id="+AppID+
		                    "&link="+Link+
		                    "&picture="+Picture+
		                    "&name="+ReplaceSpace(Name)+
		                    "&caption="+ReplaceSpace(Caption)+
		                    "&description="+ReplaceSpace(Description)+
		                    "&redirect_uri=https://facebook.com/");
	}
	
	string ReplaceSpace (string val) {
		return val.Replace(" ", "%20");	
	}
	public void ShareScoresGooglePlus()
	{
		scores = HiScoresSharp.instance.scores;
		Caption = "I just Get a Score " + scores + "!" + " Friends! Can you beat it?";
		Application.OpenURL("https://plusone.google.com/_/+1/confirm?hl=en&url=+location");
	}
}
