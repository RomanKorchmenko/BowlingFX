var IsInGameBall: boolean;
function OnTriggerStay(collisionInfo : Collider) {
       if (collisionInfo.gameObject.tag == "ball" )
{
IsInGameBall=true;
}
}
function OnTriggerExit()
{
IsInGameBall=false;
}