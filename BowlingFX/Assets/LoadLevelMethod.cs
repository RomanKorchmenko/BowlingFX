using UnityEngine;
using System.Collections;

public class LoadLevelMethod : MonoBehaviour {
	public string level;
	public dfProgressBar progress;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if(progress.Value==1) Load();
	}

	public void Load()
	{
		Application.LoadLevel (level);
	}
}
