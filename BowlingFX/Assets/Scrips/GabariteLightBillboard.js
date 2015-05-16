//var m_Camera: Camera;
 //var target: Transform;
 function Start()
 {
// m_Camera= Camera.main;

 }
    function LateUpdate()
    {
   var target = GameObject.Find("Main Camera");
   //target = transform.Find("CameraGameObject");
   transform.LookAt(target.transform);
    }