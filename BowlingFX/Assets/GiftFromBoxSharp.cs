using UnityEngine;
using System.Collections;

public class GiftFromBoxSharp : MonoBehaviour {

	//#pragma strict
	public int gyroCounter;
	public int bombCounter;
	public dfLabel GyroCounterText;
	public dfLabel BombCounterText;
	public dfTweenComponentBase offBomb;
	public dfTweenComponentBase offGyro;
	public dfTweenComponentBase onBomb;
	public dfTweenComponentBase onGyro;
	void Start () {

	}
	void GiftGyro()
	{
		gyroCounter++;
		onGyro.Play();
		GyroCounterText.Text = ""+gyroCounter;
	}
	
	public void UseGyro()
	{
		gyroCounter--;
		offGyro.Play();
		offBomb.Play();
		GyroCounterText.Text = ""+gyroCounter;
	}
	void RestartC()
	{
		gyroCounter=0;
		GyroCounterText.Text = ""+gyroCounter;
		bombCounter =0;
		BombCounterText.Text = ""+bombCounter;

	}
	void GiftBomb()
	{
		bombCounter++;
		onBomb.Play();
		BombCounterText.Text = ""+bombCounter;
	}
	
	public void UseBomb()
	{
		bombCounter--;
		offBomb.Play();
		offGyro.Play();
		BombCounterText.Text = ""+bombCounter;
	}

	void ThrowsC()
	{
		if(gyroCounter>0) onGyro.Play();
		if(bombCounter>0) onBomb.Play();
	}
}
