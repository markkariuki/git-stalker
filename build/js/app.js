(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{}]},{},[1]);
