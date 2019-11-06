// BACK-END LOGIC

function Pig (turnTotal, gameTotal, id) {
  this.turnTotal = 0,
  this.gameTotal = 0,
  this.id = id
}

Pig.prototype.winnerWinner = function() {
  if (this.gameTotal >= 100) {
    alert("Congratulations, " + this.id + ", you are the winner!");
    document.location.reload();
  } else {
    return false;
  }
}

function diceRoll(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// FRONT-END LOGIC

var pig1 = new Pig(0, 0, "Wilbur");
var pig2 = new Pig(0, 0, "Babe");

$(document).ready(function() {
  $("button#start").click(function() {
    $(".gameStart").hide();
    $(".wilburGame").show();
  });

  $("button#wilburRoll").click(function() {
    var roll = diceRoll(1, 6);
    $("#babeTurnRoll").text("");
    if (roll === 1) {
      pig1.turnTotal = 0;
      $("#wilburTurnTotal").text(pig1.turnTotal);
      $(".wilburGame").hide();
      $(".babeGame").show();
      alert("You just rolled a 1, it's now Babe's turn.");
    } else {
      $("#wilburTurnRoll").text(roll);
      pig1.turnTotal += roll;
      $("#wilburTurnTotal").text(pig1.turnTotal);
    }
  });

  $("button#babeRoll").click(function() {
    var roll = diceRoll(1, 6);
    $("#wilburTurnRoll").text("");
    if (roll === 1) {
      pig2.turnTotal = 0;
      $("#babeTurnTotal").text(pig2.turnTotal);
      $(".babeGame").hide();
      $(".wilburGame").show();
      alert("You just rolled a 1, it's now Wilbur's turn.");
    } else {
      $("#babeTurnRoll").text(roll);
      pig2.turnTotal += roll;
      $("#babeTurnTotal").text(pig2.turnTotal);
    }
  });

  $("button#wilburHold").click(function() {
    pig1.gameTotal += pig1.turnTotal;
    $("#wilburGameTotal").text(pig1.gameTotal);
    pig1.winnerWinner();
    pig1.turnTotal = 0;
    $("#wilburTurnTotal").text(pig1.turnTotal);
    $(".wilburGame").hide();
    $(".babeGame").show();
  });

  $("button#babeHold").click(function() {
    pig2.gameTotal += pig2.turnTotal;
    $("#babeGameTotal").text(pig2.gameTotal);
    pig2.winnerWinner();
    pig2.turnTotal = 0;
    $("#babeTurnTotal").text(pig2.turnTotal);
    $(".babeGame").hide();
    $(".wilburGame").show();
  });

});
