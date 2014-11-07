public static var arr_definition = new Array();
public static var arr_common_name = new Array();
public static var arr_organ_system = new Array();
public static var arr_term = new Array();
public static var arr_image = new Array();
public static var arr_sound = new Array();

static function RandomizeArray()
{
    for (var i = arr_term.length - 1; i > 0; i--) 
    {
        var r = Random.Range(0,i);
        //term
        var tmp = arr_term[i];
        arr_term[i] = arr_term[r];
        arr_term[r] = tmp;
        //definition
        tmp = arr_definition[i];
        arr_definition[i] = arr_definition[r];
        arr_definition[r] = tmp;
        //organ system
        tmp = arr_organ_system[i];
        arr_organ_system[i] = arr_organ_system[r];
        arr_organ_system[r] = tmp;
        //common name
        tmp = arr_common_name[i];
        arr_common_name[i] = arr_common_name[r];
        arr_common_name[r] = tmp;
        //image
        tmp = arr_image[i];
        arr_image[i] = arr_image[r];
        arr_image[r] = tmp;
        //sound
        tmp = arr_sound[i];
        arr_sound[i] = arr_sound[r];
        arr_sound[r] = tmp;
        
    }
}

function OnMouseDown()
{
	card_number = 0;
	arr_term.Clear();
	arr_definition.Clear();
	arr_organ_system.Clear();
	arr_common_name.Clear();
	arr_image.Clear();
	arr_sound.Clear();

	if(this.name == "Level_one")
	{
		//entry one
		arr_term.Push("Bronchus");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("Respiratory");
		arr_common_name.Push("Windpipe");
		arr_image.Push("Sprites/Bronchus");
		arr_sound.Push("Sounds/Bronchus");
		
		//entry two
		arr_term.Push("Carcinogen");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("Cardiovascular");
		arr_common_name.Push("Cancer");
		arr_image.Push("Sprites/Carcinogen");
		arr_sound.Push("Sounds/Carcinogen");
		
		//entry three
		arr_term.Push("Cardiogram");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("Cardiovascular");
		arr_common_name.Push("Heart");
		arr_image.Push("Sprites/Cardiogram");
		arr_sound.Push("Sounds/Cardiogram");
		
		//entry four
		arr_term.Push("Carpometacarpal");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("Skeletal");
		arr_common_name.Push("Wrist");
		arr_image.Push("Sprites/Carpometacarpal");
		arr_sound.Push("Sounds/Carpometacarpal");
		
		//entry five
		arr_term.Push("Segmentation");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("Reproductive");
		arr_common_name.Push("To divide");
		arr_image.Push("Sprites/Segmentation");
		arr_sound.Push("Sounds/Segmentation");
		
		//entry six
		arr_term.Push("Colodyspepsia");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("Digestive");
		arr_common_name.Push("Colon");
		arr_image.Push("Sprites/Col");
		arr_sound.Push("Sounds/Bronchus");
		
		//entry seven
		arr_term.Push("Corticotropic");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("Integumentary");
		arr_common_name.Push("Cortex");
		arr_image.Push("Sprites/Cortic");
		arr_sound.Push("Sounds/Bronchus");
		
		//entry eight
		arr_term.Push("Cuticularization");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("Integumentary");
		arr_common_name.Push("Skin: Subcutaneous");
		arr_image.Push("Sprites/Cut");
		arr_sound.Push("Sounds/Bronchus");
		
		//entry nine
		arr_term.Push("Cutaneous");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("Integumentary");
		arr_common_name.Push("Skin");
		arr_image.Push("Sprites/Cutane");
		arr_sound.Push("Sounds/Bronchus");
		
		//entry ten
		arr_term.Push("Cystectomy");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("Excretory");
		arr_common_name.Push("Bladder");
		arr_image.Push("Sprites/Cyst");
		arr_sound.Push("Sounds/Bronchus");
	}
	else if(this.name == "Level_two")
	{
		//entry eleven
		arr_term.Push("Cytoplasm");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("N/A");
		arr_common_name.Push("Gelatinous cell substance");
		arr_image.Push("Sprites/Cyt");
		arr_sound.Push("Sounds/Bronchus");
		
		//entry twelve
		arr_term.Push("Dendrite");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("Nervous");
		arr_common_name.Push("Tree: Dendrite");
		arr_image.Push("Sprites/Dendr");
		arr_sound.Push("Sounds/Bronchus");
		
		//entry thirteen
		arr_term.Push("Dentin");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("Digestive");
		arr_common_name.Push("Tooth");
		arr_image.Push("Sprites/Dent");
		arr_sound.Push("Sounds/Bronchus");
		
		//entry fourteen
		arr_term.Push("Dermoid");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("Integumentary");
		arr_common_name.Push("Skin: Dermis");
		arr_image.Push("Sprites/Derm");
		arr_sound.Push("Sounds/Bronchus");
		
		//entry fifteen
		arr_term.Push("Dorsal");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("Muscular");
		arr_common_name.Push("Back: Dorsal");
		arr_image.Push("Sprites/Dors");
		arr_sound.Push("Sounds/Bronchus");
		
		//entry sixteen
		arr_term.Push("Hydro");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("N/A");
		arr_common_name.Push("Water");
		arr_image.Push("Sprites/Hydr");
		arr_sound.Push("Sounds/Bronchus");
		
		//entry seventeen
		arr_term.Push("Lipid");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("N/A");
		arr_common_name.Push("Fat: Lipids");
		arr_image.Push("Sprites/Lipid");
		arr_sound.Push("Sounds/Bronchus");
		
		//entry eighteen
		arr_term.Push("Melanin");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("N/A");
		arr_common_name.Push("Cell color pigmentation");
		arr_image.Push("Sprites/Melanin");
		arr_sound.Push("Sounds/Bronchus");
		
		//entry nineteen
		arr_term.Push("Necrosis");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("N/A");
		arr_common_name.Push("Death");
		arr_image.Push("Sprites/Necro");
		arr_sound.Push("Sounds/Bronchus");
		
		//entry twenty
		arr_term.Push("Nephro");
		arr_definition.Push("*****Definition pending*****");
		arr_organ_system.Push("Excretory");
		arr_common_name.Push("Kidney");
		arr_image.Push("Sprites/Nephr");
		arr_sound.Push("Sounds/Bronchus");
	}
	total_cards = arr_term.length;
	RandomizeArray();
	if(PlayerPrefs.GetString("main_menu_selection") == "test_yourself")
	{
		Application.LoadLevel("test");
	}
	else if(PlayerPrefs.GetString("main_menu_selection") == "review_cards")
	{
		Application.LoadLevel("review");
	}
}
