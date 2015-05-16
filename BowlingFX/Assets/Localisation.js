#pragma strict
import System.IO;
var fileName = "Languages.txt";
var local: String;
function Start () {
Localise();
ReadFile();
}

function Update () {

}

function Localise()
{
local = Application.systemLanguage.ToString();
if(Application.systemLanguage.Russian) print("Russian");
else if(Application.systemLanguage.English) print("English");
}

function ReadFile()
{
 var sr = new StreamReader(Application.dataPath + "/" + fileName);
    var fileContents = sr.ReadToEnd();
    sr.Close();
 
    var lines = fileContents.Split("\n"[0]);
    for (line in lines) {
        print (line);
    }
}