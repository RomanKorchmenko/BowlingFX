#pragma strict
var ScreenPictures: Texture2D[];
private var ScreenPicture = Texture2D;
private var count: int;
function Start()
{
count = Random.Range(0, ScreenPictures.Length);
this.guiTexture.texture = ScreenPictures[count];
}
