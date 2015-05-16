using UnityEngine;
using System.Collections;

public class BonusStars : MonoBehaviour {
	public dfTweenGroup Apear;
	public dfTweenFloat Off;
	public int number;
	public int ownNumber;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	public void BonusStar () {
		if(ownNumber <= number)
		{
			Apear.Play();
			print ("StarActive"+ownNumber);
		}
	}
	public void Newgame()
	{
		Off.Play();
	}
}