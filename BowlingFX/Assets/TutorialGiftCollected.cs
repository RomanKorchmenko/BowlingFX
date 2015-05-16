using UnityEngine;
using System.Collections;

public class TutorialGiftCollected : MonoBehaviour {
	public GameObject TutorialGO;
	// Use this for initialization
	void Start () {
		
	}
	
	void OnFingerDown(FingerDownEvent e) {
		/* your code here */ 
		if(e.Selection == this.gameObject){
			TutorialGift();
		}
	}
	void  OnCollisionEnter(Collision other)
	{
		if(other.gameObject.tag=="activeball")
		{
			TutorialGift();
		}
	}
	void TutorialGift()
	{
		TutorialGO = GameObject.Find("TutorialPanel");
		TutorialGO.gameObject.SendMessage("GiftCollected");
	}

}
