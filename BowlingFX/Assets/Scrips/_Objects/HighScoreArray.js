#pragma strict
var SocialGO : GameObject;
var array : int[];
var array_text : GUIText[];
var array_name_text: String[];
var array_name: GUIText[];
var ScoreToPrefs0: int;
var ScoreToPrefs1: int;
var ScoreToPrefs2: int;
var ScoreToPrefs3: int;
var ScoreToPrefs4: int;
var PrefsToScore0: int;
var PrefsToScore1: int;
var PrefsToScore2: int;
var PrefsToScore3: int;
var PrefsToScore4: int;
var scores: int;
var LevelID: String;
var stars: int;
//string from player prefs init on submit score
var hanami200: String;
var scifi200: String;
var steampunk200: String;
var hanami300: String;
var scifi300: String;
var steampunk300: String;
var GameManager: _GameManager;
var levelIDComponent: _LevelID;
function Start () {
stars=0;
NotificationCenter.DefaultCenter().AddObserver(this, "ScoresIs");
NotificationCenter.DefaultCenter().AddObserver(this, "ResetScores");
NotificationCenter.DefaultCenter().AddObserver(this, "FinalScore");
NotificationCenter.DefaultCenter().AddObserver(this, "GameEnded");
NotificationCenter.DefaultCenter().AddObserver(this, "BlindeSniper");
NotificationCenter.DefaultCenter().AddObserver(this, "BallCurveTrick");
NotificationCenter.DefaultCenter().AddObserver(this, "Split3DEvent");
NotificationCenter.DefaultCenter().AddObserver(this, "LevelIDIs");
GameManager = gameObject.Find("__GameManager").GetComponent(_GameManager);
levelIDComponent = gameObject.Find("__LevelID").GetComponent(_LevelID);
LevelID = levelIDComponent.levelID;
SocialGO = GameObject.Find("___SocialServices");

}

function Awake()
{


}

function LateUpdate()
{
scores = GameManager.playerFinalScore;
//LevelID = ""+levelIDComponent.levelID;
}


function GetScore () {
//scores = gameObject.Find("__GameManager").GetComponent(_GameManager).playerFinalScore;
}

function SortArray()
{
for (var i:int = 0; i < array.length; i++) {
    /* Предполагаем, что начальный элемент рассматриваемого
     * фрагмента и будет минимальным.
     */
    var max:int = array[i]; // Предполагаемый maximalniy элемент
    var imax:int = i; // Индекс maximalnogo элемента
    /* Просматриваем оставшийся фрагмент массива и ищем там
     * элемент, bolshiy предположенного минимума.
     */
    for (var j:int = i+1; j < array.length; j++) {
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
       var temp:int = array[i];
         var temp1:String = array_name_text[i];
       array_name_text[i] = array_name_text[imax];
        array[i] = array[imax];
        array[imax] = temp;
        array_name_text[imax] = temp1;
    }
}

}

function Get()
{
//заполняем массив из сохранений 
array[0] = PlayerPrefs.GetInt("Player Score0");
array[1] = PlayerPrefs.GetInt("Player Score1");
array[2] = PlayerPrefs.GetInt("Player Score2");
array[3] = PlayerPrefs.GetInt("Player Score3");
array[4] = PlayerPrefs.GetInt("Player Score4");
array_name_text[0] = PlayerPrefs.GetString("Player0");
array_name_text[1] = PlayerPrefs.GetString("Player1");
array_name_text[2] = PlayerPrefs.GetString("Player2");
array_name_text[3] = PlayerPrefs.GetString("Player3");
array_name_text[4] = PlayerPrefs.GetString("Player4");
}

function Set()
{
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

function SetText()
{
for (var n:int = 0; n < array.length; n++) {
array_text[n].text = ""+array[n];
array_name[n].text = ""+array_name_text[n];
}
}

function FinalScore(notification:Notification)
{
//yield WaitForSeconds(2);
//SetText();
}

function ResetScores()
{
for (var n:int = 0; n < array.length; n++) {
array[n] = 0;
array_text[n].text = ""+array[n];
array_name_text[n] = "";
Set();
SetText();
}
}

function GameEnded()
{
if (scores >75) stars = 1; 
if (scores >150) stars = 2;
if (scores >225) stars = 3;
if (scores >280) stars = 4;
hanami200 = PlayerPrefs.GetString("Hanami200");
scifi200 = PlayerPrefs.GetString("SciFi200");
steampunk200 = PlayerPrefs.GetString("SteamPunk200");

hanami300 = PlayerPrefs.GetString("Hanami300");
scifi300 = PlayerPrefs.GetString("SciFi300");
steampunk300 = PlayerPrefs.GetString("SteamPunk300");

SocialGO.SendMessage ("SubmitScores", scores);
//game master
if(scores>=200 && LevelID == "Hanami")
{
 SocialGO.SendMessage ("HanamiMaster", null, SendMessageOptions.DontRequireReceiver);
 PlayerPrefs.SetString("Hanami200", "achievement");
 }
if(scores>=200 && LevelID == "SciFi")
{
 SocialGO.SendMessage ("SciFiMaster", null, SendMessageOptions.DontRequireReceiver);
 PlayerPrefs.SetString("SciFi200", "achievement");
 }
if(scores>=200 && LevelID == "SteamPunk")
{
 SocialGO.SendMessage ("SteamPunkMaster", null, SendMessageOptions.DontRequireReceiver);
 PlayerPrefs.SetString("SteamPunk200", "achievement");
 }
//bowling master
if(hanami200 =="achievement" && scifi200 == "achievement" && steampunk200 == "achievement")
{
SocialGO.SendMessage ("BowlingMaster", null, SendMessageOptions.DontRequireReceiver);
}
//amazing game master
if(scores==300 && LevelID == "Hanami")
{
 SocialGO.SendMessage ("AmazingHanamiMaster", null, SendMessageOptions.DontRequireReceiver);
 PlayerPrefs.SetString("Hanami300", "achievement");
 }
if(scores==300 && LevelID == "SciFi")
{
 SocialGO.SendMessage ("AmazingSciFiMaster", null, SendMessageOptions.DontRequireReceiver);
 PlayerPrefs.SetString("SciFi200", "achievement");
 }
if(scores==300 && LevelID == "SteamPunk")
{
 SocialGO.SendMessage ("AmazingSteamPunkMaster", null, SendMessageOptions.DontRequireReceiver);
  PlayerPrefs.SetString("SteamPunk200", "achievement");
 }
// amasing bowling master
//amazing bouling god
if(hanami300 =="achievement" && scifi300 == "achievement" && steampunk300 == "achievement")
{
SocialGO.SendMessage ("BowlingMaster", null, SendMessageOptions.DontRequireReceiver);
}
Get();//заполняем массив из сохранений 
array[4] = scores;
array_name_text[4] = PlayerPrefs.GetString("Player Name"); 
SortArray();//сортируем массив очков
Set();// запись массива в сохранения
SetText();// установка текста из сохранений
}

function ScoresIs()
{
//array[4] = scores;
//GetScore();//получаем финальные очкиs
//SetText();
}

function BlindeSniper()
{
SocialGO.SendMessage ("BlindeSniperAchievement", null, SendMessageOptions.DontRequireReceiver);
}

function BallCurveTrick()
{
SocialGO.SendMessage ("BallCurveAchievement", null, SendMessageOptions.DontRequireReceiver);
}

function Split3DEvent()
{
SocialGO.SendMessage ("SplitAchievement", null, SendMessageOptions.DontRequireReceiver);
}

function LevelIDIs(notification:Notification)
{
LevelID = notification.data;
}