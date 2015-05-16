using UnityEngine;
using System.Collections;
using GooglePlayGames;
public class GPGLogInOut : MonoBehaviour {
	public dfPanel OnLinePanel;
	public dfPanel OffLinePanel;
	private const float FontSizeMult = 0.05f;
	private bool mWaitingForAuth = false;
	private string mStatusText = "Ready.";
	public string userId;
	public string UserName;
	public Texture2D UserImage;
	public dfTextureSprite UserSprite;
	public dfLabel UsernameLabel;
	System.Action<bool> mAuthCallback;
	bool activate;
	// Use this for initialization
	void Awake () {
		PlayGamesPlatform.Activate();
		PlayGamesPlatform.Instance.Authenticate(mAuthCallback, true);

	}

	void FindUser()
	{
		if( Application.loadedLevel == 5 || Application.loadedLevel == 6 || Application.loadedLevel == 7)
		{
			if(UsernameLabel==null)UsernameLabel = GameObject.Find ("userNameLable").GetComponent <dfLabel>();
			UserName = Social.Active.localUser.userName;
			if(UserName!="") 
				{
					UsernameLabel.Text = "" + UserName;
				}
				else
					{UserName = "Unknown";
						UsernameLabel.Text = "" + UserName;
					}

		}
		else if(Application.loadedLevel == 1 )
		{
			if(UsernameLabel==null)UsernameLabel = GameObject.Find ("userNameLable").GetComponent <dfLabel>();
			UserName = Social.Active.localUser.userName;
			if(UserName!="") 
			{
				UsernameLabel.Text = "Wellcome " + UserName + "!";
			}
			else
			{UserName = "Unknown";
				UsernameLabel.Text = "Wellcome " + UserName + "!";
			}
		}
	
	}
	void Start()
	{
		//activate=true;
		//StartCoroutine( GetPicture());
		StartLogIn();
		FindUser();
	}
	void LateUpdate()
	{
		FindUser();
		//GetPicture();
	}

	void OnLevelWasLoaded(int level) 
	{
		if(level == 5 || level ==6 || level ==7)
		{
			StartLogIn();
			FindUser();
		}
	}

	public void StartLogIn()
	{
		if (!Social.localUser.authenticated) {
			// Authenticate
			mWaitingForAuth = true;
			mStatusText = "Authenticating...";
			Social.localUser.Authenticate((bool success) => {
				mWaitingForAuth = false; FindUser(); UserOnlineDetails();
				OnlinePanel();
				mStatusText = success ? "Successfully authenticated" : "Authentication failed.";

			});



		} 
		else{
			OfflinePanel();
		}
	}
	public void OnlinePanel()
	{
		if(Application.loadedLevel == 1)
		{
		OnLinePanel.IsEnabled = true;
		OnLinePanel.IsVisible = true;
		OffLinePanel.IsEnabled = false;
		OffLinePanel.IsVisible = false;
		}
	}
	public void OfflinePanel()
	{
		if(Application.loadedLevel == 1)
		{
		OnLinePanel.IsEnabled = false;
		OnLinePanel.IsVisible = false;
		OffLinePanel.IsEnabled = true;
		OffLinePanel.IsVisible = true;
		UsernameLabel.Text = "Wellcome Unknown User! ";
		}
	}
	public void LogInOut()
	{
		if (Social.localUser.authenticated) {
			// Sign out!
			mStatusText = "Signing out.";
			((GooglePlayGames.PlayGamesPlatform) Social.Active).SignOut();
			OfflinePanel();
		}
		else {
			// Authenticate
			mWaitingForAuth = true;
			mStatusText = "Authenticating...";
			Social.localUser.Authenticate((bool success) => {
				mWaitingForAuth = false; UserOnlineDetails();
				OnlinePanel();
				mStatusText = success ? "Successfully authenticated" : "Authentication failed.";
				
			});
		}
	}
	void UserOnlineDetails()
	{

		UserName = Social.Active.localUser.userName;
		if(Application.loadedLevel == 1)
			{
			if(UserName!="") UsernameLabel.Text = "Wellcome " + UserName + "!";
			else{UserName = "Unknown";
				UsernameLabel.Text = "Wellcome " + UserName + "!";

			} 
			}
		else if(Application.loadedLevel ==5 || Application.loadedLevel ==6 || Application.loadedLevel ==7 && UsernameLabel!=null)
				{
				if(UserName!="") UsernameLabel.Text = "" + UserName;
				else UsernameLabel.Text = "Unknown";
				}
	}

	void PostScoresGPlus()
	{
		//Social.Active.localUser.
	}

	void GetPicture()
	{
		if(activate) {
				UserImage = Social.Active.localUser.image;
				if(UserImage!=null){
					UserSprite.Texture = UserImage;
					activate=false;
			}
		}
	}
}
