//Business Logic
function resultTally(answers) {
  let countA = 0;
  let countB = 0;
  let countC = 0;

  answers.forEach(answer => {
    switch (answer) {
      case 'a':
        countA += 1;
        break;
      case 'b':
        countB += 2;
        break;
      case 'c':
        countC += 3;
        break;
    }
  });

  if(countA > countB && countA > countC) {
    
  } else if (countB > countA && countB > countC) {

  } else if (countC > countA && countC > countB) {

  } else {
    
  }
}

//User Interface Logic
$(document).ready(function() {
  $("#form-reveal").click(function(event) {
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