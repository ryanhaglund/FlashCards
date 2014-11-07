function Start () 
{
	transform.Find("score_value").gameObject.GetComponent(TextMesh).text = (100-(test_card.second_attempt.length*10)) + (test_card.half_points*5) + "/100";
	
	if(test_card.second_attempt.length != 0 || test_card.second_attempt.length != null)
	{
		for(var i : int = 0; i < test_card.second_attempt.length; i++)
		{
			switch(i)
			{
				case 0:
					transform.Find("rev_one").gameObject.GetComponent(TextMesh).text = load_data.arr_term[ test_card.second_attempt[i] ];
					break;
				case 1:
					transform.Find("rev_two").gameObject.GetComponent(TextMesh).text = load_data.arr_term[ test_card.second_attempt[i] ];
					break;
				case 2:
					transform.Find("rev_three").gameObject.GetComponent(TextMesh).text = load_data.arr_term[ test_card.second_attempt[i] ];
					break;
				case 3:
					transform.Find("rev_four").gameObject.GetComponent(TextMesh).text = load_data.arr_term[ test_card.second_attempt[i] ];
					break;
				case 4:
					transform.Find("rev_five").gameObject.GetComponent(TextMesh).text = load_data.arr_term[ test_card.second_attempt[i] ];
					break;
				case 5:
					transform.Find("rev_six").gameObject.GetComponent(TextMesh).text = load_data.arr_term[ test_card.second_attempt[i] ];
					break;
				case 6:
					transform.Find("rev_seven").gameObject.GetComponent(TextMesh).text = load_data.arr_term[ test_card.second_attempt[i] ];
					break;
				case 7:
					transform.Find("rev_eight").gameObject.GetComponent(TextMesh).text = load_data.arr_term[ test_card.second_attempt[i] ];
					break;
				case 8:
					transform.Find("rev_nine").gameObject.GetComponent(TextMesh).text = load_data.arr_term[ test_card.second_attempt[i] ];
					break;
				case 9:
					transform.Find("rev_ten").gameObject.GetComponent(TextMesh).text = load_data.arr_term[ test_card.second_attempt[i] ];
					break;
			}
		}
	}
	else
	{
		transform.Find("rev_one").gameObject.GetComponent(TextMesh).text = "you don't think it be like it is but it do";
	}
}
