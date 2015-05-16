using UnityEngine;
using System.Collections;

public class DestroyTutorial : MonoBehaviour {
	public GameObject Parent;
	public GameObject MenuController;
	GameObject UIRoot;
	// Use this for initialization
	void OnEnable () {
		MenuController = GameObject.Find("_dfMenuController");
		UIRoot = GameObject.Find ("UI Root");
	}
	
	// Update is called once per frame
	public void Destroy () {
		MenuController.SendMessage("OptionMenu");
//		UIRoot.SendMessage ("ReturnScale");
		Destroy (Parent);
	}
}
