#pragma strict

function Start () {

}

function GyroOn () {
NotificationCenter.DefaultCenter().PostNotification(this, "UseGyro");

}