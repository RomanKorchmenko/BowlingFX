using UnityEngine;
using System.Collections;

public class LoadLivelBtnCover : MonoBehaviour {
	public dfCoverflow Coverflow;
	//public int index;
	//public string LevelName;
	public string[] LevelNames;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {

	}
	public void LoadLevel()
	{
		//yield return new WaitForSeconds(0.3f);
//		if(Coverflow.selectedIndex==index)
//		{
			//print ("Load Some Level");
		Application.LoadLevel(LevelNames[Coverflow.selectedIndex]);
		print (LevelNames[Coverflow.selectedIndex]);
//		}
	}
	public void ExitGame()
	{
		Application.Quit();
	}

}
