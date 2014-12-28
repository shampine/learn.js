$(document).ready(function() {

  var input = document.getElementById("input");

  input.addEventListener("input", function() {
    var text, arr, output = "", string;
    text = $(this).text();
    arr  = text.split(" ");
    for(var i=0; i < arr.length; i++) {
      string = capitaliseFirstLetter(arr[i]);
      output += string + " ";
    }
    displayOutput(output);
  }, false);

  function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function displayOutput(string) {
    $('#output').empty().text(string);
  }

});