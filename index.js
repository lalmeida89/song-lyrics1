function getDataFromApi(artist, title, callback) {
    $.get(`https://api.lyrics.ovh/v1/${artist}/${title}`, function(data, status){
      console.log(data);
      //displaySearchData(data);
      callback(data);
  });
};

function displaySearchData(data) {
  $('.js-search-results').html(data.lyrics);
}

function watchSubmit() {
  $('button').click(function(e){
    let artist = $('.js-query-artist').val();
    let title = $('.js-query-title').val();
    getDataFromApi(artist, title, displaySearchData);
  });
};

$(watchSubmit);
