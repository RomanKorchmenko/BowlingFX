using UnityEngine;
using System.Collections;

public class SoundMSGSharp : MonoBehaviour {
	public AudioClip sound;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void CoverIndexChange () {
		audio.PlayOneShot(sound);
	}
}
