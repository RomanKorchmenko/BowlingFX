using UnityEngine;
using System.Collections;
using System.Collections.Generic;


public class dfSwitcherTween : MonoBehaviour {
	public dfTweenPlayableBase tweenOn;
	public dfTweenPlayableBase tweenOff;
	public bool boolca;
	public bool init;
	public void TeenSwitcher()
	{
		if(init && !tweenOn.IsPlaying && !tweenOff.IsPlaying)
		{
			if(!boolca )
		{
			tweenOn.Play();
			boolca=true;
				print ("tweenOn.Play");
			
		}
			else 
			{
				tweenOff.Play();
				boolca=false;
				print ("tweenOff.Play");

			}
		}
	}
}
