$(function() {
  var thingsData = [
    {name:"Couch", price:499.00 },
    {name:"Blanket", price:59.00 },
    {name:"Pillow Pants", price:259.00 }
  ];
  function updateAllThings(things) {
    var theHTMLListOfThings = "";
    thingsData.forEach(function(eachThing) {
      theHTMLListOfThings += '<li class="thing">' + '<a href="/' + eachThing.name.toLowerCase() + '">' + eachThing.name + ' -- Price: ' + eachThing.price + '</a></li>';
    });
    return theHTMLListOfThings;
  }
  $(".things").append(updateAllThings(thingsData));
});