"use strict";

app.controller("ResultsCtrl", ["$scope", "process_results",

	function($scope, process_results) {

		var movieObj = process_results.getResults();
		$scope.movies = movieObj.data.Search;

		console.log("$scope.movies", $scope.movies);

	}]);