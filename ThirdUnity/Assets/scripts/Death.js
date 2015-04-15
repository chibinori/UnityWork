#pragma strict

static var status: int;

var style : GUIStyle;

function Start(){

style.fontSize = 40;
style.normal.textColor = Color.red;
}

function OnGUI () {


	if (status == 1) {
	
		GUI.Label(Rect(Screen.width /2 -200, 350, 400, 160),"GAME OVER" ,style);
		
		if (GUI.Button(Rect(Screen.width / 2 -125 , 200, 250,100), "START")) {
	 		Application.LoadLevel("title");
	 	}
	 	
	
	} else if (status == 2) {
		GUI.Label(Rect(Screen.width /2 -200, 350, 400, 160),"GAME CLEAR" ,style);
		
		if (GUI.Button(Rect(Screen.width / 2 - 125 , 200, 250,100), "START")) {
	 		Application.LoadLevel("title");
	 	}
	} else if (status == 0) {
	
	} else {
		GUI.Label(Rect(Screen.width /2 -200, 350, 400, 160),"ERROR" ,style);
	}

}
