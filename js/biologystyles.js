$(document).ready(function() {

  var animalLike = (prompt("What animal would you like to learn about turtles, snakes or insects"));

  if (animalLike === "turtles") {
      $('#turtles').show();
    } else if (animalLike === "snakes") {
      $('#snakes').show();
    } else {
        $("#insects").show();
    }

});
