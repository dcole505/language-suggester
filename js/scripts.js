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
        countB += 1;
        break;
      case 'c':
        countC += 1;
        break;
    }
  });

  console.log(countA);
  console.log(countB);
  console.log(countC);

  if(countA > countB && countA > countC) {
    $("#ruby").fadeIn();
    $("#java").hide();
    $("#javascript").hide();
    $("#python").hide();
  } else if (countB > countA && countB > countC) {
    $("#java").fadeIn();
    $("#ruby").hide();
    $("#javascript").hide();
    $("#python").hide();
  } else if (countC > countA && countC > countB) {
    $("#javascript").fadeIn();
    $("#ruby").hide();
    $("#java").hide();
    $("#python").hide();
  } else {
    $("#python").fadeIn();
    $("#ruby").hide();
    $("#java").hide();
    $("#javascript").hide();
  }
}

//User Interface Logic
$(document).ready(function() {
  $("#form-reveal").click(function(event) {
    event.preventDefault();
    
    $("#survey")[0].reset();
    $("#survey").show();
    $("#display").hide();
    });
  
  $("#survey").submit(function(){
    event.preventDefault();
    const answers = [
      $("#question-1").val(),
      $("#question-2").val(),
      $("#question-3").val(),
      $("#question-4").val(),
      $("#question-5").val(),
    ];
    const name = $("#name").val();

    $(".user-name").text(name);
    $("#survey").hide();
    $("#display").show();

    resultTally(answers);
  });
})