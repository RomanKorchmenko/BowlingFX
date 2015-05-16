using UnityEngine;
using System.Collections;
using System.Collections.Generic;
public class ScoreTransferSharp : MonoBehaviour {
public int playerFinalScore;
public List<GameObject> Users;
	void Awake () {
		//Users = GameObject.FindGameObjectsWithTag("Player");
		//var users :GameObject = GameObject.Find("_UserControllerFB");
		//UserCollector = users.GetComponent("MainMenu").RealNames;
	}
	
	void Start()
	{
		//NotificationCenter.DefaultCenter().AddObserver(this, "PlayerIsChanged");
	}
	void Update () {
//		if(Users.Count>0)
//			playerFinalScore = Users[0].GetComponent(_GameManager).playerFinalScore;
		//else playerFinalScore = tmp.GetComponent(_GameManager).playerFinalScore;
	}
	
	void PlayerIsChanged()
	{
		
	}
}
