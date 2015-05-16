using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class ScreenSpaceTween : MonoBehaviour 
{
	public dfTweenVector3 tween;
	dfGUIManager manager;
	public float startX;
	public float startY;
	void Start()
	{
		manager = GameObject.Find("UI Root").GetComponent<dfGUIManager>();
		startX = manager.FixedWidth;
		startY = manager.FixedHeight;
	}
	public void OnResolutionChanged( dfControl control, Vector2 previousResolution, Vector2 currentResolution )
	{
		
		if( !Application.isPlaying )
			return;
		
		//var tween = GetComponent<dfTweenVector3>();
		if( tween != null )
		{
			
			// HACK: First call actually passes Vector2.zero as previous resolution
			if( previousResolution.magnitude < float.Epsilon )
			{
				var manager = control.GetManager();
				previousResolution = manager.GetScreenSize();
			}
			
			tween.StartValue = retarget( tween.StartValue, previousResolution, currentResolution );
			tween.EndValue = retarget( tween.EndValue, previousResolution, currentResolution );
			
		}
		
	}
	
	private Vector3 retarget( Vector3 target, Vector2 previousResolution, Vector2 currentResolution )
	{
		
		var relativeX = target.x / previousResolution.x;
		var relativeY = target.y / previousResolution.y;
		
		var newTarget = new Vector3(
			currentResolution.x * relativeX,
			currentResolution.y * relativeY
			);
		
		return newTarget;
		
	}
	
}