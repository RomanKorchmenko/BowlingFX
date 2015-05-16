using UnityEngine;
using System.Collections;

public class TutorialEnabler : MonoBehaviour {
	public dfPanel panel;
	public GameObject OptionsMenu;
	public bool on;
	//public bool off;
	// Use this for initialization
	void Start () {
		//TutorialOff();
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnMouseDown()
	{
		if(on)	TutorialOn();
		else TutorialOff();
	}

public void TutorialOn()
{
		panel.IsEnabled = true;
		panel.IsVisible = true;
		OptionsMenu.gameObject.SetActiveRecursively(false);
}

	public void TutorialOff()
	{
		panel.IsEnabled = false;
		panel.IsVisible = false;
		OptionsMenu.gameObject.SetActiveRecursively(true);
	}
}
