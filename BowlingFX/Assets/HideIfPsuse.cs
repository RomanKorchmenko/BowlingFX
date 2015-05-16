using UnityEngine;
using System.Collections;

public class HideIfPsuse : MonoBehaviour {
	private dfSprite SpriteRoot;
	// Use this for initialization
	void Start () {
		SpriteRoot = GetComponent<dfSprite>();
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void Pause(int state)
	{
		if(state == 1)
		{
			//pause on
			SpriteRoot.IsVisible = false;
			SpriteRoot.IsEnabled = false;
		}
		else if(state == 0) 
		{
			//pause off
			SpriteRoot.IsVisible = true;
			SpriteRoot.IsEnabled = true;
		}
	}
}
