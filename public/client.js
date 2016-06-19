var getSongs = function(callback) {
  $.get( "/songs", function(data) {
    callback(data);
  });
};

var addSong= function(song) {
    var row = $("<tr>", {
    id: song._id
  });
  
  // the data
  row.append($("<td>").text(song.artist));
  row.append($("<td>").text(song.song));
  // the delete action - in the real world I'd be using angular ;)
  row.append($("<td>")
    .append($("<input>",{
      class:'btn btn-default', 
      type: 'button',
      onClick: 'dropRow("'+song._id+'")'
    })
    )
  );
  $('#songs').append(row);
}

var dropRow = function(id) {
  $('tr#'+id).remove();
  deleteSong(id);
}
      
var renderSongs = function(){
  getSongs(function(data) {
    for (var i=0; i!= data.length; i++) {
      var song = data[i];
      addSong(song);
    }
  })
}

var saveSong = function(){
    var artist= $('#artist').val();
    var song =$('#song').val()

    $.post("/songs", {
      'artist': artist,
      'song': song
    }, function(result) {
      
      var alertDiv = $('#alert');
      alertDiv.html('');
      if (result instanceof Array) {
        // this is an error
        console.log('Errors: ' + result)
        var errors = alertDiv.append($("<ul>"));
        for (var i=0;i!=result.length; i++){
          errors.append($('<ul>').text(result[i]));
        }
        alertDiv.show();
      } else {
        alertDiv.hide();
          $('#artist').val('');
          $('#song').val('');
        addSong(result);
      }
    });

}

var deleteSong = function(id) {
  
  $.ajax({
    url: '/songs/'+id,
    type: 'DELETE'
  });
  
};


