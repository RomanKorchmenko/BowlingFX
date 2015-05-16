//var hasTouched: boolean = false;
//var lastPos:Vector2 = Vector3.zero;
//var someSpeedValue: float=0.01;
//
//function Update()
//{
//    if(!hasTouched && Input.touchCount == 1) // pressed
//    {
//        hasTouched = true;
//        lastPos = Input.touches[0].position;
//        }
//    else if(hasTouched && Input.touchCount == 1) // finger down
//    {
//        lastPos = Input.touches[0].position;
//        }
//    else if(hasTouched && Input.touchCount == 0) // released
//    {
//       var  direction:  Vector3 = Input.touches[0].position - lastPos;
//        var dir: Vector3 = direction.normalized;
//        rigidbody.AddForce(Vector3(dir.x*someSpeedValue, 0, dir.z*someSpeedValue));
//        hasTouched = false;
//    }
//}


var hasTouched: boolean = false;
var lastPos:Vector2 = Vector3.zero;
var oldPos:Vector2;
var someSpeedValue: float=0.01;
var dir: Vector2;
var  direction:  Vector2;
function Update()
{
    if(!hasTouched && Input.GetMouseButtonDown(2)) // pressed
    {
        hasTouched = true;
        oldPos = Input.mousePosition;
        }
    else if(hasTouched && Input.GetMouseButtonDown(2)) // finger down
    {
        lastPos = Input.mousePosition;
        }
    else if(hasTouched && Input.GetMouseButtonUp(2)) // released
    {
        direction = oldPos - lastPos;
        dir = direction.normalized;
        rigidbody.AddForce(Vector3(dir.y*1, 0, dir.x*someSpeedValue));
        hasTouched = false;
    }
}