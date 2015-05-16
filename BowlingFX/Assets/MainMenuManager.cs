using UnityEngine;
using System.Collections;

public class MainMenuManager : MonoBehaviour {
	public bool changer;
	public float waittime=5.0f;
	float time;
	public dfPanel ExitPanel;
	// Use this for initialization
	void Start () {
//		disapear.Play();
	}
	
	// Update is called once per frame
	void Update () {
		if(Time.realtimeSinceStartup>= time+waittime && changer)
		{
			MenuMover();
		}
		if (Input.GetKeyDown(KeyCode.Escape))
		{
			MenuMover();
		}
	}
	public void MenuMover()
	{
		if(!changer )
		{
			ExitPanel.IsEnabled = true;
			ExitPanel.IsVisible = true;
			changer=true;
			time = Time.realtimeSinceStartup;
		}
		else if(changer )
		{
			ExitPanel.IsEnabled = false;
			ExitPanel.IsVisible = false;
			changer=false;
		}
	}
}
