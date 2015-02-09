Template.submitProduct.events({
	'submit form':function(event){
		event.preventDefault();

		// if (user.loggedOn)

		var firstName = event.target.inputFirstName.value; 
		var lastName = event.target.inputLastName.value; 

		var phoneNumber = event.target.inputPhoneNumber.value;
		var customerEmail = event.target.inputEmail.value; 
		var customerAddress = event.target.inputAddress.value;
		var customerPackage = event.target.inputPackage.value;
		var accessories = event.target.inputAccessories.value;
		var packageLength = event.target.inputLength.value;
		var tripDetails = event.target.inputTripDetails.value;

		var formatEmail = firstName + " " + lastName + "\n" 
										+ phoneNumber + "\n" 
										+ customerAddress + "\n"
										+ customerPackage + " "+ packageLength + "\n" 
										+ tripDetails;
		
		if (firstName.length != 0 && lastName.length != 0 && customerEmail.length != 0 && formatEmail.length > 20){
			event.target.inputFirstName.value = "";
			event.target.inputLastName.value = "";
			event.target.inputPhoneNumber.value="";
			event.target.inputEmail.value="";
			event.target.inputAddress.value="";
			event.target.inputPackage.value="";
			event.target.inputAccessories.value="";
			event.target.inputLength.value="";
			event.target.inputTripDetails.value="";

			Meteor.call('sendEmail',
	          'wesley.vance@mac.com',
	          customerEmail,
	          'GearInUp Inquiry',
	          formatEmail);

			console.log("Success");
			$('#submitProductModal').modal('hide');
			$('#thankyouModal').modal('show');
		} else (console.log("Error: Form not complete"))
	}
});