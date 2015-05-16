#pragma strict
var FirstCamLandscape: Camera;
var FirstCamPortrait: Camera;
var KegliCam: Camera;
var PauseCam: Camera;
var timerPause: boolean;
var orient: String;
var cameraPin: boolean;
function Start()
{
if (Input.deviceOrientation == DeviceOrientation.LandscapeLeft || Input.deviceOrientation == DeviceOrientation.LandscapeRight)
orient = "Landscape";
if (Input.deviceOrientation == DeviceOrientation.Portrait || Input.deviceOrientation == DeviceOrientation.PortraitUpsideDown)
orient = "Portrait";
NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
KegliCam.enabled= false;
PauseCam.enabled = false;

}
function OnTriggerEnter (other : Collider) {
if (other.tag == "ball"){
cameraPin=true;
//CameraReset();
}
}
function Update()
{
if (Input.deviceOrientation == DeviceOrientation.LandscapeLeft || Input.deviceOrientation == DeviceOrientation.LandscapeRight)
orient = "Landscape";
if (Input.deviceOrientation == DeviceOrientation.Portrait || Input.deviceOrientation == DeviceOrientation.PortraitUpsideDown)
orient = "Portrait";
if(timerPause)
{
PauseCameraEanable();
}
if(!timerPause)
{
    FirstCameraEnable();
  }
}
function CameraReset()
{
print("CameraPin");
FirstCamPortrait.enabled = false;
FirstCamLandscape.enabled = false;
KegliCam.enabled= true;
PauseCam.enabled = false;
}
function OnTriggerExit()
{
yield WaitForSeconds(8);
cameraPin=false;
//FirstCameraEnable();
}

function PauseCameraEanable()
{
FirstCamLandscape.enabled = false;
FirstCamPortrait.enabled = false;
KegliCam.enabled = false;
PauseCam.enabled = true;
}
function FirstCameraEnable()
{
if(!cameraPin)
{
KegliCam.enabled = false;
PauseCam.enabled = false;
if (Application.platform == RuntimePlatform.Android || Application.platform == RuntimePlatform.IPhonePlayer)
	{
if (orient == "Portrait") 
		{
FirstCamPortrait.enabled = true;
FirstCamLandscape.enabled = false;
		}
if (orient == "Landscape")
		{
FirstCamPortrait.enabled = false;
FirstCamLandscape.enabled = true;
		}
	}
if (Application.platform != RuntimePlatform.Android && Application.platform != RuntimePlatform.IPhonePlayer)
    {
    FirstCamLandscape.enabled = true;
    }
    }
    if(cameraPin)
    {
     FirstCamPortrait.enabled = false;
     FirstCamLandscape.enabled = false;
     KegliCam.enabled = true;
     PauseCam.enabled = false;
     }
}

function Pause(notification: Notification)
{
if(notification.data==1) timerPause=true;
if(notification.data==0) timerPause=false;
}