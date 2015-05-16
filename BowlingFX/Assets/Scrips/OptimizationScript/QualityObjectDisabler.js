var objects = new List.<GameObject>();
var currentQuality: int;
var quality: int;
private var obj: GameObject;
function Start()
{
currentQuality = QualitySettings.GetQualityLevel();
LessThen();
NotificationCenter.DefaultCenter().AddObserver(this, "QualityLevelIs");
}
function QualityLevelIs(notification:Notification)
{
currentQuality = notification.data;
//currentQuality = QualitySettings.GetQualityLevel();
LessThen();
}
// если уровень качества меньше требуемого то объект отключается, если больше или равен то включается
function LessThen()
{
if (currentQuality <quality )
{
for(var m: int; m<objects.Count; m++)
		{
		obj = objects[m];
		obj.gameObject.SetActiveRecursively(false);
		}
	}
else if (currentQuality >=quality )
{
for(var b: int; b<objects.Count; b++)
		{
		obj = objects[b];
		obj.gameObject.SetActiveRecursively(true);
		}
	}
}