using UnityEngine;
using System.Collections;
public class ProportionalPanel : MonoBehaviour {
	public dfPanel panel;
	//public float startXsize;
	//public float startYsize;
	public float newXsize;
	public float newYsize;
	public float coeff=1f;
	//public dfGUIManager manager;
	public float startWidth;
	public float tmpWidth;
	public bool IsSquare = true;
	// Use this for initialization
	void Start () {
		//manager = GameObject.Find("UI Root").GetComponent<dfGUIManager>();
		//panel = GetComponent<dfControl>().GetComponent<dfPanel>();
		Calculate ();
		//InvokeRepeating("Calculate", 0.0f, 1.0f);
	}
	void OnEnable()
	{
		Calculate ();
	}
	// Update is called once per frame
	void OnResolutionChanged (dfControl control, Vector2 previousResolution, Vector2 currentResolution ) {
		Calculate ();
	}
	void LateUpdate()
	{
		Calculate ();
	}
	void Calculate()
	{
		if(IsSquare)
		{
			if (Screen.width > Screen.height) //landscape
			{
				newXsize = Mathf.FloorToInt(coeff*Screen.height);
				newYsize = Mathf.FloorToInt(coeff*Screen.height);
			}

		if(Screen.width < Screen.height) //portrait
			{
				newXsize = Mathf.FloorToInt(coeff*Screen.width);
				newYsize = Mathf.FloorToInt(coeff*Screen.width);
			}
		}
		else if (!IsSquare) {
			newXsize = Mathf.FloorToInt(coeff*Screen.width);
			newYsize = Mathf.FloorToInt(coeff*Screen.height);
				}
		panel = GetComponent<dfControl>().GetComponent<dfPanel>();
		panel.Size = new Vector2 (newXsize, newYsize);
	}
}