#pragma strict
var lowMat: Material;
var hiMat: Material;
var currentQuality: int;
var qualityMy: int=2;
function Start()
{
currentQuality = QualitySettings.GetQualityLevel();
Quality();
NotificationCenter.DefaultCenter().AddObserver(this, "QualityChanged");
}
function QualityChanged()
{
currentQuality = QualitySettings.GetQualityLevel();
Quality();
}

function Quality()
{
if (currentQuality <qualityMy )
{
  this.renderer.material = lowMat;
}
if (currentQuality >=qualityMy )
	{
this.renderer.material = hiMat;
	}
}