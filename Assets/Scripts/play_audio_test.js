var card : GameObject;

function OnMouseDown()
{
	audio.clip = Resources.Load("Sounds/duck",AudioClip);
	audio.Play();
}