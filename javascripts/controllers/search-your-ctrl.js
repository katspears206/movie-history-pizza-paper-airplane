"use strict";

app.controller("SearchYourCtrl", ["$scope", "$http", "load-collection",
  function($scope,$http,loadCollection) {
    $scope.showWatched = true;  // initialize
    $scope.hideWatchedButton = true;  // initialize
    $scope.hideWatchedText = false;  // initialize

    $scope.toggleWatched = function() {
        $scope.showWatched = !$scope.showWatched;
        $scope.hideWatchedButton = !$scope.hideWatchedButton;
        $scope.hideWatchedText = !$scope.hideWatchedText;
    }

    loadCollection().then(
      function(movieArray) {
        $scope.movies = movieArray;
      },
      function () {

      }
    );

    $scope.myCustomFilter = function(movie) {
        return movie.watched === $scope.showWatched;
    }

    $scope.addToWatched = function(movie) {
      console.log("movie",movie);
      console.log("movie is being moved to watched");
      // update Firebase DB
      movie.watched = true;
      $scope.patchObject(movie);
    };


    $scope.patchObject = function(movie) {
      $http({
        url: `https://mb-movie-history.firebaseio.com/movies/????.json`,
        method: "PATCH",
        data: { watched: movie.watched }
      })
      .then(function() {
        console.log("patched",movie.Title);
      });
    };
  }
]);