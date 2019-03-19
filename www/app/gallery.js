
/*
 *		This file contains the javascript code for our gallery
 */

// variables for all of the templates so we only have to compile
// them once on page load and can then use the same compiled
// templates many times
var albums_template, songs_template, song_template, home_template;
var artists_template, artist_template;

// variables to store the current displayed album and photo
var current_album = gallery.albums[0];
var current_song = current_album.photos[0];
var current_artist;

// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
}

// document read gets called when the whole document
// is loaded, so we put most of the code that needs to run
// in here

function loadGallery(templating) {
	$(document).ready(function(){
		//
		// compile all of our templates ready for use
		//
		var source   = $("#albums-template").html();
		albums_template = templating.compile(source);

		source   = $("#songs-template").html();
		songs_template = templating.compile(source);

		source   = $("#song-template").html();
		song_template = templating.compile(source);

		source   = $("#home-template").html();
		home_template = templating.compile(source);

		source   = $("#artists-template").html();
		artists_template = templating.compile(source);
		/*
		source   = $("#artist-template").html();
		artist_template = Handlebars.compile(source);
		*/

		//HOME PAGE
		$("#home-tab").click(function() {

			showTemplate(home_template, app_info);

			$(".nav-tabs .active").removeClass("active");
			$("#home-tab").addClass("active");

		});

		$("#logo-tab").click(function() {

			showTemplate(home_template, app_info);

			$(".nav-tabs .active").removeClass("active");
			$("#logo-tab").addClass("active");

		});

		$("#artists-tab").click(function () {

			showTemplate(albums_template, gallery);

			$(".nav-tabs .active").removeClass("active");
			// then make albums tab active
			$("#artists-tab").addClass("active");


			$(".album-thumbnail").click(function (){

				var index = $(this).data("id");

				current_album = gallery.albums[index];

				showTemplate(songs_template, current_album);

				$(".song-thumbnail").click(function (){

					var index = $(this).data("id");

					current_song = current_album.photos[index];

					showTemplate(song_template, current_song);
				});
			});
		});

		//
		//  clicking on the albums tab shows the
		//  thumbnails of all the albums
		//
		$("#albums-tab").click(function () {

			// displays the albums template
			showTemplate(albums_template, gallery);

			// make the albums tab the active one
			// first make the currently active tab inactive
			$(".nav-tabs .active").removeClass("active");
			// then make albums tab active
			$("#albums-tab").addClass("active");

			// add a click callback to each album
			// thumbnail which displays the photos
			// template on that album
			// (I have written out the code for this
			// function for clarity but it is actually
			// pretty much the same as the photos tab
			// function so we could acutally just
			// call $(".photo-thumbnail").click() )
			$(".album-thumbnail").click(function (){

				// get the index (position in the array)
				// of the album we clicked on
				// "this" is the element that was clicked on
				// data("id") gets the attribute data-id
				// (which we set to the index of the album in
				// the array - @index)
				var index = $(this).data("id");

				// set the current album to this album
				current_album = gallery.albums[index];

				// displays the photos template
				showTemplate(songs_template, current_album);

				// add an on click al all the photo thumbnails
				// which displays the photo in a modal popup
				$(".song-thumbnail").click(function (){
					// get the index (position in the array)
					// of the photo we clicked on
					// "this" is the element that was clicked on
					// data("id") gets the attribute data-id
					// (which we set to the index of the photo in
					// the array - @index)
					var index = $(this).data("id");

					// set the current photo to this photo
					current_song = current_album.photos[index];

					// displays the single photo template
					showTemplate(song_template, current_song);
				});
			});
		});

		//
		//  clicking on the photos tab shows all of the
		//  photos in the current album
		//
		$("#songs-tab").click(function () {

			// displays the photos template
			showTemplate(songs_template, current_album);

			// make the photos tab the active one
			// first make the currently active tab inactive
			$(".nav-tabs .active").removeClass("active");
			// then make photos tab active
			$("#songs-tab").addClass("active");

			// add an on click al all the photo thumbnails
			// which displays the photo in a modal popup
			$(".song-thumbnail").click(function (){
				// get the index (position in the array)
				// of the photo we clicked on
				// "this" is the element that was clicked on
				// data("id") gets the attribute data-id
				// (which we set to the index of the photo in
				// the array - @index)
				var index = $(this).data("id");

				// set the current photo to this photo
				current_song = current_album.photos[index];

				// displays the single photo template
				showTemplate(song_template, current_song);
			});
		});

		$("#home-tab").click();

	});
}
