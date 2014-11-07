var test_card : GameObject;

function OnMouseDown()
{
// This is a test line
	if(this.name == "ans_one")
	{
		this.gameObject.GetComponent(BoxCollider).collider.enabled = false;
		test_card.GetComponent("test_card").check_answer("ans_one");
	}
	else if(this.name == "ans_two")
	{
		this.gameObject.GetComponent(BoxCollider).collider.enabled = false;
		test_card.GetComponent("test_card").check_answer("ans_two");
	}
	else if(this.name == "ans_three")
	{
		this.gameObject.GetComponent(BoxCollider).collider.enabled = false;
		test_card.GetComponent("test_card").check_answer("ans_three");
	}
	else if(this.name == "ans_four")
	{
		this.gameObject.GetComponent(BoxCollider).collider.enabled = false;
		test_card.GetComponent("test_card").check_answer("ans_four");
	}
	else if(this.name == "ans_five")
	{
		this.gameObject.GetComponent(BoxCollider).collider.enabled = false;
		test_card.GetComponent("test_card").check_answer("ans_five");
	}
}