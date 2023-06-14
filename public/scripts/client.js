/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  // Hide error messages when user is behaving

  $("#error-empty").hide();
  $("#error-long").hide();


  // ESCAPE FUNCTION //

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

 
  // CREATE TWEET ELEMENT  FUNCTION//

  // creatTweetElement function takes in tweet object and returns a tweet <article> element containing entire HTML structure of the tweet

  const createTweetElement = function(tweetOb) {
    const tweetContent = tweetOb.content.text;
    const tweetID = tweetOb.user.handle;
    const tweetUserName = tweetOb.user.name;
    const tweetAvatar = tweetOb.user.avatars;
    const tweetDate = tweetOb.created_at;


    // Create consts to contruct the tweet article element

    const $tweet = $(`<article class="tweet">`);


    //// Header Consts ////

    const $header = $(`<header>`);

    const $posterName = $(`
      <div class="poster-name">
        <img class="poster-img" src=${tweetAvatar}>
        <p> ${tweetUserName} </p>
      </div>
    `);

    const $posterID = $(`
      <div class="poster-id">
        <p> ${tweetID} </p>
      </div>
    `);

    const $headerClose = $(`</header>`);


    // Construct header from consts
    $header.append($posterName, $posterID, $headerClose);


   //// Content Consts ////

    const $tweetContainer = $(`<div class="tweet-text-box">`);

    const $tweetText = $(`
        <p class="tweet-text"> ${escape(tweetContent)} </p>
      </div>
    `);

    // Construct content from consts
    $tweetContainer.append($tweetText);


   //// Footer Consts ////

    const $footer = $(`<footer>`);

    const $date = $(`            
      <div class="date">
        <span> ${timeago.format(tweetDate)} </span>
      </div>
    `)

    const $icons = $(`<span class="icons">`);


    // $flag and its .on events

    const $flag = $(`<i class="flag fa-sharp fa-solid fa-flag"></i>`);

    $flag.on("click", function() {
      $(this).toggleClass("clicked");
    });

    $flag.on("mouseenter", function() {
      $(this).addClass("hover");
    });

    $flag.on("mouseleave", function() {
      $(this).removeClass("hover");
    });


    // $share and its .on events

    const $share = $(`<i class="share fa-solid fa-retweet"></i>`);

    $share.on("click", function() {
      $(this).toggleClass("clicked");
    });

    $share.on("mouseenter", function() {
      $(this).addClass("hover");
    });

    $share.on("mouseleave", function() {
      $(this).removeClass("hover");
    });
    

    // $like and its .on events

    const $like = $(`<i class="like fa-solid fa-heart"></i>`);

    $like.on("click", function() {
      $(this).toggleClass("clicked");
    });

    $like.on("mouseenter", function() {
      $(this).addClass("hover");
    });

    $like.on("mouseleave", function() {
      $(this).removeClass("hover");
    });


    const $iconsClose = $(`</span>`);


    // Construct icons
    $icons.append($flag, $share, $like, $iconsClose);


    const $footerClose = $(`</footer>`);


    // Construct footer
    $footer.append($date, $icons, $footerClose);


    const $articleClose = $(`</article>`);


    // Construct tweet article element
    $tweet.append($header, $tweetContainer, $footer, $articleClose);


    return $tweet;
  }


 // RENDER TWEETS FUNCTION //

 // clear info of already rendered tweets from the #tweet-container
 // Loop through tweets data object
 // Use createTweetElement to create tweet element for each tweet
 // Append the returned tweet elements to #tweet-container  

 const renderTweets = function(tweets) {
  $("#tweet-container").empty();
  for (const tweet of tweets) {
    const returnValue = createTweetElement(tweet)
    $(`#tweet-container`).prepend(returnValue)
  }
};

  
  // LOAD TWEETS FUNCTION //

  const loadTweets = function() {
    $.ajax("/tweets", { method: "GET" })
    .then(function (tweet) {
      renderTweets(tweet);
    })
  };


  // Populate page with tweets

  loadTweets();

  
  // EVENT LISTENER FOR TWEET SUBMITS //

 // Listen for new tweet submissions

  $("#submit-tweet").on("submit", function(event){
    event.preventDefault();

    $("#error-empty").slideUp("fast", "linear"); 
    $("#error-long").slideUp("fast", "linear"); 

    const maxChars = 140;
    const tweetLength = $(this).find("#tweet-text").val().length;

    // Check if tweet has content

    if (tweetLength === 0) {  
      $("#error-empty").slideDown("fast", "linear");    
    } 
    
    // Check if tweet is more than 140 characters

    else if (tweetLength > maxChars) {
      $("#error-long").slideDown("fast", "linear");
    }

    // If tweet passes the above checks, post tweet data to the server and load new tweet to page

    else {      
      const tweetData = $(this).serialize();
      $.post("/tweets", tweetData, () => {
        loadTweets();

        $("#error-empty").slideUp("fast", "linear");
        $("#error-long").slideUp("fast", "linear");

        // Reset input box and counter values

        $("#tweet-text").val("")
        $(".counter").val(maxChars);
    });
    }
  });

});
