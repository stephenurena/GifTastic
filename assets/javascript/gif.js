//variables for input values after event handler, when clicked.
// var searchTerm = encodeURI($("#animalInput").val());
// variables for animate and pause gifs
// var state = $(this).attr("");
// var still = $(this).attr("");
// var animate = $(this)attr("");
//might be redundant but using variables to keep code organized

function displayGifs() {
	var queryTopics = $(this).attr("data-name");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + queryTopics + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
		url: queryURL,
	    method: "GET"
	    }).done(function(response) {

	    	var results = response.data;

	    	for (var i = 0; i < results.length; i++) {
		    	//creating a div to hold our gifs
		    	var gifDiv = $("<div class='col-xs-3 col-md-3'>");

		    	var p = $("<p>").text("Rating: " + results[i].rating);
		    	
		    	// ==============================================
		    	//created and storing an image tag;
		    	var gifImage= $("<img class='thumbnail'>");

		    	//setting the gifImage src attr to imageURL
		    	gifImage.attr("src", results[i].images.fixed_height.url);
		    	gifImage.attr("alt", "funny gifs");

		    	//append gifImage to topicsDiv
		    	gifDiv.append(p);
		    	gifDiv.append(gifImage);
		    	//append topicDiv to the topics div
		    	$("#topics").append(gifDiv);
	    	}

	    });
}

function addGifTopics() {


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

var arrTopics = ["charles barkley", "michael jordan"];
$("#addTopic").on("click", function(event) {
	event.preventDefault();
	var string = $("#addInput").val();
	arrTopics.push(string);console.log(arrTopics);
	addGifTopics();
});
//add click event to all elements with a class of "gifTopic"
$(document).on("click", ".gifTopic", displayGifs);
//calling function to display initial buttons
addGifTopics();

