/**
 * @author mastermalone
 */

(function(){
	//Create New module,
	//It takes two arguments, the name of the app and an array for dependencies
	var app = angular.module("gemStore", []);
	//Create new controller for that module
	app.controller("StoreController", function(){
		this.products = gems;
	});
	
	//Create a panel controller for the panels
	app.controller("PanelController", function(){
		this.tab = 1;
		/*Set the value of the selected tab
		I'll assign the value of tabValue with an onclick handler
		This will aid in the bootstrap css active class assignment*/
		this.selectedTab = function(setTab){
			this.tab = setTab;
			console.log("Set Tab", this.tab);
		};
		
		//Compare the value of this.tab with the value passed into
		//this function and return a true or false value based on the '====' operator
		//If it's true, a panel bearing the numeric value passed here will show in the app
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});
	
	app.controller("GalleryController", function(){
		//This value will be passed as the index of the images array
		this.current = 0; 
		this.setCurrent = function(selectedImg){
			this.current = !selectedImg ? this.current = 0 : this.current = selectedImg;
		}
	});
	
	//Mock Data.  This will be an AJAX call in most cases
	var gems = [
		{
			name: "Dodecahedron",
			price: 295,
			description: "This gem actually isn't worth anything",
			shine: 8,
			images: [
				"images/gem-02.gif",
				"images/gem-05.gif",
				"images/gem-09.gif"
			],
			reviews: [{
				stars: 1,
				body: "What a piece of crap!",
				author: "mastermalone@gmail.com",
				createdOn: 1397490980837
			}],
			canPurchase: true,
			soldOut: false
		},
		{
			name: "Pentagonal",
			price: 2595,
			description: "Perfect for that WHite House trip",
			shine: 98,
			images: [
				"images/gem-01.gif",
				"images/gem-03.gif",
				"images/gem-04.gif"
			],
			reviews: [{
				stars: 1,
				body: "What a piece of crap!",
				author: "mastermalone@gmail.com",
				createdOn: 1397490980837
			}],
			canPurchase: true,
			soldOut: false
		},
		{
			name: "Hexegonal",
			price: 4595,
			description: "This is the fucking price",
			shine: 48,
			images: [
				"images/gem-06.gif",
				"images/gem-07.gif",
				"images/gem-10.gif"
			],
			reviews: [{
				stars: 1,
				body: "What a piece of crap!",
				author: "mastermalone@gmail.com",
				createdOn: 1397490980837
			}],
			canPurchase: true,
			soldOut: false
		}	
	]
})();

