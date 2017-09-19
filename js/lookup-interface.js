
var apiKey = "37a427efe63111fc04f3694b916a75b883c3f63d";

$(document).ready(function() {
  $('#submit').click(function(event) {
    event.preventDefault();
    var userName = $('#username').val();
    $('#username').val("");
    console.log(userName);
    $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey, function(response){
      console.log(response);
      $("#userName").text("Full Names: " + response.name);
      $("#userRepostories").text("repos:" + response.public_repos);
      $("#displayImage").text("picture:" + response.avatar_url);
    });
  });
});
