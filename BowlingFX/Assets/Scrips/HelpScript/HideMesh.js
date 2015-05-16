var hideChildren: boolean=false;

function Start () {
renderer.enabled = false;
if (hideChildren)
{
for (var child : Transform in transform) {
   child.renderer.enabled = false;
}
}
}