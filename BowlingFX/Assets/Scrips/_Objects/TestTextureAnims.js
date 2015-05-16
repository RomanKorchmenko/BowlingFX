#pragma strict
var FPS : float;
var secondToWait: float;
var Loop: boolean;
var frames: Texture[];
var currentFrame: int;
function Awake () {
currentFrame=0;

//StartCoroutine(Animate());
}
function FixedUpdate()
{
secondToWait = 1/FPS;
Animate();
}


function Animate()
{
yield WaitForSeconds(secondToWait);

if(currentFrame>frames.Length-1)
{
 currentFrame = 0;
} 
	currentFrame++;
guiTexture.texture = frames[currentFrame-1];



}