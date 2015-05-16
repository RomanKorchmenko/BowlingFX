#pragma strict
var defSize: float;
var multy: float=4;
var alpha: float;
var speed: float=5;
var timer: float;
var TimeOwn: float;
function Awake () {
defSize = guiTexture.pixelInset.height;
timer = 0;
TimeOwn = Time.time;
//guiTexture.color.a = 0.0;
////alpha = guiTexture.color.a;
//guiTexture.pixelInset.height = defSize*multy;
//guiTexture.pixelInset.width = defSize*multy;
//guiTexture.pixelInset.x = -(defSize*multy)/2;
//guiTexture.pixelInset.y = -(defSize*multy)/2;
}

function Update () {
var size: float;
timer += Time.deltaTime / speed;
size = Mathf.Lerp(defSize*multy, defSize, timer);
alpha = Mathf.Lerp(0, 1, timer);
guiTexture.color.a = alpha;
guiTexture.pixelInset.height = size;
guiTexture.pixelInset.width = size;
guiTexture.pixelInset.x = -(guiTexture.pixelInset.height)/2;
guiTexture.pixelInset.y  = -(guiTexture.pixelInset.height)/2;
}