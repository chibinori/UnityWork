#pragma strict

function OnGUI () {

	 if (GUI.Button(Rect(Screen.width / 2 -125 , 200, 250,100), "START")) {
	 Application.LoadLevel("main");
	 }

}

