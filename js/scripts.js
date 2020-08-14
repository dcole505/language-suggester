//Business Logic

//User Interface Logic
$(document).ready(function() {
  $("#form-reveal").click(function(event){
    event.preventDefault();

    $("#survey").show();
    $("#display").hide();
  })
})