using UnityEngine;
using System.Collections;

public class SpriteSquareSize : MonoBehaviour {
	//public dfPanel panel;
	dfSprite sprite;
	public int offcet=0;
	//bool bulca;
	// Use this for initialization

	void Start()
	{
		sprite = GetComponent<dfSprite>();
	}
//	void Awake () {
		//sprite = GetComponent<dfSprite>();
//		if(panel.Width > panel.Height)
//		{
//			sprite.Size = new Vector2(panel.Height, panel.Height);
//		}
//		else if(panel.Width < panel.Height)
//		{
//			sprite.Size = new Vector2(panel.Width, panel.Width);
//		}
//	}


	// Update is called once per frame
	void LateUpdate () {
		if(Screen.width > Screen.height )
		{
			sprite.Size = new Vector2(Screen.height-offcet, Screen.height-offcet);
			//print (sprite.Size);
			//bulca=true;
		}
		else if(Screen.width < Screen.height )
		{
			sprite.Size = new Vector2(Screen.width-offcet, Screen.width-offcet);
			//
			//print (sprite.Size);
			//bulca=false;
		}
	}
}
