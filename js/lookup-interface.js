var githubRequest = require('./../js/lookup.js').githubRequest;

 $(document).ready(function(){
  $('#userFormName').submit(function(event){
    event.preventDefault();
    console.log("working");
    var userName = $("#username").val();
    $("#username").val("");
   githubRequest(userName);


  });
});
