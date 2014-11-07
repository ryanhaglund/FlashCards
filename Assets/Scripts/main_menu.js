function OnMouseDown()
{
	if(this.name == "review_cards")
	{
		PlayerPrefs.SetString("main_menu_selection", "review_cards");
		Application.LoadLevel("level_selection");
	}
	else if(this.name == "test_yourself")
	{
		PlayerPrefs.SetString("main_menu_selection", "test_yourself");
		Application.LoadLevel("level_selection");
	}
}