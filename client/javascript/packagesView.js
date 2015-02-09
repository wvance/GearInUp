Template.packagesView.events({
	'click .checkout-buttons': function(e){
		$(".checkout").fadeIn();
    	Session.set("hasRun", true);
	}
});