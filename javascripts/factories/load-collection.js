"use strict";

app.factory("load-collection", function($q, $http) {
  function getCollection() {
    return $q(function(resolve, reject) {
      $http({  // $http returns a promise
        url: "https://mb-movie-history.firebaseio.com/movies/.json",
        method: "GET"
      }).
      then(
        function(objectFromJSONFile) {
          var newArray = [];
          for(var key in objectFromJSONFile.data) {
            console.log("key",key);
            console.log("objectFromJSONFile.data",objectFromJSONFile.data);
            objectFromJSONFile.data.key = key;
            newArray.push(objectFromJSONFile.data[key]);
          }
          resolve(newArray);
        },
        function(error) {
          reject(error);
        }
      );
    });
  }
  return getCollection;  // returns a Promise to any controller
});