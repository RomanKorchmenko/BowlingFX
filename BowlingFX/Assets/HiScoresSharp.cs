using UnityEngine;
using System.Collections;

public class HiScoresSharp : MonoBehaviour {
	public int[] array ;
	public dfLabel[] array_text;
	public string[] array_name_text;
	public dfLabel[] array_name;
	public int ScoreToPrefs0;
	public int ScoreToPrefs1;
	public int ScoreToPrefs2;
	public int ScoreToPrefs3;
	public int ScoreToPrefs4;
	public int PrefsToScore0;
	public int PrefsToScore1;
	public int PrefsToScore2;
	public int PrefsToScore3;
	public int PrefsToScore4;
	public int scores;
	public GameObject GO;
	public dfLabel NowScores;
	//public string LevelID;
	public int stars;
	public dfButton hiscores;
	public dfButton pauseButton;
	public static HiScoresSharp instance;
	void Awake()
	{
		instance = this;
		}
	// Use this for initialization
	void Start () {
		stars=0;
	}
	public void GetScore(int score)
	{
		score = scores;
	}
	// Update is called once per frame
	void LateUpdate () {
//		scores = GameManager.playerFinalScore;
	}

//string from player prefs init on submit score

void SortArray()
{
	for (int i = 0; i < array.Length; i++) {
		/* Предполагаем, что начальный элемент рассматриваемого
     * фрагмента и будет минимальным.
     */
		int max = array[i]; // Предполагаемый maximalniy элемент
		int imax = i; // Индекс maximalnogo элемента
		/* Просматриваем оставшийся фрагмент массива и ищем там
     * элемент, bolshiy предположенного минимума.
     */
		for (int j = i+1; j < array.Length; j++) {
			/* Если находим новый минимум, то запоминаем его индекс.
         * И обновляем значение минимума.
         */
			if (array[j] > max) {
				max =array[j];
				imax = j;
			}
		}
		/* Проверяем, нашёлся ли элемент bolshiy, чем стоит на
     * текущей позиции. Если нашёлся, то меняем элементы местами.
     */
		if (i != imax) {
			int temp = array[i];
			string temp1 = array_name_text[i];
			array_name_text[i] = array_name_text[imax];
			array[i] = array[imax];
			array[imax] = temp;
			array_name_text[imax] = temp1;
		}
	}
	
}

	public void GetSet()
	{
		Get ();
		Set ();
		SetText();
		//NowScores.Text = ""+scores;
	}

void Get()
{
		print ("GetScores");
	//заполняем массив из сохранений 
//		print (PlayerPrefs.GetInt("Player Score0"));
//		print (PlayerPrefs.GetString("Player0"));
		if(PlayerPrefs.GetInt("Player Score0")!=0)array[0] = PlayerPrefs.GetInt("Player Score0");
		else {
			array[0]=0;
				}
		if(PlayerPrefs.GetInt("Player Score1")!=0)array[1] = PlayerPrefs.GetInt("Player Score1");
		else {
			array[1] = 0;
				}
		if(PlayerPrefs.GetInt("Player Score2")!=0) array[2] = PlayerPrefs.GetInt("Player Score2");
		else {
			array[2] = 0;
				}
		if(PlayerPrefs.GetInt("Player Score3")!=0)array[3] = PlayerPrefs.GetInt("Player Score3");
		else {
			array[3] = 0;
				}
		if(PlayerPrefs.GetInt("Player Score4")!=0)array[4] = PlayerPrefs.GetInt("Player Score4");
		else {
			array[4] = 0;
				}
		if(PlayerPrefs.GetString("Player0")!="")array_name_text[0] = PlayerPrefs.GetString("Player0");
		else {
			array_name_text[0] = "SomeBody";
				}
		if(PlayerPrefs.GetString("Player1")!="")array_name_text[1] = PlayerPrefs.GetString("Player1");
		else {
			array_name_text[1] = "SomeBody";
				}
		if(PlayerPrefs.GetString("Player2")!="")array_name_text[2] = PlayerPrefs.GetString("Player2");
		else {
			array_name_text[2] = "SomeBody";
				}
		if(PlayerPrefs.GetString("Player3")!="")array_name_text[3] = PlayerPrefs.GetString("Player3");
		else {
			array_name_text[3] = "SomeBody";
				}
		if(PlayerPrefs.GetString("Player4")!="")array_name_text[4] = PlayerPrefs.GetString("Player4");
		else {
			array_name_text[4] = "SomeBody";
				}
}

void Set()
{
//		print ("SetScores");
	PlayerPrefs.SetInt("Player Score0", array[0]);
	PlayerPrefs.SetInt("Player Score1", array[1]);
	PlayerPrefs.SetInt("Player Score2", array[2]);
	PlayerPrefs.SetInt("Player Score3", array[3]);
	PlayerPrefs.SetInt("Player Score4", array[4]);
	
	PlayerPrefs.SetString("Player0", array_name_text[0]);
	PlayerPrefs.SetString("Player1", array_name_text[1]);
	PlayerPrefs.SetString("Player2", array_name_text[2]);
	PlayerPrefs.SetString("Player3", array_name_text[3]);
	PlayerPrefs.SetString("Player4", array_name_text[4]);
}

void SetText()
{
	for (int n = 0; n < array.Length; n++) {
		array_text[n].Text = ""+array[n];
		array_name[n].Text = ""+array_name_text[n];
	}
}
	
public void ResetScores()
{
	for (int n = 0; n < array.Length; n++) {
		array[n] = 0;
		array_text[n].Text = ""+array[n];
		array_name_text[n] = "SomeBody";
		Set();
		SetText();
	}
}

public void GameEnded()
{
	if (scores >50) stars = 1; 
	if (scores >100) stars = 2;
	if (scores >150) stars = 3;
	if (scores >200) stars = 4;
	Get();//заполняем массив из сохранений 
	array[4] = scores;
	array_name_text[4] = PlayerPrefs.GetString("Player Name"); 
	SortArray();//сортируем массив очков
	Set();// запись массива в сохранения
	SetText();// установка текста из сохранений
		pauseButton.DoClick();
		hiscores.DoClick();
		//GetSet();
		//GO.gameObject.SendMessage("HightScoresMenu");
}
//void LevelIDIs(notification:Notification)
//{
//	LevelID = notification.data;
//}
}