// load scripts

define(['jquery', 'handlebars', 'musicmetadata', 'bootstrap', 'app/albums', 'app/artists', 'app/info', 'app/gallery', 'app/mp3data'],
  function($, handlebars, musicmetadata) {

    loadGallery(handlebars);

    $('#choose').change(function(e) {
      chooseTrack(e.target.files[0], musicmetadata);
    });

    $('#upload').click(function(e) {
      uploadTrack(e, musicmetadata);
    });
});
