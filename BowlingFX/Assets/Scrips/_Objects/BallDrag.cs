using UnityEngine;
using System.Collections;

public class BallDrag : SampleBase
{
    public GameObject dragObject;
     int dragFingerIndex = -1;
	float height;
	bool timerPause;
	public Camera mainCamera;
	public GameObject TutorialGO;
	void Start()
	{
		height = dragObject.transform.position.y;
//		NotificationCenter.DefaultCenter().AddObserver(this, "Pause");
	}
    void Update()
	{
		 //= gameObject.GetComponent<BallEmitterControlerGestures>();
		//timerPause = other.timerPause;
		//dragObject.transform.position= new Vector3(Mathf.Clamp(dragObject.transform.position.x, -8, 8), Mathf.Clamp(dragObject.transform.position.y, height, height+2), dragObject.transform.position.z);
	}
	
	void OnDrag( DragGesture gesture )
    {
		if(mainCamera.enabled==false)
			return;
		if(dragObject.collider.enabled==false)
			return;
         //first finger
        FingerGestures.Finger finger = gesture.Fingers[0];

        if( gesture.Phase == ContinuousGesturePhase.Started )
        {
            // dismiss this event if we're not interacting with our drag object
            if( gesture.Selection != dragObject )
                return;
//			print ("DragBall!");
            dragFingerIndex = finger.Index;
			TutorialGO.SendMessage("BallMoved");

        }
        else if( finger.Index == dragFingerIndex )  // gesture in progress, make sure that this event comes from the finger that is dragging our dragObject
        {
            if( gesture.Phase == ContinuousGesturePhase.Updated )
            {

                // update the position by converting the current screen position of the finger to a world position on the Z = 0 plane
                dragObject.transform.position = GetWorldPos( gesture.Position );
				dragObject.transform.position= new Vector3(Mathf.Clamp(dragObject.transform.position.x, -8, 8), height, 0);
            }
            else
            {
                // reset our drag finger index
				//dragObject.transform.position= new Vector3(Mathf.Clamp(dragObject.transform.position.x, -8, 8), height, 0);
                dragFingerIndex = -1;
            }
        }
    }
}
