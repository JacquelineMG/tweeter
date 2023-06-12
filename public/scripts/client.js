/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {


  //OLD TWEETS 

  // Hover drop-box for old tweets //

  $(".tweet").on("mouseenter", function() {
    $(this).addClass("hover");
  });
  $(".tweet").on("mouseleave", function(){
    $(this).removeClass("hover");
  });

  // Hover color-change for flag, retweet and like //

  $(".flag").on("mouseenter", function() {
    $(this).addClass("glow");
  });

  $(".flag").on("mouseleave", function() {
    $(this).removeClass("glow");
  });

  $(".share").on("mouseenter", function() {
    $(this).addClass("glow");
  });

  $(".share").on("mouseleave", function() {
    $(this).removeClass("glow");
  });

  $(".like").on("mouseenter", function() {
    $(this).addClass("glow");
  });

  $(".like").on("mouseleave", function() {
    $(this).removeClass("glow");
  });


  // Toggle flag, retweet and heart between clicked and unclicked states

  $(".flag").on("click", function() {
    $(this).toggleClass("clicked");
  });
  
  $(".share").on("click", function() {
    $(this).toggleClass("clicked");
  });
  
  $(".like").on("click", function() {
    $(this).toggleClass("clicked");
  });

  
});
