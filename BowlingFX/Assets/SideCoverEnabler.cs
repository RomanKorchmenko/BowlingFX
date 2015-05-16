using UnityEngine;
using System.Collections;

public class SideCoverEnabler : MonoBehaviour {
	public dfCoverflow cover;
	public dfSprite sprite;
	public int cornerindex;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if(cover.selectedIndex==cornerindex) sprite.IsVisible = false;
		else  sprite.IsVisible = true;
	}

	public void IndexButtonLeft()
	{
		cover.selectedIndex-=1;
	}
	public void IndexButtonRight()
	{
		cover.selectedIndex+=1;
	}
}
