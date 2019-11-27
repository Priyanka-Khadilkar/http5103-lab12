//LAB 10-DATA STORAGE: INDEX PAGE
function init(){
	
	 var txtName = document.getElementById("inName");
	 var colorVal = document.getElementById("inColor");
	 var infoForm = document.getElementsByTagName("form")[0];
	 var heading = document.getElementById("newMsgBox");
	 var btnDel = document.getElementById("btnDel");
	
	
	 txtName.value = localStorage.getItem("name");
	 if(localStorage.getItem("name") !== null)
	 {
	  heading.innerHTML = "Welcome "  + localStorage.getItem("name");
	 }
	 document.body.style.backgroundColor = localStorage.getItem("backgroundcolor");
	 colorVal.value = localStorage.getItem("backgroundcolor");
	
	infoForm.onsubmit = function (){
	   localStorage.setItem("backgroundcolor",colorVal.value);
	   localStorage.setItem ("name",txtName.value);  
       txtName.value = localStorage.getItem("name");
	   colorVal.value = localStorage.getItem("backgroundcolor");	   
    }
	
	btnDel.onclick = function ()
	{
		localStorage.clear();
		location.reload();
	}

}

window.onload = init;

