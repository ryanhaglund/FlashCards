var card_number : int;
var ans_arr = new Array();
public static var second_attempt = new Array();
public static var half_points : int;
var second_attempt_pos : int;
var cor_pos : int;
var end_first;

function OnLevelWasLoaded()
{
	ans_arr.Clear();
	second_attempt.Clear();
	card_number = 0;
	half_points = 0;
	second_attempt_pos = 0;
	cor_pos = 0;
	ans_arr.length = 5;
	load_card();
	populate_ans_arr();
	load_answers();
}

function load_card()
{
	//Debug.Log("hit load_card");
	transform.Find("obj_term").gameObject.GetComponent(TextMesh).text = "___________?";
	transform.Find("obj_definition").gameObject.GetComponent(TextMesh).text = load_data.arr_definition[card_number];
	transform.Find("obj_organ_system").gameObject.GetComponent(TextMesh).text = load_data.arr_organ_system[card_number];
	transform.Find("obj_common_name").gameObject.GetComponent(TextMesh).text = load_data.arr_common_name[card_number];
	transform.Find("obj_img").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load(load_data.arr_image[card_number],Sprite);
}

function load_answers()
{
	//Debug.Log("hit load answers");
	transform.Find("ans_one").gameObject.GetComponent(TextMesh).text = load_data.arr_term[ ans_arr[0] ];
	transform.Find("ans_two").gameObject.GetComponent(TextMesh).text = load_data.arr_term[ ans_arr[1] ];
	transform.Find("ans_three").gameObject.GetComponent(TextMesh).text = load_data.arr_term[ ans_arr[2] ];
	transform.Find("ans_four").gameObject.GetComponent(TextMesh).text = load_data.arr_term[ ans_arr[3] ];
	transform.Find("ans_five").gameObject.GetComponent(TextMesh).text = load_data.arr_term[ ans_arr[4] ];
}


function populate_ans_arr()
{
	//Debug.Log("hit populate");
	var hold : int;
	cor_pos = Random.Range(0, 5);
	//hold = Random.Range(0, load_data.arr_term.length);
	for(var i : int = 0; i < 5; i++)
	{
		if(i == cor_pos)
		{
			ans_arr[i] = card_number;
		}
		else
		{
			var same = true;
			while(same == true) 
			{	
				same = false;
				hold = Random.Range(0, load_data.arr_term.length);
				for(var j : int = 0; j < 5; j++)
				{
					if(hold == card_number || hold == ans_arr[j])
					{
						same = true;
					}
				}
			}
			ans_arr[i] = hold;
		}
	}
}

function check_answer(answer)
{
	transform.Find("ans_one").gameObject.GetComponent(BoxCollider).collider.enabled = false;
	transform.Find("ans_two").gameObject.GetComponent(BoxCollider).collider.enabled = false;
	transform.Find("ans_three").gameObject.GetComponent(BoxCollider).collider.enabled = false;
	transform.Find("ans_four").gameObject.GetComponent(BoxCollider).collider.enabled = false;
	transform.Find("ans_five").gameObject.GetComponent(BoxCollider).collider.enabled = false;
	
	if(answer == "ans_one" && cor_pos == 0)
	{
		Debug.Log("correct");
		if(end_first != true)
		{
			display_correct();			
		}
		else if(end_first == true)
		{
			display_correct2();
		}
		transform.Find("obj_term").gameObject.GetComponent(TextMesh).text = load_data.arr_term[card_number];
		//yield WaitForSeconds (5);
		next();
	}
	else if(answer == "ans_two" && cor_pos == 1)
	{
		Debug.Log("correct");
		if(end_first != true)
		{
			display_correct();			
		}
		else if(end_first == true)
		{
			display_correct2();
		}
		transform.Find("obj_term").gameObject.GetComponent(TextMesh).text = load_data.arr_term[card_number];
		//yield WaitForSeconds (5);
		next();
	}
	else if(answer == "ans_three" && cor_pos == 2)
	{
		Debug.Log("correct");
		if(end_first != true)
		{
			display_correct();			
		}
		else if(end_first == true)
		{
			display_correct2();
		}
		transform.Find("obj_term").gameObject.GetComponent(TextMesh).text = load_data.arr_term[card_number];
		//yield WaitForSeconds (5);
		next();
	}
	else if(answer == "ans_four" && cor_pos == 3)
	{
		Debug.Log("correct");
		if(end_first != true)
		{
			display_correct();			
		}
		else if(end_first == true)
		{
			display_correct2();
		}
		transform.Find("obj_term").gameObject.GetComponent(TextMesh).text = load_data.arr_term[card_number];
		//yield WaitForSeconds (5);
		next();
	}
	else if(answer == "ans_five" && cor_pos == 4)
	{
		Debug.Log("correct");
		if(end_first != true)
		{
			display_correct();			
		}
		else if(end_first == true)
		{
			display_correct2();
		}
		transform.Find("obj_term").gameObject.GetComponent(TextMesh).text = load_data.arr_term[card_number];
		//yield WaitForSeconds (5);
		next();
	}
	else
	{
		Debug.Log("incorrect");
		if(second_attempt.length == 0 && end_first != true)
		{
			display_incorrect();
			second_attempt.Push(card_number);
		}
		else if(second_attempt[second_attempt.length-1] != card_number && end_first != true)
		{
			display_incorrect();
			second_attempt.Push(card_number);
		}
		next();
	}
}

