#pragma strict
function Update () {
transform.localScale =  Vector3(Mathf.PingPong(Time.time, 3), Mathf.PingPong(Time.time, 3), Mathf.PingPong(Time.time, 3));
}