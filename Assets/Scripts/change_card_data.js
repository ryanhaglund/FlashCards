var card_number;

function Awake()
{
	card_number = 0;
	total_cards = load_data.arr_term.length;
}

function Start () 
{
	transform.Find("obj_term").gameObject.GetComponent(TextMesh).text = load_data.arr_term[card_number];
	transform.Find("obj_definition").gameObject.GetComponent(TextMesh).text = load_data.arr_definition[card_number];
	transform.Find("obj_organ_system").gameObject.GetComponent(TextMesh).text = load_data.arr_organ_system[card_number];
	transform.Find("obj_common_name").gameObject.GetComponent(TextMesh).text = load_data.arr_common_name[card_number];
	transform.Find("obj_img").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load(load_data.arr_image[card_number],Sprite);
}

function change_card()
{
	transform.Find("obj_term").gameObject.GetComponent(TextMesh).text = load_data.arr_term[card_number];
	transform.Find("obj_definition").gameObject.GetComponent(TextMesh).text = load_data.arr_definition[card_number];
	transform.Find("obj_organ_system").gameObject.GetComponent(TextMesh).text = load_data.arr_organ_system[card_number];
	transform.Find("obj_common_name").gameObject.GetComponent(TextMesh).text = load_data.arr_common_name[card_number];
	transform.Find("obj_img").gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load(load_data.arr_image[card_number],Sprite);
}

function next()
{
	if(load_data.arr_term.length-1 == card_number)
	{
		card_number = 0;
	}
	else if(load_data.arr_term.length-1 > card_number)
	{
		card_number++;
	}
	change_card();
}

function prev()
{
	if(card_number > 0)
	{
		card_number--;
	}
	else if(card_number == 0)
	{
		card_number = load_data.arr_term.length - 1;
	}
	change_card();
}

function get_card_number()
{
	return card_number;
}