function display_correct()
{
	//Debug.Log("card number:" + card_number);
	switch(card_number)
	{
		case 0:
			transform.Find("card_one").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/green_icon" ,Sprite);
			break;
		case 1:
			transform.Find("card_two").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/green_icon" ,Sprite);
			break;
		case 2:
			transform.Find("card_three").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/green_icon" ,Sprite);
			break;
		case 3:
			transform.Find("card_four").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/green_icon" ,Sprite);
			break;
		case 4:
			transform.Find("card_five").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/green_icon" ,Sprite);
			break;
		case 5:
			transform.Find("card_six").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/green_icon" ,Sprite);
			break;
		case 6:
			transform.Find("card_seven").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/green_icon" ,Sprite);
			break;
		case 7:
			transform.Find("card_eight").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/green_icon" ,Sprite);
			break;
		case 8:
			transform.Find("card_nine").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/green_icon" ,Sprite);
			break;
		case 9:
			transform.Find("card_ten").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/green_icon" ,Sprite);
			break;
		default:
			break;
	}
}

function display_incorrect()
{
	//Debug.Log("card number:" + card_number);
	switch(card_number)
	{
		case 0:
			transform.Find("card2_one").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/white_icon" ,Sprite);
			break;
		case 1:
			transform.Find("card2_two").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/white_icon" ,Sprite);
			break;
		case 2:
			transform.Find("card2_three").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/white_icon" ,Sprite);
			break;
		case 3:
			transform.Find("card2_four").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/white_icon" ,Sprite);
			break;
		case 4:
			transform.Find("card2_five").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/white_icon" ,Sprite);
			break;
		case 5:
			transform.Find("card2_six").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/white_icon" ,Sprite);
			break;
		case 6:
			transform.Find("card2_seven").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/white_icon" ,Sprite);
			break;
		case 7:
			transform.Find("card2_eight").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/white_icon" ,Sprite);
			break;
		case 8:
			transform.Find("card2_nine").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/white_icon" ,Sprite);
			break;
		case 9:
			transform.Find("card2_ten").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/white_icon" ,Sprite);
			break;
		default:
			break;
	}
}

function display_correct2()
{
	//Debug.Log("card number:" + card_number);
	half_points++;
	switch(card_number)
	{
		case 0:
			transform.Find("card2_one").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/halfgreen_icon",Sprite);
			break;
		case 1:
			transform.Find("card2_two").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/halfgreen_icon",Sprite);
			break;
		case 2:
			transform.Find("card2_three").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/halfgreen_icon",Sprite);
			break;
		case 3:
			transform.Find("card2_four").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/halfgreen_icon",Sprite);
			break;
		case 4:
			transform.Find("card2_five").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/halfgreen_icon",Sprite);
			break;
		case 5:
			transform.Find("card2_six").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/halfgreen_icon",Sprite);
			break;
		case 6:
			transform.Find("card2_seven").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/halfgreen_icon",Sprite);
			break;
		case 7:
			transform.Find("card2_eight").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/halfgreen_icon",Sprite);
			break;
		case 8:
			transform.Find("card2_nine").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/halfgreen_icon",Sprite);
			break;
		case 9:
			transform.Find("card2_ten").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("Sprites/halfgreen_icon",Sprite);
			break;
		default:
			break;
	}
}

function next()
{

	transform.Find("ans_one").gameObject.GetComponent(BoxCollider).collider.enabled = true;
	transform.Find("ans_two").gameObject.GetComponent(BoxCollider).collider.enabled = true;
	transform.Find("ans_three").gameObject.GetComponent(BoxCollider).collider.enabled = true;
	transform.Find("ans_four").gameObject.GetComponent(BoxCollider).collider.enabled = true;
	transform.Find("ans_five").gameObject.GetComponent(BoxCollider).collider.enabled = true;

	if(end_first != true)
	{	
		if(load_data.arr_term.length-1 == card_number)
		{
			Debug.Log("load incorrect or unsure cards again in some random order");
			end_first = true;
			card_number = 0;
			next();
		}
		else if(load_data.arr_term.length-1 > card_number)
		{
			card_number++;
			load_card();
			populate_ans_arr();
			load_answers();
		}
	}
	else if(second_attempt.length != 0)
	{
		if(second_attempt.length == second_attempt_pos)
		{
			Application.LoadLevel("score");
		}
		else if(second_attempt.length > second_attempt_pos)
		{
			card_number = second_attempt[second_attempt_pos];
			load_card();
			populate_ans_arr();
			load_answers();
			second_attempt_pos++;
		}
	}
	else
	{
		Application.LoadLevel("main_menu");
	}
}


function get_card_number()
{
	return card_number;
}