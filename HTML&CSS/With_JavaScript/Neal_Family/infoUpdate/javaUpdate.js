var getInfo = document.getElementById("getInfo");
	
getInfo.addEventListener("submit", function(event)	{
	var zip = document.getElementById("zip").value,
		tomatchzip  = /(^\d{5}$)|(^\d{5}-\d{4}$)/,
		tomatchphone = /^\d{3}-\d{3}-\d{4}$/,
		fName = document.getElementById("fName").value,
		lName = document.getElementById("lName").value,
		email = document.getElementById("email").value,
		address = document.getElementById("address").value,
		city = document.getElementById("city").value,
		state = document.getElementById("state").value,
		phone = document.getElementById("phone").value;
		
	
	
	event.preventDefault();
	
	if (tomatchzip.test(zip))	
	{
		if( (email.indexOf("@") >= 0) && (email.indexOf(".") >=0) ) 
		{
			if(tomatchphone.test(phone))	
			{
				alert("everything is good");
			}
			else	
			{
				alert("The phone number must be formatted as follows 888-888-888");
			}
		}	
		else	
		{
			alert("The @ and . characters are required in the e-mail addresses.");
		}
	}
	else 
	{	
		alert("\t**Error**\nINVALID ZIP CODE!");	
	} 
	
	
	
}, false);