using UnityEngine;
using System.Collections;

public class ProgressLoading : MonoBehaviour {
	public float percentageLoaded = 0;
	public dfProgressBar progressbar;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if (Application.GetStreamProgressForLevel("HanamiScene") < 1)
		{
			percentageLoaded = Application.GetStreamProgressForLevel("Level1");
			progressbar.Value =percentageLoaded;
		}
	}
}
