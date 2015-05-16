#pragma strict
//GUI Texture
var hud1: GUITexture;
var hud2: GUITexture;
var hud3: GUITexture;
var hud4: GUITexture;
var hud5: GUITexture;
var hud6: GUITexture;
var hud7: GUITexture;
var hud8: GUITexture;
var hud9: GUITexture;
var hud10: GUITexture;
//GUI Texture
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "PinDown");
NotificationCenter.DefaultCenter().AddObserver(this, "NextRound");
NotificationCenter.DefaultCenter().AddObserver(this, "Restart");
}

function Update () {

}

function PinDown(notification:Notification)
{
if(notification.data=="Keglya1") hud1.guiTexture.color.a=0.0;
if(notification.data=="Keglya2") hud2.guiTexture.color.a=0.0;
if(notification.data=="Keglya3") hud3.guiTexture.color.a=0.0;
if(notification.data=="Keglya4") hud4.guiTexture.color.a=0.0;
if(notification.data=="Keglya5") hud5.guiTexture.color.a=0.0;
if(notification.data=="Keglya6") hud6.guiTexture.color.a=0.0;
if(notification.data=="Keglya7") hud7.guiTexture.color.a=0.0;
if(notification.data=="Keglya8") hud8.guiTexture.color.a=0.0;
if(notification.data=="Keglya9") hud9.guiTexture.color.a=0.0;
if(notification.data=="Keglya10") hud10.guiTexture.color.a=0.0;
}
function NextRound()
{
//yield WaitForSeconds(5);
hud1.guiTexture.color.a=1.0;
hud2.guiTexture.color.a=1.0;
hud3.guiTexture.color.a=1.0;
hud4.guiTexture.color.a=1.0;
hud5.guiTexture.color.a=1.0;
hud6.guiTexture.color.a=1.0;
hud7.guiTexture.color.a=1.0;
hud8.guiTexture.color.a=1.0;
hud9.guiTexture.color.a=1.0;
hud10.guiTexture.color.a=1.0;
}

function Restart()
{
NextRound();
}