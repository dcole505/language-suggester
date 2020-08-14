//Business Logic

//User Interface Logic
$(document).ready(function() {
  $("#form-reveal").click(function(event){
    event.preventDefault();
    const answers = [
      $("#question-1").val(),
      $("#question-2").val(),
      $("#question-3").val(),
      $("#question-4").val(),
      $("#question-5").val(),
    ];
    const name = $("#name").val();

    $("#survey").toggle();
    $("#display").toggle();
  });
})