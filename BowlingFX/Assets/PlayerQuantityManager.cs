using UnityEngine;
using System.Collections;
using System.Collections.Generic;
public class PlayerQuantityManager : MonoBehaviour {
	public dfDropdown QuantityChacker;
	public int UserIndex=1;
	public dfScrollPanel UserPool;
	public dfControl ItemUser;
	public List<dfControl> NamesList;
	public List<string> nameString;
	public List<string> RealNames;
	public GameObject Player;
	public GameObject parent;
	public string FBName;
	dfControl User;
	void Start () {
		User = Instantiate (ItemUser) as dfControl;
		SetFBToUserName();
		UserPool.AddControl (User);
		((dfTextbox)User).Text = nameString[0];
		NamesList.Add (User);
	}
	public void UserIndexChanged () {
		SetFBToUserName();
		if (NamesList.Count>UserIndex+1) {
			for(int i=UserIndex+1; i<NamesList.Count;i++)
			{
				UserPool.RemoveControl(NamesList[i]);
				Destroy(NamesList[i].gameObject);
				NamesList.Remove(NamesList[i]);	
				//print ("removeUser"+i);
			}
		}
		//add elements 
		if(NamesList.Count<UserIndex+1)
		{
			for(int i=NamesList.Count; i<UserIndex+1;i++)
			{
				dfControl User = Instantiate (ItemUser) as dfControl;
				UserPool.AddControl (User);
				NamesList.Add (User);
				User.ZOrder = i;
				((dfTextbox)User).Text = nameString[i];
			}
		}
	}
	public void SetNamesList()
	{
		parent = GameObject.Find("_UserControllerFB");
		SetFBToUserName();
		for (int i=0; i< NamesList.Count;i++)
		{
			nameString[i] = ((dfTextbox)NamesList[i]).Text;
		}
	}
	public void SetUpRealName()
	{
		RealNames.Clear();
		SetFBToUserName();
		GameObject[] oldPlayers =  GameObject.FindGameObjectsWithTag("Player");
		for(int a=0; a<oldPlayers.Length; a++)
		{
			Destroy(oldPlayers[a]);
		}
			print ("find _UserControllerFB");
			for (int i=0; i< NamesList.Count;i++)
			{
				RealNames.Add(((dfTextbox)NamesList[i]).Text);
				GameObject player =  Instantiate(Player) as GameObject;
				player.transform.parent = parent.transform;
				player.name = RealNames[i];
			}
	}

	public void SetFBToUserName()
	{
		if(FBName!=""){
			nameString[0] = ""+FBName;
			print ("Set FB name to user0");
		}
		else nameString[0] = "Player1";
		if(User!=null) ((dfTextbox)User).Text = nameString[0];
	}
}
