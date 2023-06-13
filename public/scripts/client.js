/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {


  // CREATE TWEETS //


  // creatTweetElement function takes in tweet object and returns a tweet <article> element containing entire HTML structure of the tweet

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "/images/bird-avatar-flamingo-d.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "/images/bird-avatar-tucan-d.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Hennie White",
        "avatars": "/images/bird-avatar-chicken-d.png"
        ,
        "handle": "@clucker"
      },
      "content": {
        "text": "Clucks cluck cluck cluck cluck cluck clucks cluck cluck cluck cluck cluck cluck cluck cluck cluck cluck cluck cluck cluck cluck cluck cluck!"
      },
      "created_at": 1461112232227
    }
  ]

  const createTweetElement = function(tweetOb) {
    const tweetContent = tweetOb.content.text;
    const tweetID = tweetOb.user.handle;
    const tweetUserName = tweetOb.user.name;
    const tweetAvatar = tweetOb.user.avatars;
    const tweetDate = tweetOb.created_at;

    const $tweet = ` 
    
      <article class="tweet">

          <header>
            <div class="poster-name" >
              <img class="poster-img" src=${tweetAvatar} >
              <p> ${tweetUserName} </p>
          </div>
          
          <div class="poster-id">
            <p> ${tweetID} </p>
          </div>
          </header>

          <div class="tweet-text-box">
            <p class="tweet-text"> ${tweetContent} </p>
          </div>

          <footer>
            <div class="date">
              <p> ${tweetDate} </p>
            </div>
            <div class="buttons">
              <button class="flag" type="submit"><i class="fa-sharp fa-solid fa-flag"></i></button>
              <button class="share" type="submit"><i class="fa-solid fa-retweet"></i></button>
              <button class="like" type="submit"><i class="fa-solid fa-heart"></i></button>
            </div>
          </footer>

        </article>
    `

    return $tweet;
  }


 // RENDER TWEETS //

 // Loop through tweets data object
 // Use createTweetElement to create tweet element for each tweet
 // Append the returned tweet elements to #tweet-container  

 const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const returnValue = createTweetElement(tweet)
    $(`#tweet-container`).append(returnValue)
  }
 }

 renderTweets(data)






  //OLD TWEETS .ON EVENTS //

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
