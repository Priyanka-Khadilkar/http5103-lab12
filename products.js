//LAB 10-DATA STORAGE: PRODUCTS PAGE
//alert("products");//DELETE AFTER CONFIRMING CONNECTION

//LAB 10-DATA STORAGE: INDEX PAGE
function init(){
	
	 var txtName = document.getElementById("newMsgBox");
	
	 if(localStorage.getItem("name") !== null)
	 {
	  txtName.innerHTML = "Welcome "  + localStorage.getItem("name");
	 }
	 document.body.style.backgroundColor = localStorage.getItem("backgroundcolor");
	

}

window.onload = init;

