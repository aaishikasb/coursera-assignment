(function (){
	'use strict';
	angular.module('LunchCheck',[])

	.controller('LunchCheckController',LunchCheckController);
	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope)
	{
		$scope.lunchMsg = "";
		$scope.lunchItems = "";
		$scope.msgColor = "#FF0000";
		$scope.borderColor = "#C0C0C0";
		$scope.checkLunch = function(){ 
			var items = $scope.lunchItems.split(",");
			items = items.filter(function(item) 
			                      { 
			                       return item.trim() != ''; 
			                       });      //Filter the Array! If there are empty strings, remove them!
			var mColor = "#00FF00"
			var bColor = "#00FF00"
			var msg = "";
			if (items == "") 
			{
              msg = "Please enter data first!";
              mColor = "#FF0000";
              bColor = "#FF0000";
			}
			else
			{
				var itemsLength = items.length;
				if(itemsLength <= 3)
				{
					msg = "Enjoy!";
				}
				else
				{
					msg = "Too much!";
				}
			}
			
			$scope.lunchMsg = msg;
			$scope.msgColor = mColor;
			$scope.borderColor = bColor;
		};
		
    }
	})(); //an IIFE (Immediately Envoked Function)