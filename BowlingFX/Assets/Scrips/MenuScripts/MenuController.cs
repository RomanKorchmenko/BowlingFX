using UnityEngine;
using System.Collections;

public class MenuController : MonoBehaviour {
	public string pauseOff = "Btn1_inactive_sliced";
	public string pauseOn = "Btn1_active_sliced";
	public dfButton pauseButton;
	public string Selector;
	public GameObject prefab;
	public GameObject tutorial;
	//1 pause panel
	public bool changerTop;
	public dfPanel TopPanel;
	public dfTweenComponentBase topTweenOn;
	public dfTweenComponentBase topTweenOff;
	//2 statistic panel
	public dfPanel StatisticPanel;
	
	public dfTweenComponentBase GameElementsOff;
	public dfTweenComponentBase GameElementsOn;

	//4 Options Panel
	public  bool changerOption;
	public dfPanel OptionPanel;
	public dfTweenComponentBase optionTweenOn;
	public dfTweenComponentBase optionTweenOff;

	//5 Settings Panel
	public dfPanel SettingsPanel;

	// 6 Tutorial Panel
	//public dfPanel TutorialPanel;

	// 7 Quality Settings panel
	public dfPanel QualityPanel;
	// 8 Sounds Panel
	public dfPanel SoundsPanel;
	// 9 About Panel
	public dfPanel AboutPanel;

	//10 Restart Panel
	public dfPanel RestartPanel;

	// 11 Scoreboard Panel
	public dfPanel ScoreboardPanel;
	public dfPanel LocalScoresPanel;
	public dfPanel ResetScoresPanel;

	// 12 GoToselectorPanel
	public dfPanel GoToSelectorPanel;
	// Use this for initialization
	void Start () {
		OptionOff();
		SettingsOff();
		ScoreboardPanelOff();
		SoundSettingPanelOff();
		AboutPanelOff();
		GoToSelectorPanelOff();
		QualityPanelOff();
		RestartPanelOff();
		LocalScoresOff();
		ResetLocalScoresOff();

	}

	void RequestInterstitial()
	{
		if(Application.platform == RuntimePlatform.Android)GoogleMobileAdsManager.Instance.RequestOwnInterstitial();
	}

	public void TopPanelMenu()
	{ 
		if (!changerTop && !topTweenOff.IsPlaying && !topTweenOn.IsPlaying) {

				PauseOn();	
				GameElementsOff.Play();
			pauseButton.BackgroundSprite = pauseOn;
			pauseButton.FocusSprite = pauseOn;
if(Application.platform==RuntimePlatform.Android) GoogleMobileAdsManager.Instance.ShowAdmobInterstitial();
			Invoke("RequestInterstitial", 2f);
		}
		else if(changerTop && !topTweenOff.IsPlaying && !topTweenOn.IsPlaying)
		{
				PauseOff();
				OptionOff();
				AboutPanelOff();
				GoToSelectorPanelOff();
				QualityPanelOff();
				RestartPanelOff();
				ScoreboardPanelOff();
				SettingsOff();
				SoundSettingPanelOff();
				//TutorialPanelOff();
				GameElementsOn.Play ();
				LocalScoresOff();
				ResetLocalScoresOff();
			pauseButton.BackgroundSprite =pauseOff;
			pauseButton.FocusSprite =pauseOff;

		}
	}
	public void OptionMenu()
	{
		if (!changerOption) {
				OptionOn();
			RestartPanelOff();
			SettingsOff();
			//OptionOff();
			ScoreboardPanelOff();
			AboutPanelOff();
			GoToSelectorPanelOff();
			QualityPanelOff();
		}
		else if(changerOption)
		{
			OptionOff();
		}
	}
	public void BackFromOptionToTop()
	{
		OptionOff ();
	}
	public void SettingMenu()
	{
		SettingsOn();
		OptionOff();
	}	
	public void BackFromSettingMenuToOption()
	{
		SettingsOff();
		OptionOn();
	}

	public void TutorialMenu()
	{
		OptionOff();
		TutorialPanelOn();
	}


	public void BackFromTutorialToOption()
	{
		TutorialPanelOff();
		OptionOn();
	}
	public void HightScoresMenu()
	{
		OptionOff();
		ScoreboardPanelOn();
	}
	public void BackFromHightScoresMenuToOptions()
	{
		OptionOn();
		ScoreboardPanelOff();

	}

	public void RestartMenu()
	{
		RestartPanelOn();
		SettingsOff();
		OptionOff();
		ScoreboardPanelOff();
		AboutPanelOff();
		GoToSelectorPanelOff();
		QualityPanelOff();
	}


	public void BackFromRestartToTopMenu()
	{
		RestartPanelOff();

	}

	public void AboutMenu()
	{
		SettingsOff();
		AboutPanelOn();

	}
	public void BackFromAboutToSetting()
	{
		AboutPanelOff();
		SettingsOn();
	}

	public void QualityMenu()
	{
		SettingsOff();
		QualityPanellOn();
	}

	public void BackFromQualityToSettings()
	{
		QualityPanelOff();
		SettingsOn();
	}

	public void SoundMunu()
	{
		SoundSettingPanelOn();
		SettingsOff();
	}
	public void BackFromSoundToSettings()
	{
		SoundSettingPanelOff();
		SettingsOn();
	}
	public void ToSelectorMenu()
	{
		OptionOff();
		GoToSelectorPanelOn();
	}
	public void BackFromToSelectorToOptions()
	{
		GoToSelectorPanelOff();
		OptionOn();
	}

