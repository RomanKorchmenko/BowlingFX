using UnityEngine;
using System.Collections;

public class SoundTarget : MonoBehaviour {
	public string nameSource;
	public float volume;
	AudioSource emiter;
	// Use this for initialization
	void Start () {
		emiter = GameObject.Find(nameSource).GetComponent<AudioSource>();
		emiter.volume = volume;
	}
	
	// Update is called once per frame
	void LateUpdate () {
		//emiter.volume = volume;
	}



	public void Music()
	{
		emiter.volume = volume;
	}
}
