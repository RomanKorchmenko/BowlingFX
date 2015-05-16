	// Rotate the object to match the device's orientation
	// in space.
	var giro: Gyroscope;
	var MinClamp: float=0;
	var MaxClamp: float=180;
	function Start()
	{
	Screen.orientation = ScreenOrientation.Portrait;
	giro = Input.gyro;
	giro.enabled = true;
	}
	function Update () {
		//transform.rotation = Quaternion.Inverse(giro.attitude);
		transform.rotation.x = giro.attitude.x;
		transform.rotation.z = giro.attitude.z;
		
	}
	function LateUpdate()
	{
		transform.rotation.eulerAngles = new Vector3(
          Mathf.Clamp(transform.rotation.eulerAngles.x, MinClamp, MaxClamp),
          Mathf.Clamp(transform.rotation.eulerAngles.y, MinClamp, MaxClamp),
           Mathf.Clamp(transform.rotation.eulerAngles.z, MinClamp, MaxClamp)
     );
	}