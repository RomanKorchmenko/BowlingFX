#pragma strict
   // Draws the Light bulb icon at position of the object.
    function OnDrawGizmos () {
        Gizmos.DrawIcon (transform.position, "Light Gizmo.tiff");
}
