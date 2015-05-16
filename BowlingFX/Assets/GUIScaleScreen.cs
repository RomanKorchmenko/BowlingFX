using UnityEngine;
using System.Collections;
using System.Collections.Generic;
public class GUIScaleScreen : MonoBehaviour {
	public dfGUIManager manager;
	public float maxscale = 2.0f;
	public float minscale = 1.0f;
	public float realscale;
	//public enum Resolution {Rethina, NonRethine};
	//public Resolution resolution;
	void Start () {
		manager = GetComponent<dfGUIManager>();
		StartCoroutine(ChangeScale(1.0f));
		#if UNITY_IPHONE
		#endif
		//manager.FixedWidth = Screen.width;
		//manager.FixedHeight = Screen.height;
		//ChangeScaleRes();
	}
	void Awake()
	{
		//ChangeScale();
		}
	// Update is called once per frame
	void LateUpdate () {
		//ChangeScale();
	}
	void  OnLevelWasLoaded(int level)
	{
		//ChangeScaleRes();
	}
	 void OnResolutionChanged (dfControl control, Vector2 previousResolution, Vector2 currentResolution )
	{
		ChangeScale(0f);
	}
	IEnumerator ChangeScale(float waitTime=1f)
	{
		manager.FixedWidth = Screen.width;
		manager.FixedHeight = Screen.height;
		realscale = manager.UIScale;
		yield return new WaitForSeconds (waitTime);
	}

	/*
	IEnumerator ChangeScale(float waitTime=0f)
	{
		if(Screen.orientation == ScreenOrientation.Landscape && Screen.width < 1300f)manager.UIScale = minscale*1.5f;
		else if(Screen.orientation == ScreenOrientation.Portrait && Screen.height < 1300f) manager.UIScale = minscale;
		else if (Screen.height > 1300f )//portrait
			manager.UIScale = maxscale;
		else if(Screen.orientation == ScreenOrientation.Landscape && Screen.width > 1300f) {
			manager.UIScale = maxscale;
		}
		else if(Screen.orientation == ScreenOrientation.Portrait && Screen.height > 1300f) {
			manager.UIScale = maxscale;
		}
		#if UNITY_IPHONE || UNITY_ANDROID
		//maxscale = maxscale*2.0f;
		#endif

//		else if(Screen.width<1300f && Screen.height<1300f && Screen.height<Screen.width){
//			manager.UIScale = minscale*1.5f;
//		}
		//else manager.UIScale = minscale;
		manager.FixedWidth = Screen.width;
		manager.FixedHeight = Screen.height;
		realscale = manager.UIScale;
		yield return new WaitForSeconds (waitTime);
	}

	 */
	void ChangeScaleRes()
	{

		if (Screen.height > 1300f )//portrait
			manager.UIScale = maxscale;
		else if(Screen.width>1300f) {
			manager.UIScale = maxscale;
		}
		else if(Screen.width<1300f && Screen.height<1300f && Screen.height<Screen.width){
			manager.UIScale = minscale*1.0f;
		}
		else manager.UIScale = minscale;
		manager.FixedWidth = Screen.width;
		manager.FixedHeight = Screen.height;
		realscale = manager.UIScale;
	}
	
}
