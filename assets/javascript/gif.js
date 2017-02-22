//variables for input values after event handler, when clicked.
var searchTerm = encodeURI($("#animalInput").val());
var limit = encodeURI($("#limit").val()); //maybe just make a static 10 image limit on queryURL
// variables for animate and pause gifs
// var state = $(this).attr("");
// var still = $(this).attr("");
// var animate = $(this)attr("");
function addGifTopics() {


$("#animalBtns").empty();
		
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
		$("#animalBtns").append(a);

		console.log(arrTopics[i]); //test of arrTopics[i]
	}
};

var arrTopics = [];
$("#addTopic").on("click", function(event) {
	event.preventDefault();
	var string = $("#addInput").val();
	arrTopics.push(string);console.log(arrTopics);
	addGifTopics();
})

//might be redundant but using variables to keep code organized
// var authKey = "dc6zaTOxFJmzC";
// var limit = "&limit=10"
// var rating = "&rating=";
// var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=" + authKey + limit + rating;

// $(".gifTopic").on("click", function(){

// 	$.ajax({

// 		//maybe add an event handler, when an element is clicked do something
// 		//add possibly another event handler, when an input is submitted do something...add button
// 		//some type of event handler when button is clicked query searches the value of button

// 	        url: queryURL,
// 	        method: "GET"
// 	      })
// 	.done(function(response) {

// 		//created variable to hold the img url
// 		var imageURL = response.data.image_original_url;

// 		//created a variable to create img element
// 		var topicImg = $("<img>");

// 		//add attributes, of src = imageURL and alt text = "funny gif"
// 		topicImg.attr("src", imageURL);
// 		topicImg.attr("alt", "funny gif");

// 		//then on a button click, add 10 new images and rating
// 		$("").append(topicImg); 

// 	      	//append 10 static images together

// 	     });
// // });
