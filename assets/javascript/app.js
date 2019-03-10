$(document).ready(function () {

    // Here is where I tell section 2 and 3 to hide from section 1

    $("#questionPage, #scorePage").hide();

    // here is where I tell the start button to take the player to the questionaire
    // make the button clickable
    // declaring a variable
    var intervalID;
    var countdownNumber = 60;
    var correctGuesses = 0;
    var incorrectAnswer = 0;
    var unanswered = 0;

    var correctAnswers = ["Suckit", "GeorgeForemanGrill", "Kelly", "awatermelon", "theroof",
        "Starspangled", "Paper", "cleanup", "Washington", "Battlestar"];
    console.log(correctAnswers);

    $("#button").on("click", function () {

        // here is where hide the start page,  start the timer, show the questions 
        $("#titlePage, #scorePage").hide();
        $("#questionPage").show();

        // start timer, with 60 seconds
        // assign variable a value
        intervalID = setInterval(() => {
            countdownNumber--
            if (countdownNumber < 0) {
                $("#scorePage").show();
                $("#questionPage").hide();
                $("#titlePage").hide();
                clearInterval(intervalID);
                countdownNumber = 60;
                checkedAnswers();



            }
            else {
                $("#countdownTimer").text(countdownNumber);
            }

        }, 1000);

    })
    function checkedAnswers() {
        var question1 = $("input[name=question1]:checked").val();
        var question2 = $("input[name=question2]:checked").val();
        var question3 = $("input[name=question3]:checked").val();
        var question4 = $("input[name=question4]:checked").val();
        var question5 = $("input[name=question5]:checked").val();
        var question6 = $("input[name=question6]:checked").val();
        var question7 = $("input[name=question7]:checked").val();
        var question8 = $("input[name=question8]:checked").val();
        var question9 = $("input[name=question9]:checked").val();
        var question10 = $("input[name=question10]:checked").val();

        var usersChoices = [question1, question2, question3, question4, question5, question6, question7,
            question8, question9, question10];
        console.log(usersChoices);

        // if the array numbers match each other then increase player score 1+, if they don't match increase incorrect answer 1+,
        // any undefined increases unanswered by one
        for (let i = 0; i < correctAnswers.length; i++) {
            if (usersChoices[i] == correctAnswers[i]) {
                (correctGuesses++);
            }
            else {
                if (usersChoices[i] == undefined) {
                    unanswered++;
                }
                else {
                    incorrectAnswer++;
                }
            }

        }
        console.log(correctGuesses, incorrectAnswer, unanswered);
        $("#answers").text(correctGuesses);
        $("#incorrectAnswers").text(incorrectAnswer);
        $("#unanswered").text(unanswered);
        correctGuesses = 0;
        incorrectAnswer = 0;
        unanswered = 0;
        $('body, html').scrollTop(0)
   
   
    }






    // if the timer equals zero show answer page, hide title page, hide questionaire get values from radio buttons; to count right wrong answers
    //  if (countdownNumber == 0) {
    //   console.log("hi");


    //     $("#scorePage").show(); 
    //     $("#questionPage").hide();
    //     $("#titlePage").hide();
    //     clearInterval(intervalID);
    //     countdownNumber = 5;
    //     console.log("score", score); 


    //  var selected = $("input[name=question1]:checked").val();
    //     
    // }






    // here is where i tell the done button to take me to the score page and keep the question page and start page hidden
    $("#done").on("click", function (event) {
        event.preventDefault();
        countdownNumber = 0;
        // $("#titlePage, #questionPage").hide();
        // $("#scorePage").show();

        checkedAnswers();
    })






























})