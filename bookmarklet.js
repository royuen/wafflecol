var parseData = function(card) {
  var cardTitle = $(card).find('.card-body').find('textarea').val();
  var cardNumber = $(card).find(".card-number span[bo-bind='card.githubMetadata.number']").text();

  return {
    issueNumber: '#' + cardNumber + ' - ',
    title: cardTitle + '\n'
  }
}

var printClickedColumnCards = function(columnText, isDoubleClick) {
  var cards = $(columnText).parents('.column').find('.card');
  var parsedCards = "";

  for (var i = 0; i < cards.length; i++) {
    var parsedCard = parseData(cards[i]);
    if (isDoubleClick) {
      parsedCards += parsedCard.title
    } else {
      parsedCards += (parsedCard.issueNumber + parsedCard.title);
    }
  }
  console.log(parsedCards);
}

if (typeof jQuery === 'undefined') {
  alert('jQUery not available, consider update this script');
} else {
  $(document).ready(function(){
    $('.column-text').css('cursor', 'pointer');

    $('.column-text').click(function(){
      var isDoubleClick = false;
      printClickedColumnCards(this, isDoubleClick);
    });

    $('.column-text').dblclick(function(){
      var isDoubleClick = true;
      printClickedColumnCards(this, isDoubleClick);
    });
  })
}