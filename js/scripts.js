// function Game (name, total) {
//   this.name = name,
//   this.total = 0
// }
//
//
//
//
//
// function Turn (name, total) {
//   this.name = name,
//   this.total = 0
// }

// BACK-END LOGIC
function PigPen () {
  this.piggies = []
}

// Pigpen.prototype.addPig = function(pig) {
//
//   this.piggies.push(pig)
// }

function Pig (name, turnTotal, gameTotal) {
  // this.name = name,
  this.turnTotal = 0,
  this.gameTotal = 0
}

function diceRoll(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// FRONT-END LOGIC
var pigPen = new PigPen();
var pig1 = new Pig();
var pig2 = new Pig();

$(document).ready(function() {
  $("button#roll").click(function() {
    var roll = diceRoll(1, 6);
    console.log(roll);
    // This would call a function that calculates probability of rolling a dice.

    // This would also call a function that adds result of each dice roll to turnTotal.
  });
  $("button#hold").click(function() {

    // This would call a function that adds turnTotal to gameTotal for the player.

    alert("Player 1: Your new total is gameTotal.") // This shouldn't be an alert, but what?

    alert("Player 2: Your turn."); // This shouldn't be an alert, but what?
  });
  $("button#begin").click(function() {

    // This would call a function that resets the player's turnTotal.
  });
});
