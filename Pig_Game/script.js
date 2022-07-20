'use strict';
// Selecting elements
const player0El = $('.player--0');
const player1El = $('.player--1');
const score0El = $('#score--0');
const score1El = $('#score--1');
const current0El = $('#current--0');
const current1El = $('#current--1');
const diceEl = $('.dice');
const btnNew = $('.btn--new');
const btnRoll = $('.btn--roll');
const btnHold = $('.btn--hold');
let scores, currentScore, activePlayer, playing;
// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.text(0);
  score1El.text(0);
  current0El.text(0);
  current1El.text(0);
  diceEl.addClass('hidden');
  player0El.removeClass('player--winner');
  player1El.removeClass('player--winner');
  player0El.addClass('player--active');
  player1El.removeClass('player--active');
};
init();
const switchPlayer = function () {
  $(`#current--${activePlayer}`).text(0);
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.toggleClass('player--active');
  player1El.toggleClass('player--active');
};
// Rolling dice functionality
// btnRoll.addEventListener('click', function ()
btnRoll.on('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // 2. Display dice
    diceEl.removeClass('hidden');
    diceEl.attr('src', `dice-${dice}.png`);
    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      console.log(currentScore);
      //   $`'#current--'${activePlayer}`.currentScore;
      $(`#current--${activePlayer}`).text(currentScore);
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});
// btnHold.addEventListener('click', function ()
btnHold.on('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore
    $(`#score--${activePlayer}`).text(scores[activePlayer]);
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.addClass('hidden');
      $(`.player--${activePlayer}`).addClass('player--winner');
      $(`.player--${activePlayer}`).removeClass('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});
// btnNew.addEventListener('click', init);
btnNew.on('click', init);
