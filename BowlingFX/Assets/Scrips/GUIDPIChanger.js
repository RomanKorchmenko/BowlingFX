#pragma strict
var HiPDIGUI: GameObject;
var LowDPIGUI: GameObject;
var screenDPI : float;
private var ui: GameObject;
//var tex: GUIText;
function Awake()
{
screenDPI = Screen.dpi;  
}
function Start()
{
//tex.text = ""+screenDPI;
//  #if UNITY_EDITOR
//  Instantiate(LowDPIGUI, Vector3(0.5, 0.5, 0), transform.rotation);
//  #endif 
if(screenDPI<=250 && (Screen.height<=1300 ||  Screen.width<=1300))
{
 ui = Instantiate(LowDPIGUI, Vector3.zero, transform.rotation);
 }
else 
	 ui = Instantiate(HiPDIGUI, Vector3.zero, transform.rotation);
	 
	 ui.name = "UI Root";
}