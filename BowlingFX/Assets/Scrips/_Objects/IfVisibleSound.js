#pragma strict
var sounds: AudioClip[];
var sound: AudioClip;
var other: Transform;
var max: float = 250;
function Start () {
other = Camera.main.transform;
}

function OnBecameVisible () {
var dist: float = Vector3.Distance(other.transform.position, transform.position);
sound = sounds[Random.Range(0, sounds.Length)];
audio.PlayOneShot(sound);
audio.volume = dist/max;
}

function OnBecameInvisible () {

}