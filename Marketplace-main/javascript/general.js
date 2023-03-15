const recommendedCards = document.querySelectorAll('.recommended-game-card');
recommendedCards.forEach(function(recommendedCard) {
  recommendedCard.addEventListener('click', function() {
      window.location.href = 'game-page.html';
    });
  });


  const gameRows = document.querySelectorAll('.game-row');
  gameRows.forEach(function(gameRow) {
    gameRow.addEventListener('click', function() {
      window.location.href = 'game-page.html';
    });
  });

