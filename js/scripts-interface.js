
$(document).ready(function(){
  $('#userFormName').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    $('#userFormName').hide();
    $('#solution').append( + username + )

  });
});
