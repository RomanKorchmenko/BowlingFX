using UnityEngine;
using System.Collections;

public class offpatricleAndDestroy : MonoBehaviour {
	float timeOut = 25.0f;
	bool detachChildren = false;
	bool init;
	void Awake ()
	{
		Invoke ("DestroyNow", timeOut);
	}

//	void Update()
//	{
//		if(transform.parent==null && !init) 
//		{
//			this.particleSystem.emissionRate = 0f;
//			Invoke ("DestroyNow", timeOut);
//			init=true;
//		}
//	}
	
	void DestroyNow ()
	{
		 
		DestroyObject (gameObject);
	}

//	void OnTriggerEnter(Collider colider)
//	{
//		if(colider.gameObject.tag =="remover"){
//
//		}
//
//	}

}
