#pragma strict
function Start () {
NotificationCenter.DefaultCenter().AddObserver(this, "Play");
}

function Play()
{
Destroy(gameObject);
}