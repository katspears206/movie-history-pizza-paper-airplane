"use strict";

app.factory("process_results", function() {
	
	var resultsObj = {};

	return {
		storeResults: function(obj) {
			console.log("obj:", obj);
			resultsObj = obj;
		},

		getResults: function() {
			return resultsObj;
		}
	}
});



