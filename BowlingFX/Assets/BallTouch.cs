using UnityEngine;
using System.Collections;

public class BallTouch : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	void OnFingerDown(FingerDownEvent e) {
		/* your code here */ 
		if(e.Selection == this.gameObject) this.gameObject.SendMessage("CollectOnTap");
	}

	void OnTap()
	{
	// print ("Hit Object!");
	}
}
