using UnityEngine;
using System.Collections;

public class ExitCancelMenu : MonoBehaviour {
	public dfLabel lable;
	public dfTweenPlayableBase tweenOn;
	public dfTweenPlayableBase tweenOff;
	public bool bulca;
	// Use this for initialization
	void Start () {
		lable.Text = "Wellcome!";
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown(KeyCode.Escape))
		{
			if(bulca==false)
			{	
				lable.Text = "Wellcome!";
				tweenOn.Play();
				bulca = true;

			}
			else if(bulca==true)
			{
				lable.Text = "Exit?";
				tweenOff.Play();
				bulca = false;

			}
		}
	}

	public void Cancel()
	{
		lable.Text = "Wellcome!";
		tweenOn.Play();
		bulca = true;;
	}
}



