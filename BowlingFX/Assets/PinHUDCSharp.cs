using UnityEngine;
using System.Collections;

public class PinHUDCSharp : MonoBehaviour {
	public dfSprite[] pins;
	string offname = "blackDot";
	string onname = "redDot";
	// Use this for initialization
	void Start () {
	
	}
	
	void NextRound()
	{

		for(int i = 0; i < pins.Length; i++)
		{
			pins[i].SpriteName = onname;
		}

	}
	void Restart()
	{
		NextRound();
	}

	void PinDown(string number)
	{
		if(number=="Keglya1") pins[0].SpriteName = offname;
		if(number=="Keglya2") pins[1].SpriteName = offname;
		if(number=="Keglya3") pins[2].SpriteName = offname;
		if(number=="Keglya4") pins[3].SpriteName = offname;
		if(number=="Keglya5") pins[4].SpriteName = offname;
		if(number=="Keglya6") pins[5].SpriteName = offname;
		if(number=="Keglya7") pins[6].SpriteName = offname;
		if(number=="Keglya8") pins[7].SpriteName = offname;
		if(number=="Keglya9") pins[8].SpriteName = offname;
		if(number=="Keglya10") pins[9].SpriteName = offname;

	}
}
