#pragma strict
var nimus: float;
private var currentQuality: int;
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "QualityLevelIs");
currentQuality = QualitySettings.GetQualityLevel();
}

function LateUpdate () {
if(currentQuality>0) transform.localRotation.z = nimus*Mathf.Cos(0.2*Time.time);
}
function QualityLevelIs(notification:Notification)
{
currentQuality = notification.data;
}