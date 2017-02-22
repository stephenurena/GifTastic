//Global variables
//============================================================================================
var arrTopics = ["charles barkley", "michael jordan"];
//Functions
//============================================================================================

//function to take our user input values and pass them to through ajax to display rating and images.
function displayGifs(event) {
	//enables to click to new btn/topic
	event.preventDefault();
	//clears previous display of 10gifs
	$("#topics").empty();

	//variables to pass into ajax function
	var queryTopics = $(this).attr("data-name");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + queryTopics + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
		url: queryURL,
	    method: "GET"
	    }).done(function(response) {
	    	//created varable to use for forloop to call the object data
	    	var results = response.data;

	    	for (var i = 0; i < results.length; i++) {
		    	//creating a div to hold our gifs
		    	var gifDiv = $("<div class='col-xs-3 col-md-3'>");
		    	//created a paragraph element to hold rating
		    	var p = $("<p>").text("Rating: " + results[i].rating);
		    	
		    	// ======================================================
		    	//created img element and stored an image tag;
		    	var gifImage= $("<img class='thumbnail gif'>");

		    	//setting the gifImage src attr to images from data object
		    	gifImage.attr("src", results[i].images.fixed_height.url);
		    	gifImage.attr("alt", "funny gifs");

		    	//append p and gifImage to gifDiv
		    	gifDiv.append(p);
		    	gifDiv.append(gifImage);

		    	//append topicDiv to the id of topics in our html file
		    	$("#topics").append(gifDiv);
	    	}

	    });
}

//function to take user input store in arrTopics array and append value(s) into a new button, that will later be called on to display gifs and rating.
function addGifTopics() {

	//to ensure only passes one button of submitted user input
	$("#topicBtns").empty();
			
		//loops through the array of arrTopics
		for (var i = 0; i < arrTopics.length; i++) {
			//create var to create element button
			var a = $("<button>");
			//add classes of bootstrap for styling and gifTopic for later use on new onclick event handlaer
			a.addClass("btn btn-info gifTopic");
			//add values of the arrTopics[i]
			a.attr("data-name", arrTopics[i]);
			//display arrTopics[i] and capitalize each word on style.css
			a.text(arrTopics[i]);
			//add a new button on every user input
			$("#topicBtns").append(a);
		}
}

function animate() {

};

//Event onclick handlers for functions above
//============================================================================================

//onClick event to add/append new btns
$("#addTopic").on("click", function(event) {
	event.preventDefault();
	var string = $("#addInput").val();
	arrTopics.push(string);console.log(arrTopics);
	addGifTopics();
});
//onClick Event to all elements with a class of "gifTopic"
$(document).on("click", ".gifTopic", displayGifs);

//onClick Event to animate our gifs
(".gif").on("click", function(){
	animate();
})

//calling function to display initial buttons
addGifTopics();

