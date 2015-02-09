Template.contactUsForm.events({
	'submit form':function(event){
		event.preventDefault();
		
		var firstName = event.target.inputContactFirstName.value; 
		var lastName = event.target.inputContactLastName.value; 

		var customerEmail = event.target.inputContactEmail.value; 
		var inquiryDetails = event.target.inputContactInquiry.value;

		var formatEmail = firstName + " " + lastName + "\n" 
										+ inquiryDetails;

		if (firstName.length != 0 && lastName.length != 0 && customerEmail.length != 0 && inquiryDetails.length != 0 && formatEmail.length != 0){

			event.target.inputContactFirstName.value = "";
			event.target.inputContactLastName.value = "";
			event.target.inputContactEmail.value = "";
			event.target.inputContactInquiry.value = "";

			Meteor.call('sendEmail',
	            'wesley.vance@mac.com',
	            customerEmail,
	            'GearInUp Inquiry',
	            formatEmail);

			$('#contactUsModal').modal('show');
			console.log("Success");
		} else (console.log("Error: Form not complete"))
	}
});
