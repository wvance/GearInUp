// Template.userLoggedout.events({
// 	"click #facebookLogin": function(e, tmpl){
// 		Meteor.loginWithFacebook({ requestPermissions: ['email']},
// 		function (error) {
// 		    if (error) {
// 		    	window.alert("Error: Login Failed");
// 		        return console.log(error);
// 		    }
// 		    else {
// 		    	return console.log("Success");
// 		    }
// 		});
// 	}
// });

// Template.userLoggedin.events({
// 	"click #logout": function(e, tmpl){
// 		Meteor.logout(function (err){
// 			if(err){
// 				window.alert("Error2");
// 			} else{
// 				//Show alert that says logged out
// 			}
// 		});
// 	}
// });

