
$(document).ready(function() {

let selectableButtons = $(".selectable")
let numberSelected = '';


$(".selectable").click(function(){
  numberSelected = $(this).data("value");
 
  // Construct the query parameter string
  let queryParams = "?numberSelected=" + numberSelected;

  // Add the query parameter to the URL
  $("form").attr("action", "submit.html" + queryParams);

  
});


let previousButton = null; // Initialize a variable to keep track of the previously selected button
// Loop through each element with the class "selectable"
selectableButtons.each(function() {

    // Add mouseover event listener to each button
    $(this).mouseover(function() {
        // Check if the button is not already selected
        if (!$(this).hasClass("selected")) {
            $(this).css("background-color", "hsl(25, 97%, 53%)");
        }
    });
    
    $(this).mouseout(function() {
        if (!$(this).hasClass("selected")) {
            $(this).css("background-color", "hsla(216, 12%, 54%, .2)"); // Change the background color back to the dark grey
        }
    });
    
    // Add click event listener to each button
    $(this).click(function() {
        // Check If a previous button has been selected, remove it and change to original backgroud color 
        if (previousButton !== null) {
            previousButton.removeClass("selected").css("background-color", "hsla(216, 12%, 54%, .2)");
        }

        $(this).addClass("selected").css("background-color", "hsl(217, 12%, 63%)");
        previousButton = $(this);
    });
});

    
});
