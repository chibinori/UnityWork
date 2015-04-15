#pragma strict

function Start () {
    Death.status = 0;
}

function Update () {
	if (Death.status == 0) {
		transform.Translate(transform.forward * 0.01f);
	}
}


function OnCollisionEnter (col: Collision) {

	print("col_tag:"+col.gameObject.tag);

	if (col.gameObject.tag == "Floor") {
	
		if (Death.status == 0) {
		 	Death.status = 1;
	 	}
	 	 
	
	} else if (col.gameObject.tag == "Papa") {
		if (Death.status == 0) {
			Death.status = 2;
		}
	}
	
}
