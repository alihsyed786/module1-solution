(function () {
'use strict';

angular.module('LunchCheckerApp', [])

.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];

function LunchCheckerController($scope) {
   $scope.name = "lunch checker";
   $scope.checkLunch = function () {
     var array = $scope.lunchMeals.split(',');
     console.log( array.length);

     if(array.length > 3){
       $scope.message = "Too much!";
     }
     else{
       $scope.message = "Enjoy!";
     }

   };
}

})();
