$(document).ready(function() {
  // Get the value of the numberSelected query parameter
  // let urlParams = new URLSearchParams(window.location.search);
  // let numberSelected = urlParams.get('numberSelected');
  
  let params = new URLSearchParams(window.location.search);
  console.log(params);
  let numberSelected = params.get('numberSelected');
  console.log(numberSelected);

  
  if(numberSelected === '' || numberSelected === null){
    numberSelected = 0
  }
  // Display the value in the span element
  $(".alert-container span").text(numberSelected);
    

  });
  