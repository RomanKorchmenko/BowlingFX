using UnityEngine;
using System.Collections;

public class SoundFromSMSGC : MonoBehaviour {
	public AudioClip sound;
	public string msg;
	bool played;
	bool loop;
	bool isRestarted;
	// Use this for initialization
	void Start () {
		played=true;
	}
	
	// Update is called once per frame
	void Update () {

	}
	void PlaySoundFX(string notification)
	{
		if(msg == notification)
		{
			played=false;
		if(!played) 
		{
			if(!loop)
			{
				audio.loop = false;
				audio.PlayOneShot(sound);
			}
			if(loop)
			{
				audio.loop = true;
				audio.clip = sound;
				audio.Play();
			}
			played=true;
		}
	}
	}
}