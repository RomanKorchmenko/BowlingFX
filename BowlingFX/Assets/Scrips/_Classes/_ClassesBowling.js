#pragma strict
import System.Collections.Generic;
class ScoreCount
{
public var Scores = new List.<int>(); 
var currentScore: int;
public var brosok = new List.<int>();
var currentBrosok: int; 
public var sum = new List.<int>();
var currentSum: int; 
public var brosok_text = new List.<GUIText>();
var currentBrosok_text: int; 
public var sum_text = new List.<GUIText>();
var currentSum_text: int; 

public var triggers = new List.<PinsTrigger>();
var currentTrigger: int; 

public var huds = new List.<GUITexture>(); 
var currentHud: int;


var ownscore: int=0;
private var textSum:GUIText;
private var textBrosok:GUIText;
private var ownTrugger: PinsTrigger;
private var ownHud: GUITexture;
private var ownScore: int;
function Start()
{
if (brosok_text.Count > 0) {
			textBrosok = brosok_text[currentBrosok_text];
}
if (sum_text.Count > 0) {
			textSum = sum_text[currentSum_text];
}
if (sum_text.Count > 0) {
			textSum = sum_text[currentSum_text];
}
if (Scores.Count > 0) {
			ownScore = Scores[currentScore];
}

if (huds.Count > 0) {
			ownHud = huds[currentHud];
}
if (triggers.Count > 0) {
			ownTrugger = triggers[currentTrigger];
}

}
function Zerro()
{
for (currentBrosok_text=0; currentBrosok_text < brosok_text.Count; currentBrosok_text++)
{
	textBrosok = brosok_text[currentBrosok_text];
    textBrosok.text= ""+0;  
}

for (currentSum_text=0; currentSum_text < sum_text.Count; currentSum_text++)
{
	textSum = sum_text[currentSum_text];
    textSum.text= ""+0;  
}
}
function TriggerHud(){

for (currentTrigger=0; currentTrigger< triggers.Count; currentTrigger++)
{
   ownTrugger = triggers[currentTrigger]; 
}
for (currentHud=0; currentScore< Scores.Count; currentScore++)
{
   ownScore = Scores[currentScore];
 }
 for (currentHud=0; currentHud< huds.Count; currentHud++)
{
 ownHud = huds[currentHud];
   
 }

}
}

class GUIPlayLevels
{
var Landscape: Texture2D;
var Portrait: Texture2D;
}
class AnimatedTexture
{
var texture:Texture2D;
var switchableTextures: Texture2D[];
var currentTexture:int = 0;
private var delayTmp: float;
var delay: float;
var switchTo:int;
var TexturePlace: GUITexture;
var timeAnim: float;
var time: float;
var y: float;
function Start ()
{
timeAnim= (1/delay)*switchableTextures.Length;
switchTo=0;
time=0;
texture = switchableTextures[0];
}
function Animate () 
{
TexturePlace.guiTexture.texture=texture;
	if(Time.time> time+delay)
	{
		if (switchTo < switchableTextures.Length ) 
		{
		switchTo++;
			if(Time.time<=time+timeAnim)
			{
				texture = switchableTextures[switchTo-1];
				currentTexture = switchTo;
				time=Time.time;
			}
		}
	}
}
}