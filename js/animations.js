
var $actions = $('.tweet-actions');

$('#tweet-controls').css('display', 'none');

$('.tweet-compose').on('click', function(){
  $(this).css('height', '5em');
  $('#tweet-controls').css('display', 'inherit');
});

$('.tweet-compose').on('input', function() {
  var $charCount = 140 - $(this).val().length;
  $('#char-count').text($charCount);
  if($charCount <= 10) {
    $('#char-count').css('color', 'red');
  } else {
    $('#char-count').css('color', 'black');
  }
  if($charCount <= 0) {
    $('#tweet-submit').prop('disabled', true);
  } else {
    $('#tweet-submit').prop('disabled', false);
  }
});


$('#tweet-submit').on('click', function(){
  var tweetText = $(".tweet-compose").val();
  var newTweet =
     '<div class="tweet">' +
      '<div class="content">' +
        '<img class="avatar" src="img/alagoon.jpg" />'  +
        '<strong class="fullname">Woofer N. Tweeter</strong>'  +
        '<span class="username"> @wooferNtweeter</span>'  +
        '<p class="tweet-text">' + tweetText + '</p>' + //<--PROBLEM
        '<div class="tweet-actions">' +
          '<ul>' +
            '<li><span class="icon action-reply"></span> Reply</li>' +
            '<li><span class="icon action-retweet"></span> Retweet</li>' +
            '<li><span class="icon action-favorite"></span> Favorite</li>' +
            '<li><span class="icon action-more"></span> More</li>' +
          '</ul>' +
        '</div>' +
        '<div class="stats">' +
          '<div class="retweets">' +
            '<p class="num-retweets">30</p>' +
            '<p>RETWEETS</p>' +
          '</div>' +
          '<div class="favorites">' +
            '<p class="num-favorites">6</p>' +
            '<p>FAVORITES</p>' +
          '</div>' +
          '<div class="users-interact">' +
            '<div>' +
              '<img src="img/alagoon.jpg" />' +
              '<img src="img/vklimenko.jpg" />' +
            '</div>' +
          '</div>' +
          '<div class="time">' +
            // 'now.getHours() '+'h' + 'now.getMinutes '+'m' + 'now.getSeconds ' + 's';
          '</div>' +
        '</div>' +
        '<div class="reply">' +
          '<img class="avatar" src="img/alagoon.jpg" />' +
          '<textarea class="tweet-compose"  placeholder="Reply to @mybff"/></textarea>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '</div>'

    $('#stream').prepend(newTweet);

    $('.tweet').on('mouseover', function() {
      var actions = $(this).find('.tweet-actions').show();
    });

    $('.tweet').click(function(){
      $(this).find('.stats').show();
    });

    $('.tweet').on('mouseleave', function() {
      var actions = $(this).find('.tweet-actions').hide();
      $(this).find('.stats').show();
      $(this).find('.stats').hide();
    });
});

    $('.tweet-compose').val('');
    $('.tweet-compose').css('height', '2.5em');

    $('.tweet').on('mouseover', function() {
      var actions = $(this).find('.tweet-actions').show();
    });

    $('.tweet').click(function(){
      $(this).find('.stats').show();
    });

    $('.tweet').on('mouseleave', function() {
      var actions = $(this).find('.tweet-actions').hide();
      $(this).find('.stats').show();
      $(this).find('.stats').hide();
    });

//});



  // });
