var card : GameObject;

function OnMouseDown()
{
	audio.clip = Resources.Load(load_data.arr_sound[card.GetComponent("change_card_data").get_card_number()],AudioClip);
	audio.Play();
}