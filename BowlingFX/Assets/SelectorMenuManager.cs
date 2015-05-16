using UnityEngine;
using System.Collections;

public class SelectorMenuManager : MonoBehaviour {
	public dfPanel ChoicePlayerPanel;
	public dfPanel ControlPanel;
	public dfPanel LevelChoicer;
	public dfPanel FBPanel;
	public dfPanel StorePanel;
	// Use this for initialization
	void Start () {
		DeactivateChoicePlayerPanel();
		#if UNITY_STANDALONE_WIN
		Debug.Log("Stand Alone Windows");
		FBPanelInactive();
		#endif
		#if UNITY_EDITOR || UNITY_ANDROID
		//FBPanelActive();
		#endif

	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void FBPanelInactive()
	{
		FBPanel.IsEnabled = false;
		FBPanel.IsVisible = false;
	}

	void FBPanelActive()
	{
		FBPanel.IsEnabled = true;
		FBPanel.IsVisible = true;
	}
	public void ActivateChoicePlayerPanel()
	{
		ChoicePlayerPanel.IsVisible = true;
		ChoicePlayerPanel.IsEnabled =  true;
		ControlPanel.IsEnabled=false;
		ControlPanel.IsVisible = false;
		LevelChoicer.IsEnabled = false;
		LevelChoicer.IsVisible = false;
	}
	public void DeactivateChoicePlayerPanel()
	{
		ChoicePlayerPanel.IsVisible = false;
		ChoicePlayerPanel.IsEnabled =  false;
		ControlPanel.IsEnabled=true;
		ControlPanel.IsVisible = true;
		LevelChoicer.IsEnabled = true;
		LevelChoicer.IsVisible = true;
	}
	public void StoreActivate()
	{
			StorePanel.IsEnabled = true;
			StorePanel.IsVisible = true;
	}
	public void StoreDeActivate()
	{
			StorePanel.IsEnabled = false;
			StorePanel.IsVisible = false;
	}
}
