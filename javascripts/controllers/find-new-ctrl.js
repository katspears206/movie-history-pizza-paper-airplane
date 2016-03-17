"use strict";

app.controller("FindNewCtrl", ["$scope", "$http",
  
  function($scope,$http) {
    var movieArray = [];
    var movieObj;

    $scope.searchOMDB = function() {
      console.log("I see searchString =",$scope.findNewSearchString.replace(/ /g,"+"));
      $http({
        method: "GET",
        url: "http://www.omdbapi.com/?s=" + $scope.findNewSearchString.replace(/ /g,"+")
      })
      .then(function(objReceived) {
        movieArray = objReceived.data.Search;
        console.log("movieArray", movieArray);
        movieObj = objReceived.data;
        console.log("got",movieObj);
        $("#leftBox").html(`<img src='${movieObj.Poster}'>`);
      }),
      function(error) {
        console.log("mayhem!!");
      }
    };

    $scope.addToTracking = function() {
      console.log("movie is being moved to tracking");
      $("#leftBox").html("");
      $("#centerBox").html(`<img src='${movieObj.Poster}'>`);
      // update Firebase DB
      movieObj.watched = false;
      movieObj.stars = 0;
      $scope.postObject(movieObj);
    };

    $scope.addToWatched = function() {
      console.log("movie is being moved to watched");
      $("#centerBox").html("");
      $("#rightBox").html(`<img src='${movieObj.Poster}'>`);
      // update Firebase DB
      movieObj.watched = true;
      $scope.postObject(movieObj);
    };

    $scope.postObject = function(obj) {
      $http({
        url: "https://mb-movie-history.firebaseio.com/movies/.json",
        method: "POST",
        data: {
          title: obj.Title,
          yearReleased: obj.Year,
          actors: obj.Actors,
          rating: obj.stars,
          watched: obj.watched,
          posterUrl: obj.Poster
        }
      })
      .then(function() {
        console.log("posted",obj.Title);
      });
    }
  }
]);