	public void LoadSelector()
	{
		Application.LoadLevel (Selector);
	}
	void OnLevelWasLoaded(int level)
	{
		var ownlevel = Application.loadedLevelName;
		print (ownlevel);
		GoogleAnalyticsV3.instance.LogScreen(ownlevel);
		GoogleAnalyticsV3.instance.LogEvent("level", "loaded", ownlevel, 0);
	}
	public void LocalScoresMenu()
	{
		LocalScoresOn();
		ScoreboardPanelOff();
	}
	public void BackFromLocalScoresToScores()
	{
		LocalScoresOff();
		ScoreboardPanelOn();
	}
	public void ResetLocalScoresMenu()
	{
		LocalScoresOff();
		ResetLocalScoresOn();
	}
	public void BackFromResetLocalToLocalScores()
	{
		ResetLocalScoresOff();
		LocalScoresOn();
	}
	public void TimePause()
	{
		pauseButton.DoClick();
	}

	// End public void section
	//void section
	void OptionOff()
	{
		OptionPanel.IsEnabled = false;
		OptionPanel.IsVisible = false;
		//optionTweenOff.Play();
		changerOption = false;
	}
	void OptionOn()
	{
		OptionPanel.IsEnabled = true;
		OptionPanel.IsVisible = true;
		//optionTweenOff.Play();
		changerOption = true;
	}
	void PauseOn()
	{
		topTweenOn.Play();
//		StatisticOff();
		changerTop = true;
	}
	void PauseOff()	{
		//TopPanel.IsEnabled=false;
		//TopPanel.IsVisible = false;
		topTweenOff.Play();
		//StatisticOn();
		changerTop = false;
	}

	void SettingsOn()
	{
		SettingsPanel.IsEnabled = true;
		SettingsPanel.IsVisible = true;
	}
	void SettingsOff()
	{
		SettingsPanel.IsEnabled = false;
		SettingsPanel.IsVisible = false;
	}

	void TutorialPanelOn()
	{
		tutorial = (GameObject)Instantiate(prefab, GameObject.Find("UI Root").transform.position, transform.rotation );
		tutorial.transform.parent = GameObject.Find("UI Root").transform;
		dfPanel panel;
		panel = tutorial.GetComponent<dfPanel>();
		panel.BringToFront();
		//TutorialPanel.IsEnabled = true;
		//TutorialPanel.IsVisible = true;
	}

	void TutorialPanelOff()
	{
		OptionMenu();
		Destroy(tutorial);

		//print ("Destroy tutorial");
		//TutorialPanel.IsEnabled = false;
		//TutorialPanel.IsVisible = false;
	}

	void QualityPanellOn()
	{
		QualityPanel.IsEnabled = true;
		QualityPanel.IsVisible = true;
	}

	void QualityPanelOff()
	{
		QualityPanel.IsEnabled = false;
		QualityPanel.IsVisible = false;
	}

	void SoundSettingPanelOn()
	{
		SoundsPanel.IsEnabled = true;
		SoundsPanel.IsVisible = true;
	}

	void SoundSettingPanelOff()
	{
		SoundsPanel.IsEnabled = false;
		SoundsPanel.IsVisible = false;
	}

	void AboutPanelOn()
	{
		AboutPanel.IsVisible = true;
		AboutPanel.IsEnabled = true;
	}
	void AboutPanelOff()
	{
		AboutPanel.IsEnabled = false;
		AboutPanel.IsVisible = false;
	}

	void RestartPanelOn()
	{
		RestartPanel.IsEnabled = true;
		RestartPanel.IsVisible = true;
	}
	public void RestartPanelOff()
	{
		RestartPanel.IsEnabled = false;
		RestartPanel.IsVisible = false;
	}

	void ScoreboardPanelOn()
	{
		ScoreboardPanel.IsEnabled = true;
		ScoreboardPanel.IsVisible = true;
	}

	void ScoreboardPanelOff()
	{
		ScoreboardPanel.IsEnabled = false;
		ScoreboardPanel.IsVisible = false;
	}

	void GoToSelectorPanelOn()
	{
		GoToSelectorPanel.IsVisible = true;
		GoToSelectorPanel.IsEnabled = true;
	}
	void GoToSelectorPanelOff()
	{
		GoToSelectorPanel.IsVisible = false;
		GoToSelectorPanel.IsEnabled = false;
	}

	void LocalScoresOn()
	{
		LocalScoresPanel.IsEnabled = true;
		LocalScoresPanel.IsVisible = true;
	}
	void LocalScoresOff()
	{
		LocalScoresPanel.IsEnabled = false;
		LocalScoresPanel.IsVisible = false;
	}
	void ResetLocalScoresOn()
	{
		ResetScoresPanel.IsVisible = true;
		ResetScoresPanel.IsEnabled = true;
	}
	void ResetLocalScoresOff()
	{
		ResetScoresPanel.IsVisible = false;
		ResetScoresPanel.IsEnabled = false;
	}
	void FinalScore()
	{
		ScoreboardPanelOn();
	}
//	void StatisticOff()
//	{
//		//StatisticPanel.IsEnabled = false;
//		StatisticPanel.IsVisible = false;
//	}
//	void StatisticOn()
//	{
//		//StatisticPanel.IsEnabled = true;
//		StatisticPanel.IsVisible = true;
//	}
}
