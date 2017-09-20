(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey="51f2bfd55d9c343430dd984b506e6b33cd6352a4";

},{}],2:[function(require,module,exports){
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

},{"./../js/lookup.js":3}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
exports.githubRequest = function(userName) {
    console.log("response");
    $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
      console.log(response);
      $("#userName").text("Full Names: " + response.name);
      $("#userRepostories").text("repos:" + response.public_repos);
      $("#displayImage").append("<img src=" + response.avatar_url + ">");
      $("#userFollowers").text("followers:" + response.followers );
      $("#userFollowing").text("following:" + response.following );

}).fail(function(error) {
      console.log(error.responseJSON.message)
    });
};

},{"./../.env":1}]},{},[2]);
