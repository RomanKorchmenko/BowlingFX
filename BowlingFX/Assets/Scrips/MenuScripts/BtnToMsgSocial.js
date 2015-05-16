#pragma strict
enum SocialType {leaderboard, achievements};
var current:SocialType;
var SocialGO : GameObject;
function OnEnable()
{
SocialGO = GameObject.Find("___SocialServices");
}

function OnMouseDown()
{
switch (current) {
			case current.achievements: SocialGO.SendMessage ("ShowAchievements", null, SendMessageOptions.DontRequireReceiver); break;
			case current.leaderboard: SocialGO.SendMessage ("ShowAllLeaderboard", null, SendMessageOptions.DontRequireReceiver); break;
} 
}
