using UnityEngine;
using System.Collections;

public class FaceScoreSharp : MonoBehaviour {
//  текстовое значение всех фреймов за всю игру
	public dfLabel[] framesText;
// конкретное значение текста в конкретном ходе
	dfLabel frameText;
	 //текстовое значение всех половин фрейма за всю игру
	public dfLabel[] throwsText;
// текстовое значение конкретного элемента в конкретном ходе
	dfLabel throwText;
	public int sum;
	public int thrc;
	public int sparestrike;
	public int throws;
	public int[] StrikeFrames;
	int j;
	public string[] FramesVar;
	public string[] ThrowsVar;
	public int playerFinalScore;
	public GameObject[] Users;
	public GameObject[] userData;
	public int maxPlayers;
	public GameObject gameManager;
	public int currentPlayer;
	public string currentName;
	public dfPanel NextPlayerPanel;
	void Awake()
	{
		userData = GameObject.FindGameObjectsWithTag("Player");
	}

	void Start()
	{
		if(userData.Length==0) currentName = "Player1";
		zerroScore();
		gameManager = GameObject.Find("__GameManager");
	}
	void ClearScoreBoard()
	{
		
		//обнуление текста в строках очков  фрейма
		for(int i = 0; i < framesText.Length; i++)
		{
			frameText = framesText[i];
			frameText.Text = "";
			
		}
		for(int n = 0; n < throwsText.Length; n++) //обнуление текста в строках очков полуфрейма
		{
			throwText = throwsText[n];
			throwText.Text = "";
		}
	}

	void LateUpdate()
	{
		//SetLineText();
	}




//	void Start () {
//		ClearScoreBoard();
//	}
	void Throws()
	{
		for(int i =0; i<framesText.Length; i++) 
		{
			if(FramesVar[i]!="0")
			{
				framesText[i].Text = ""+FramesVar[i];
				//			print ("Set Line "+FramesVar[i]);
			}
		}
		for(int n = 0; n<throwsText.Length; n++) 
		{
			//if(ThrowsVar[n]!="0")
			//{
				throwsText[n].Text = ""+ThrowsVar[n];
				//print ("Set Line "+ThrowsVar[n]);
			//}
		}
	}
	void zerroScore()
	{
		
		for(int i =0; i<framesText.Length; i++) //обнуление текста в строках очков  фрейма
		{
			framesText[i].Text = "";
		}
		for(int n = 0; n<throwsText.Length; n++) //обнуление текста в строках очков полуфрейма
		{
			throwsText[n].Text = "";
		}
		
	}

	void Restart()
	{
		sum=0;
		throws=0;
		thrc=0;
		sparestrike=0;
		zerroScore();
		SetLineText();
	}

//	void StrikeFrame(int data)
//	{
//		if(j>2)j=0;
//		StrikeFrames[j] = data;
//		j++;
//	}

	public void SetLineText()
	{
		for(int i =0; i<framesText.Length; i++) 
		{
				if(FramesVar[i]!="0")
			{
				framesText[i].Text = ""+FramesVar[i];
//			print ("Set Line "+FramesVar[i]);
			}
		}
		for(int n = 0; n<throwsText.Length; n++) 
		{
			if(ThrowsVar[n]!="0")
			{
				throwsText[n].Text = ""+ThrowsVar[n];
			//print ("Set Line "+ThrowsVar[n]);
			}
		}
	}

	void PlayerChanger()
	{
		NextPlayerPanel.IsVisible= true;
		if (userData.Length == 1) {
						currentPlayer++;
						for (int i=0; i<maxPlayers-1; i++) {
								if (i != currentPlayer)
										Users [i].SetActive (false);
								if (i + 1 == currentPlayer)
										Users [i + 1].SetActive (true);
								currentName = Users [i + 1].name;
						}
						print ("Change Player");
						if (currentPlayer == maxPlayers - 1)
								currentPlayer = 0;
				}
	}

	void OnLevelWasLoaded(int level )
	{
		if(Users.Length>0)
		{
		maxPlayers = userData.Length;
		gameManager = GameObject.Find("__GameManager");
		for(int i=0; i< userData.Length; i++)
		{
			if(i!=0)Users[i].SetActive(false);
			Users[i].name = userData[i].name;
			currentName = Users[0].name;
			Users[i].transform.parent = gameManager.transform;
		}
	}
		else
		{

		}
	}
}















 
