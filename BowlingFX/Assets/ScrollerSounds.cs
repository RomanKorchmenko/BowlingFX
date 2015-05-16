using UnityEngine;
using System.Collections;

public class ScrollerSounds : MonoBehaviour {
	//public dfCoverflow cover;
	public GameObject SoundGO;
	// Use this for initialization
	private void Start () {
		//cover = GetComponent<dfCoverflow>();
		//cover.SelectedIndexChanged += IndexChanged;

	}
	
	// Update is called once per frame
	void OnSelectedIndexChanged() {

		 SoundGO.SendMessage("CoverIndexChange");
		//print ("ChangeIndex Sound");
	}
}
