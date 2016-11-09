// write jQuery or vanilla javascript to do the following:
//  - loop through the list items in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next bullet point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

(function($){
	$('.links li a').on('click', function(e) {
		e.preventDefault();
		alert('you clicked a link, good for you');
	});

	console.log("this is a message for you!!!");
})(jQuery);

function colorListItems() {
  var listItems = document.getElementsByClassName("listItem");
  for (i = 0; i <	listItems.length; i++) {
    listItems[i].style.color="green";
  }
}

var accordionVisible = false;
document.getElementById("accordionButton").onclick = function() {
  if (!accordionVisible) {
    document.getElementById("accordionContent").style.display="block";
    accordionVisible = true;
  } else {
    document.getElementById("accordionContent").style.display="none";
    accordionVisible = false;
  }
}

document.getElementById("makeMeHappy").onclick = function() {
  document.body.style.backgroundColor = "#FFFFA0";
}

document.getElementById("goodByeButton").onclick = function() {
  document.getElementById("welcome").style.display="none";
  document.getElementById("makeMeHappy").style.display="none";
  document.getElementById("mainSection").style.display="none";
  document.getElementById("lonelyParagraph").style.display="none";
  document.getElementById("secondarySection").style.display="none";
  document.getElementById("accordion").style.display="none";
  document.getElementById("endButton").style.display="none";
  document.getElementById("goodBye").style.display="block";
  document.body.style.backgroundColor = "#EEEEEE";
}
