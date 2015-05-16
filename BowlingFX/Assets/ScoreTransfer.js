#pragma strict
var playerFinalScore: int;
var Users: List.< GameObject >;
var userData: GameObject[];
var maxPlayers: int;
var gameManager: GameObject;
var currentPlayer: int;
var currentName: String;
function Awake () {
//var users :GameObject = GameObject.Find("_UserControllerFB");
userData = GameObject.FindGameObjectsWithTag("Player");
}

function Start()
{
 gameManager = GameObject.Find("__GameManager");
NotificationCenter.DefaultCenter().AddObserver(this, "PlayerChanger");
}
function Update () {
if(Users.Count>0)
playerFinalScore = Users[0].GetComponent(_GameManager).playerFinalScore;
}

function PlayerChanger()
{
 currentPlayer++;
  for(var i: int; i<Users.Count; i++)
   {
   if(i!=currentPlayer)Users[i].SetActive(false);
   else Users[i].SetActive(true);
   }
    print("Change Player");
   if(currentPlayer>maxPlayers) currentPlayer=0;
}

   function OnLevelWasLoaded(level: int)
   {
   maxPlayers = userData.Length;
   gameManager = GameObject.Find("__GameManager");
   for(var i: int; i< userData.Length; i++)
   {
   if(i!=0)Users[i].SetActive(false);
   Users[i].name = userData[i].name;
   currentName = Users[0].name;
   Users[i].transform.parent = gameManager.transform;
   }
   } 