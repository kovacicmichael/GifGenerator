

var search = ["Dogs", "Space", "Starwars", "Waterfalls"];
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=4rflNs59030SuauN0DtLlygAYaj36Q6J&q=" + search + "&limit=25&offset=0&rating=PG&lang=en";


function alertGifName(){
	console.log(this);

	var gifName = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=4rflNs59030SuauN0DtLlygAYaj36Q6J&q=" + gifName + "&limit=15&offset=0&rating=PG&lang=en";

	//alert(gifName);

	$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function(response){

			for(var i = 0; i < response.data.length; i++){

				if(response.data[i].rating !== "r" && response.data[i].rating !== "pg-13"){

					var gifImage = $("<img>");
					gifImage.attr("src", response.data[i].images.fixed_height.url)
			
					var gif = $("<div class='gif-wrapper'>" + gifImage + "</div>");
					
					var gifRating = $("<p>Rating: " + response.data[i].rating + "</p>");
					
					$("#content").prepend(gif);
					$(gif).prepend(gifImage)
					$(gif).prepend(gifRating);

				}

			};

			// $(".picture").on("click", function(event){

			//$("#content").text(JSON.stringify(response));
			// });
			
			//$(".content").text(response);
			console.log(response);
		});
		

};

function renderButtons(){

	$("#buttons-location").empty();

		for(var i = 0; i < search.length; i++){

			// var newGif = $("<button>" + search[i] + "</button>");
			// $("#buttons-location").append(newGif);

			// newGif.addClass("pictures");
			// newGif.attr("data-name", search[i])


			var gif = $("<button>");

			gif.addClass("picture");
			gif.attr("data-name", search[i])
			gif.text(search[i]);

			$("#buttons-location").append(gif);


		};

};

$("#add-gif").on("click", function(event){
		event.preventDefault();

		var gif = $("#gif-input").val().trim();

		search.push(gif);

		renderButtons();

	});


renderButtons();

$("#buttons-location").on("click", ".picture", alertGifName)







