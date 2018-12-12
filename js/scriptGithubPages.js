/* Closes modals on page exit */
window.onbeforeunload = function(){
	$('#about').modal('hide');
	$('#projects').modal('hide');
	$('#contact').modal('hide');
};

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function sendEmail(){

	var emailForm = document.getElementById("email_form");
	var status = document.getElementById("status");

	status.classList.className = "error";

	try {

		var name = emailForm.elements["name"].value;
		var email = emailForm.elements["address"].value;
		var message = emailForm.elements["message"].value;

		if(name == "" || email == "" || message == ""){
			status.innerHTML = "Please fill out all fields before sending.";
		}
		else if(!validateEmail(email)){
			status.innerHTML = "Please enter a valid email address.";
		}
		else{

			var body = "Sender name: " + name + "\n\nMessage:\n\n" + message;
			
			Email.send({
			    SecureToken : "7061f7c5-72c3-4600-9f66-b44f8a9822db",
			    To : 'edwardcelella@gmail.com',
			    From : email,
			    Subject : "Website Enquiry",
			    Body : body
			})

			emailForm.reset();

			status.className = "success";
			status.innerHTML = "Thank You! Your message has been sent.";

		}

	}
	catch(e){
		
		status.innerHTML = "Oops! There was a problem with your submission. Please complete the form and try again, or email me using your mail client at edwardcelella@gmail.com.";

	}

	return false;

}