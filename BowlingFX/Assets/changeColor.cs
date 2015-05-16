using UnityEngine;
using System.Collections;

public class changeColor : MonoBehaviour {
	public Color32 color;
	dfButton button;
	// Use this for initialization
	void Start () {
		button = GetComponent<dfControl>().GetComponent<dfButton>();
		button.NormalBackgroundColor = color;
	}
}
