using UnityEngine;
using System.Collections;
public class ChoiceLvlSelector : MonoBehaviour {
	// Use this for initialization
	
	public enum BallType{Hanami, SciFi, Steam}
	public BallType ball;
	public dfSprite sprite;
	void Start()
	{
	}
	// Update is called once per frame
	void OnMouseDown () {
		
		switch (ball){
		case BallType.Hanami: sprite.SpriteName = "HanamiPreview"; break;
		case BallType.SciFi: sprite.SpriteName = "SciFiPreview"; break;
		case BallType.Steam: sprite.SpriteName = "SteamPreview"; break;
		}
	}
	
	public void HanamiSet()
	{
		ball = BallType.Hanami; 
	}
	public void SciFiSet()
	{
		ball = BallType.SciFi; 
	}
	public void SteamSet()
	{
		ball = BallType.Steam; 
	}
	
}
