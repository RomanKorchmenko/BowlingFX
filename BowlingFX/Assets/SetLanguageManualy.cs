using UnityEngine;
using System.Collections;

public class SetLanguageManualy : MonoBehaviour {
	// Use this for initialization
	public int index;
	public string lang;
	public dfSprite flag;
	public dfLanguageManager languageManager;
	public dfDropdown drop;
	void Awake () {
		Debug.Log(languageManager.CurrentLanguage);
		//index = drop.SelectedIndex;
	}

	void Update()
	{
		Launguages();
	}
	// Update is called once per frame
	public void DropIndexChanged () {

		print (	index );
			print (	lang );
	}

	void Launguages()
	{
		if(index==0)//english
		{
			flag.SpriteName = "eng_Lang";
			languageManager.LoadLanguage(dfLanguageCode.EN);
			lang = "EN";
		}
		if(index==1)//german
		{
			flag.SpriteName = "de_Lang";
			languageManager.LoadLanguage(dfLanguageCode.DE);
			lang = "DE";
		}
		if(index==2)//france
		{
			flag.SpriteName = "fr_Lang";
			languageManager.LoadLanguage(dfLanguageCode.FR);
			lang = "FR";
		}
		if(index==3)//russian
		{
			flag.SpriteName = "ru_Lang";
			languageManager.LoadLanguage(dfLanguageCode.RU);
			lang = "RU";
		}
		if(index==4)//ukraine
		{
			flag.SpriteName = "uk_Lang";
			languageManager.LoadLanguage(dfLanguageCode.UK);
			lang = "UK";
		}
	}
}
