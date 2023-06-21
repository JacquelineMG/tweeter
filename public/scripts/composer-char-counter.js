// Set new tweet character counter to 140 and have it increase/decrease with user's input

$(document).ready(function() {
  $("#tweet-text").on("input", function() {
    const maxChars = 140;
    const inputChars = $(this).val().length;
    const charsCount = maxChars - inputChars;
    const counter = $(this).parents().find(".counter");
    $(counter).text(charsCount);

    // Change character count font colour to red if more than 140 characters
    if (charsCount < 0) {
      $(counter).addClass("neg-counter");
    }

    // Change character count font colour back to black if fewer than 140 characters
    if (charsCount >= 0) {
      $(counter).removeClass("neg-counter");
    }
  });
});
