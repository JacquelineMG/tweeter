$(document).ready(function() {
  $("#tweet-text").on("input", function() {
    const maxChars = 140;
    const inputChars = $(this).val().length;
    const charsCount = maxChars - inputChars;
    const counter = $(this).parents().find(".counter");
    $(counter).text(charsCount);

    if (charsCount < 0) {
      $(counter).addClass("neg-counter");
    }
    if (charsCount >= 0) {
      $(counter).removeClass("neg-counter");
    }
  });
});
