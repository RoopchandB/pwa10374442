$(function(){
		var url_movie;
		if(navigator.onLine){
			//alert(0);
			//  Url to get Movie Data Through Api
			url_movie = 'https://college-movies.herokuapp.com/';
		}else{
		 	url_movie = 'movie.json';
			//alert(1);
		}
		
		//  Getting back Data & Displaying it on the Index page
		$.ajax({
		  dataType: "json",
		  url: url_movie,
		  // Success Function Starts
		  success: function (result) { 
		  
		    var tmpResult = result.slice(1,10);
			var i;
			for(i=0; i< tmpResult.length;i++){

		    	$('#mon .movie_timing_list').append('<li class="mdl-layout-title">'+ tmpResult[i]['title'] +' <p><a data-id="mon-'+ tmpResult[i]['runningTimes']['mon'][0] +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['mon'][0]+'</a><a data-id="mon-'+ tmpResult[i]['runningTimes']['mon'][1] +'-'+tmpResult[i]['title']+'"class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['mon'][1]+'</a><a data-id="mon-'+ tmpResult[i]['runningTimes']['mon'][2]  +'-'+tmpResult[i]['title']+'"class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['mon'][2]+'</a><a data-id="mon-'+ tmpResult[i]['runningTimes']['mon'][3] +'-'+tmpResult[i]['title']+'"class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['mon'][3]+'</a></p></li><hr>');
		    	
		    }
		    
		    	// Movie Day Function Starts
		    	$('.movie_day').click(function(){
		    		for(i=0; i< tmpResult.length;i++){
			    	var movie_day = $('.is-active span').text();
			    	if(movie_day == 'Mon'){
			    		$('#mon .movie_timing_list').append('<li class="mdl-layout-title">'+ tmpResult[i]['title'] +' <p><a  class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['mon'][0]+'</a><a class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['mon'][1]+'</a><a class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['mon'][2]+'</a><a class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['mon'][3]+'</a></p></li><hr>');
			    	}else if(movie_day == 'Tue'){
			    		$('#tue .movie_timing_list').append('<li class="mdl-layout-title">'+ tmpResult[i]['title'] +' <p><a data-id="tue-'+ tmpResult[i]['runningTimes']['tue'][0] +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['tue'][0]+'</a><a data-id="tue-'+ tmpResult[i]['runningTimes']['tue'][1] +'-'+tmpResult[i]['title']+'"class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['tue'][1]+'</a><a data-id="tue-'+ tmpResult[i]['runningTimes']['tue'][2]  +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['tue'][2]+'</a></p></li><hr>');
			    	}else if(movie_day == 'Wed'){
			    		$('#wed .movie_timing_list').append('<li class="mdl-layout-title">'+ tmpResult[i]['title'] +' <p><a data-id="wed-'+ tmpResult[i]['runningTimes']['wed'][0]  +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['wed'][0]+'</a><a data-id="wed-'+ tmpResult[i]['runningTimes']['wed'][1]  +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['wed'][1]+'</a><a data-id="wed-'+ tmpResult[i]['runningTimes']['wed'][2]  +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['wed'][2]+'</a></p></li><hr>');
			    	}
			    	else if(movie_day == 'Thu'){
			    		$('#thu .movie_timing_list').append('<li class="mdl-layout-title">'+ tmpResult[i]['title'] +' <p><a data-id="thu-'+ tmpResult[i]['runningTimes']['thu'][0]  +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['thu'][0]+'</a><a data-id="thu-'+ tmpResult[i]['runningTimes']['thu'][1]  +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['thu'][1]+'</a><a data-id="thu-'+ tmpResult[i]['runningTimes']['thu'][2]  +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['thu'][2]+'</a><a data-id="thu-'+ tmpResult[i]['runningTimes']['thu'][3]  +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['thu'][3]+'</a></p></li><hr>');
			    	}
			    	else if(movie_day == 'Fri'){
			    		$('#fri .movie_timing_list').append('<li class="mdl-layout-title">'+ tmpResult[i]['title'] +' <p><a data-id="fri-'+ tmpResult[i]['runningTimes']['fri'][0]  +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['fri'][0]+'</a><a data-id="fri-'+ tmpResult[i]['runningTimes']['fri'][1]  +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['fri'][1]+'</a><a data-id="fri-'+ tmpResult[i]['runningTimes']['fri'][2]  +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['fri'][2]+'</a></p></li><hr>');
			    	}
			    	else if(movie_day == 'Sat'){
			    		$('#sat .movie_timing_list').append('<li class="mdl-layout-title">'+ tmpResult[i]['title'] +' <p><a data-id="sat-'+ tmpResult[i]['runningTimes']['sat'][0]  +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['sat'][0]+'</a><a data-id="sat-'+ tmpResult[i]['runningTimes']['sat'][0]  +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['sat'][1]+'</a></p></li><hr>');
			    	}else if(movie_day == 'Sun'){
			    		$('#sun .movie_timing_list').append('<li class="mdl-layout-title">'+ tmpResult[i]['title'] +' <p><a data-id="sun-'+ tmpResult[i]['runningTimes']['sun'][0]  +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['sun'][0]+'</a><a data-id="sun-'+ tmpResult[i]['runningTimes']['sun'][1]  +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['sun'][1]+'</a><a data-id="sun-'+ tmpResult[i]['runningTimes']['sun'][2]  +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['sun'][2]+'</a><a data-id="sun-'+ tmpResult[i]['runningTimes']['sun'][3]  +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['sun'][3]+'</a><a data-id="sun-'+ tmpResult[i]['runningTimes']['sun'][4]  +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['sun'][4]+'</a><a data-id="sun-'+ tmpResult[i]['runningTimes']['sun'][5]  +'-'+tmpResult[i]['title']+'" class="mdl-navigation__link movie_timings" href="">'+ tmpResult[i]['runningTimes']['sun'][5]+'</a></p></li><hr>');
			    	}
			    }
			    }); // Movie Day Function Ends

				
			} // Success Function Ends

			
		}); // $.ajax Function Ends

	//  Allowing user to select a movie , particular day & time
	$('body').on('click','.movie_timings',function(e){
		e.preventDefault();
		 var movie_details  = $(this).data('id');
		 localStorage.setItem("movie_details", movie_details);
		 window.location.href = 'book_seats.html';
	});

});

