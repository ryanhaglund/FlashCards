var card : GameObject;

function OnMouseDown()
{
	if(this.name == "Next")
	{
		card.GetComponent("change_card_data").next();
	}
	else if(this.name == "Previous")
	{
		card.GetComponent("change_card_data").prev();
	}
}
