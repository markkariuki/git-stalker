$(document).ready(function(){
  $('').submit(function(event){
    event.preventDefault();
    var email = $('userName').val();
    $('#signup').hide();
