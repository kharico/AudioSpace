/*methods to retrieve metadata from audio file
  using musicmetadata API: https://github.com/leetreveil/musicmetadata
*/

//triggered by click event, reads and displays audio file
//next: adds track to library, adds metadata to artists/albums/songs/genres JSON files
//next: create python server to host audio and JSON files
function chooseTrack(data, mm) {
  mm(data, function(err, result) {
    if (err) throw err;
    console.log(result);

    app_info.headingTitle = "Title";
    app_info.headingArtist = "Artist";
    app_info.headingYear = "Year";
    app_info.headingGenre = "Genre";

    app_info.fileTitle = result.title;
    app_info.fileArtist = result.artist;
    app_info.fileYear = result.year;
    app_info.fileGenre = result.genre;
    showTemplate(home_template, app_info);

    var image = document.createElement('img');
    image.src = window.URL.createObjectURL(new Blob([result.picture[0].data], {'type': 'image/' + result.picture[0].format}));
    $('#audioimage').append(image);
    result.picture = undefined;
    //$('#audiodata').val(JSON.stringify(result));
  });
}

function uploadTrack(data, mm) {
  console.log("Uploading track");
}

//displays library as artists/albums/songs/genres
//next: reads from JSON files and not audio tracks
function displayLibrary(mm) {
  var libraryPath = '../public/audio';



}
