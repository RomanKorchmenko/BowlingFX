//draw text of a specified color, with a specified outline color
var position : Rect;
var text : String;
var style : GUIStyle;
var outColor : Color;
var inColor : Color;

function Awake()
{
//InvokeRepeating("DrawOutline", 0, 0.2);
}

function Update()
{
DrawOutline();
}

function DrawOutline(){

    var backupStyle = style;

    style.normal.textColor = outColor;

    position.x--;

    GUI.Label(position, text, style);

    position.x +=2;

    GUI.Label(position, text, style);

    position.x--;

    position.y--;

    GUI.Label(position, text, style);

    position.y +=2;

    GUI.Label(position, text, style);

    position.y--;

    style.normal.textColor = inColor;

    GUI.Label(position, text, style);

    style = backupStyle;

}