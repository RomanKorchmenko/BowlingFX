#pragma strict
var currentQuality: int;
function Start()
{
//QualitySettings.SetQualityLevel(2);
currentQuality = QualitySettings.GetQualityLevel();
//if(PlayerPrefs.GetInt("SaveQuality"))
//currentQuality = PlayerPrefs.GetInt("SaveQuality");
//else
//{	

//currentQuality = QualitySettings.GetQualityLevel();
//}
//QualitySettings.SetQualityLevel(currentQuality);
NotificationCenter.DefaultCenter().AddObserver(this, "QualityChanged");
}
function QualityChanged()
{
currentQuality = QualitySettings.GetQualityLevel();
NotificationCenter.DefaultCenter().PostNotification(this, "QualityLevelIs", currentQuality);
//PlayerPrefs.SetInt("SaveQuality", currentQuality);
}