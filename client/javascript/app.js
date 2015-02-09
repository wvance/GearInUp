if (Meteor.isClient){
	var app = angular.module('gearinup',['angular-meteor']);

	Meteor.startup(function () {
		angular.bootstrap(document, ['gearinup']);
	});

	app.controller("StoreController", function(){
    	this.products=cameras;
    	this.accessories=accessories;
  	});

  	app.controller("ReviewController",function(){
	  	this.review={};
	  	this.addReview=function(product){
	    	product.reviews.push(this.review);
	    	this.review={};
	    };
	    this.review.createdOn = Date.now();
 	 });

  app.controller("PanelController", function(){
    this.tab=1;

    this.selectTab=function(setTab){
     	this.tab=setTab;
    };
  
    this.isSelected = function(checkTab){
      	return this.tab === checkTab;
    };

  });
	
  var cameras = [
  { 
  	name: 'GoPro HERO3: Black Edition',  
  	description: "Wearable and gear mountable, waterproof to 197' (60m), capable of capturing ultra-wide 1440p 48fps, 1080p 60 fps and 720p 120 fps video and 12MP photos at a rate of 30 photos per second, the HERO3: Black Edition is the world's most versatile camera.",
  	canPurchase: true,
  	soldOut: false,
  	images: [
	  	{
	  		full: 'resources/cameras/hero3.jpg',
	  		thumb: 'resources/Thumb.jpg'
	  	},
	  	{
	  		full: 'resources/accessories/touchBacCam.jpg',
	  		thumb: 'resources/Thumb.jpg'
	  	}],
	  reviews: [
	  	{
	  		stars: 5,
	  		body:"Awesome camera.",
	  		author: "wes@example.com",
	  		createdOn: 1397490980837
	  	},{
	  		stars:1,
	  		body:"Awesome Deal!",
	  		author:"sab@example.com",
	  		createdOn: 1397490980837
	  	}],
	  prices: [
	  	{
	  		days: "1 Day", 
	  		ammount: 25
	  	},{
	  		days: "3 Days",
	  		ammount: 35
	  	},{
	  		days: "7 Days", 
	  		ammount: 45
	  	},{
	  		days: "14 Days",
	  		ammount: 50
	  	},{
	  		days: "30 Days",
	  		ammount: 65
	  	}]
  },
  {
  	name: 'GoPro HERO3: Silver Edition',
  	description: "HERO3 Silver captures gorgeous, professional-quality 1080p60 video and 10MP photos at speeds of up to 10 frames per second. Built-in Wi-Fi enables you to use the GoPro App to control the camera remotely, preview shots and share your favorites on Facebook, Twitter and more.",
  	canPurchase:true,
  	soldOut:false,
  	images: [
	  	{
	  		full: 'resources/cameras/hero3-silver.jpg',
	  		thumb: 'resources/Thumb.jpg'
	  	},
	  	{
	  		full: 'resources/accessories/touchBacCam.jpg',
	  		thumb: 'resources/Thumb.jpg'
	  	}],
	  reviews: [
	  	{
	  		stars: 5,
	  		body:"I love this package2!",
	  		author: "wes2@example.com",
	  		createdOn:1397490980837
	  	},{
	  		stars:1,
	  		body:"Awesome Deal2!",
	  		author:"sab2@example.com",
	  		createdOn: 1397490980837
	  	}],
	  prices: [
	  	{
	  		days: "1 Day", 
	  		ammount: 20
	  	},{
	  		days: "3 Days",
	  		ammount: 30
	  	},{
	  		days: "7 Days", 
	  		ammount: 40
	  	},{
	  		days: "14 Days",
	  		ammount: 45
	  	},{
	  		days: "30 Days",
	  		ammount: 60
	  	}]
  },
  {
  	name: 'GoPro HD HERO2',
  	description: "The GoPro HD HERO2 is waterproof to 197' (60M) and boasting an immersive 170° wide-angle lens, the HD HERO2 has ushered in a new era of image capture. Professional quality 30 fps 1080p and 60 fps 720p video, combined with 11 megapixel still photo capture.",
  	canPurchase:true,
  	soldOut:false,
  	images: [
	  	{
	  		full: 'resources/cameras/hero2.jpg',
	  		thumb: 'resources/Thumb.jpg'
	  	},
	  	{
	  		full: 'resources/accessories/touchBacCam.jpg',
	  		thumb: 'resources/Thumb.jpg'
	  	}],
	  reviews: [
	  	{
	  		stars: 5,
	  		body:"I love this package2!",
	  		author: "wes2@example.com",
	  		createdOn:1397490980837
	  	},{
	  		stars:1,
	  		body:"Awesome Deal2!",
	  		author:"sab2@example.com",
	  		createdOn: 1397490980837
	  	}],
	  prices: [
	  	{
	  		days: "1 Day", 
	  		ammount: 15
	  	},{
	  		days: "3 Days",
	  		ammount: 25
	  	},{
	  		days: "7 Days", 
	  		ammount: 35
	  	},{
	  		days: "14 Days",
	  		ammount: 40
	  	},{
	  		days: "30 Days",
	  		ammount: 55
	  	}]
  }
  ];

  var accessories = [
  {
  	name: 'GoPro HERO3 Battery',
  	description: "Use this rechargeable battery as a spare, replacement or back-up battery for your GoPro HERO3. Provides approximately up to 2.5 hours of recording time.",
  	canPurchase:true,
  	soldOut:false,
  	images: [
	  	{
	  		full: 'resources/accessories/hero3Battery.jpg',
	  		thumb: 'resources/Thumb.jpg'
	  	},
	  	{
	  		full: 'resources/Sky.jpg',
	  		thumb: 'resources/Thumb.jpg'
	  	}],
	  prices: [
	  	{
	  		days: "1 Day", 
	  		ammount: 1
	  	},{
	  		days: "3 Days",
	  		ammount: 2
	  	},{
	  		days: "7 Days", 
	  		ammount: 4
	  	},{
	  		days: "14 Days",
	  		ammount: 6
	  	},{
	  		days: "30 Days",
	  		ammount: 10
	  	}]
  },
  {
  	name: 'GoPro HERO2 Battery',
  	description: "Use this rechargeable battery as a spare, replacement or back-up battery for your GoPro HERO2. Provides approximately up to 2.5 hours of recording time.",
  	canPurchase:true,
  	soldOut:false,
  	images: [
	  	{
	  		full: 'resources/accessories/gp2Battery.jpg',
	  		thumb: 'resources/Thumb.jpg'
	  	},
	  	{
	  		full: 'resources/Sky.jpg',
	  		thumb: 'resources/Thumb.jpg'
	  	}],
	  prices: [
	  	{
	  		days: "1 Day", 
	  		ammount: 1
	  	},{
	  		days: "3 Days",
	  		ammount: 2
	  	},{
	  		days: "7 Days", 
	  		ammount: 4
	  	},{
	  		days: "14 Days",
	  		ammount: 6
	  	},{
	  		days: "30 Days",
	  		ammount: 10
	  	}]
  },
  { 
  	name: 'Touch Screen BacPac',  
  	description: "The LCD Touch BacPac is a removable touch display that seamlessly attaches to the back of your GoPro. See what your camera sees to frame your shots with confidence.",
  	canPurchase: true,
  	soldOut: false,
  	images: [
	  	{
	  		full: 'resources/accessories/touchBacPac.jpg',
	  		thumb: 'resources/Thumb.jpg'
	  	},
	  	{
	  		full: 'resources/Scuba.jpeg',
	  		thumb: 'resources/Thumb.jpg'
	  	}],
	  prices: [
	  	{
	  		days: "1 Day", 
	  		ammount: 3
	  	},{
	  		days: "3 Days",
	  		ammount: 6
	  	},{
	  		days: "7 Days", 
	  		ammount: 10
	  	},{
	  		days: "14 Days",
	  		ammount: 15
	  	},{
	  		days: "30 Days",
	  		ammount: 25
	  	}]
  },
  {
  	name: 'GoPro External Battery BacPac',
  	description: "Use this BacPac as an exteranl battery, doubling the time you can record your adventure.",
  	canPurchase:true,
  	soldOut:false,
  	images: [
	  	{
	  		full: 'resources/accessories/battery-bacpac.jpg',
	  		thumb: 'resources/Thumb.jpg'
	  	},
	  	{
	  		full: 'resources/Sky.jpg',
	  		thumb: 'resources/Thumb.jpg'
	  	}],
	  prices: [
	  	{
	  		days: "1 Day", 
	  		ammount: 3
	  	},{
	  		days: "3 Days",
	  		ammount: 6
	  	},{
	  		days: "7 Days", 
	  		ammount: 10
	  	},{
	  		days: "14 Days",
	  		ammount: 15
	  	},{
	  		days: "30 Days",
	  		ammount: 25
	  	}]
  },
  {
  	name: 'GoPro WiFi BacPac',
  	description: "The Wi-Fi BacPac attaches to the back of your GoPro to enable Wi-Fi connectivity and long-range remote control from up to 600'. Enables your HD HERO2 camera to connect to the free GoPro App for remote camera control and content preview on your smartphone or tablet",
  	canPurchase:true,
  	soldOut:false,
  	images: [
	  	{
	  		full: 'resources/accessories/wifi-bacpac.jpg',
	  		thumb: 'resources/Thumb.jpg'
	  	},
	  	{
	  		full: 'resources/Sky.jpg',
	  		thumb: 'resources/Thumb.jpg'
	  	}],
	  prices: [
	  	{
	  		days: "1 Day", 
	  		ammount: 3
	  	},{
	  		days: "3 Days",
	  		ammount: 6
	  	},{
	  		days: "7 Days", 
	  		ammount: 10
	  	},{
	  		days: "14 Days",
	  		ammount: 15
	  	},{
	  		days: "30 Days",
	  		ammount: 25
	  	}]
  }
  ];
}

function ToggleReviewController($scope){
	$scope.visible = false;

	$scope.toggleReview = function(){
		$scope.visible = !$scope.visible;
	};
}


