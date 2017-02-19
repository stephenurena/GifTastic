//variables for input values after event handler, when clicked.
var searchTerm = encodeURI($("#animalInput").val());
var limit = encodeURI($("#limit").val()); //maybe just make a static 10 image limit on queryURL
// variables for animate and pause gifs
var state = $(this).attr("");
var still = $(this).attr("");
var animate = $(this)attr("");


var authKey = "dc6zaTOxFJmzC";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=" + authKey;
$.ajax({

	//maybe add an event handler, when an element is clicked do something
	//add possibly another event handler, when an input is submitted do something...add button
	//some type of event handler when button is clicked query searches the value of button

        url: queryURL,
        method: "GET"
      }).done(function(response) {


      	//append 10 static images together

      });
