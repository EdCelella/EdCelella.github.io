/* Closes modals on page exit */
window.onbeforeunload = function(){
	$('#about').modal('hide');
	$('#projects').modal('hide');
	$('#contact').modal('hide');
};

/* Resest the data inputted into the contact form */
function resetForm($form) {
    $form.find('input:text, textarea').val('');
}

function sendEmail(){

	var emailForm = document.getElementById("email_form");
	var status = document.getElementById("status");

	try {

		var name = emailForm.elements["name"].value;
		var email = emailForm.elements["address"].value;
		var message = emailForm.elements["message"].value;

		var body = "Sender name: " + name + "\n\nMessage:\n\n" + message;

		Email.send({
		    SecureToken : "7061f7c5-72c3-4600-9f66-b44f8a9822db",
		    To : 'edwardcelella@gmail.com',
		    From : email,
		    Subject : "Website Enquiry",
		    Body : body
		}).then(
  			message => alert(message)
		);

		emailForm.elements["name"].value = "";
		emailForm.elements["address"].value = "";
		emailForm.elements["message"].value = "";

		status.classList.className = "success";
		status.innertText = "Thank You! Your message has successfully been opened in your email client for sending.";

	}
	catch(e){

		status.classList.className = "error";
		status.innertText = "Oops! Something went wrong and we couldn't send your message. Please try again, or email me using your mail client at edwardcelella@gmail.com.";

	}



}
