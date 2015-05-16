using UnityEngine;
using System.Collections;

public class SquareSprite : MonoBehaviour {
	dfSprite sprite;
	float heightScreen;
	float heightSprite;
	float widthSprite;
	//public float percentSprite;
	// Use this for initialization
	void Start () {
		sprite = GetComponent<dfControl>().GetComponent<dfSprite>();
		heightScreen = 800.0f;
		heightSprite = sprite.Height;
		widthSprite = sprite.Width;
		//percentSprite = (Screen.height/sprite.Height);
	}
	
	// Update is called once per frame
	void OnResolutionChanged () {
		Resize();
	}

	void Resize()
	{
		sprite = GetComponent<dfControl>().GetComponent<dfSprite>();
		sprite.Size = new Vector2(Mathf.FloorToInt( widthSprite*(Screen.height/heightScreen)), Mathf.FloorToInt(heightSprite*(Screen.height/heightScreen)));
		//print (heightSprite*(Screen.height/heightScreen));
	}
}
