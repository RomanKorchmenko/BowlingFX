var LOD0 = new List.<GameObject>();
var LOD1 = new List.<GameObject>();
var currentQuality: int;
var quality: int;
var obj: GameObject;
var obj1: GameObject;
function Start()
{
currentQuality = QualitySettings.GetQualityLevel();
if (currentQuality >=quality ) //hightest LODs
{
  for(var i: int; i<LOD0.Count; i++)
		{
		obj = LOD0[i];
		obj.gameObject.SetActiveRecursively(true);
		obj1 = LOD1[i];
		obj1.gameObject.SetActiveRecursively(false);
		}
		
  
}
if (currentQuality <quality )//lowest lods
	{
for(var p: int; p<LOD0.Count; p++)
		{
		obj = LOD0[p];
		obj.gameObject.SetActiveRecursively(false);
		obj1 = LOD1[p];
		obj1.gameObject.SetActiveRecursively(true);
		}
	}
NotificationCenter.DefaultCenter().AddObserver(this, "QualityLevelIs");
}
function QualityLevelIs(notification:Notification)
{
currentQuality = notification.data;
if (currentQuality >=quality ) //hightest LODs
{
  for(var i: int; i<LOD0.Count; i++)
		{
		obj = LOD0[i];
		obj.gameObject.SetActiveRecursively(true);
		obj1 = LOD1[i];
		obj1.gameObject.SetActiveRecursively(false);
		}
  
}
if (currentQuality <quality )//lowest lods
	{
for(var p: int; p<LOD0.Count; p++)
		{
		obj = LOD0[p];
		obj.gameObject.SetActiveRecursively(false);
		obj1 = LOD1[p];
		obj1.gameObject.SetActiveRecursively(true);
		}
	}
}