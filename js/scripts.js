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

    PigPen.prototype.addPig = function(pig) {
      pig.id =
      this.piggies.push(pig)
    }

    PigPen.prototype.pickPig = function(pig) {
      for (var i = 0; i < this.piggies.length; i ++) {
        if (this.piggies[i].id === pig.id) {
          return this.piggies[i];
        } else {
          return false;
        }
      }
    }



    function Pig (turnTotal, gameTotal, id) {
      this.turnTotal = 0,
      this.gameTotal = 0,
      this.id = id
    }



    function diceRoll(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function addTurnTotal(roll) {
      this.turnTotal += roll;
      return this.turnTotal;
    }

    // FRONT-END LOGIC
    var pigPen = new PigPen(pig1, pig2);
    var pig1 = new Pig(0, 0, "Wilbur");
    var pig2 = new Pig(0, 0, "Babe");



    function showPig(pigId) {
      var pig = pigPen.pickPig(pigId)

      var buttonRoll = $("#buttons");
      buttonRoll.empty();
      buttonRoll.append("<button class='rollButton' id=" + pig.id + "> Roll!</button>")
    }


    $(document).ready(function() {
      $("button#start").click(function() {
        showPig(pig1.id);

      })
      $("button.rollButton").click(function() {
        var roll = diceRoll(1, 6);
        console.log(roll);
        pig1.turnTotal += roll;
        console.log(pig1.turnTotal);
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
