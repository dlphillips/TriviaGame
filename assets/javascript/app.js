$( document ).ready(function() {

	//initialize variables	
	var questions = [];
	var correctAnswer = ""
	var answerText = ""
	var clickAnswer = ""
	var qImage = ""
	var qCorrect = 0;
	var qIncorrect = 0;
	var qUnanswered = 0;
	var i = 0;
	var j = 0;
	var ques = ""
	var opt1 = ""
 	var opt2 = ""
	var opt3 = ""
	var opt4 = ""
	var countdownTimer = 0;

	//load all the questions, answers & images to questions[]
	questions[0] = {
		question:"In Sarasota, Florida, it is illegal to do what while wearing a bathing suit in a public place?",
		option1:"Sing",
		option2:"Dance",
		option3:"Shower",
		option4:"Eat",
		answer:"1",
		image:"q0.gif",
		answertxt:"Sing"
	}; 

	questions[1] = {
		question:"In Michigan, a woman must have her husband's permission to do what?",
		option1:"Cut her hair",
		option2:"Buy a horse",
		option3:"Go to a movie",
		option4:"Eat bacon",
		answer:"1",
		image:"q1.gif",
		answertxt:"Cut her hair"
	}; 

	questions[2] = {
		question:"In Ohio, it is illegal to sell beer (even if you are a dog) while wearing what?",
		option1:"A bathing suit",
		option2:"A Santa suit",
		option3:"Religious garb",
		option4:"Nothing",
		answer:"2",
		image:"q2.gif",
		answertxt:"A Santa suit"
	}; 

	questions[3] = {
		question:"In West Virgina, it is illegal to do what underwater?",
		option1:"Fish",
		option2:"Sleep",
		option3:"Swim",
		option4:"Whistle",
		answer:"4",
		image:"q3.gif",
		answertxt:"Whistle"
	}; 

	questions[4] = {
		question:"In Lexington, Kentucky, it is illegal to carry what in your pocket?",
		option1:"A slice of pizza",
		option2:"Eggs",
		option3:"A small animal",
		option4:"An ice cream cone",
		answer:"4",
		image:"q4.gif",
		answertxt:"An ice cream cone"
	}; 

	questions[5] = {
		question:"In Minnesota, it is illegal to make fun of what animal?",
		option1:"Skunks",
		option2:"Fish",
		option3:"Humans",
		option4:"Monkeys",
		answer:"1",
		image:"q5.gif",
		answertxt:"Skunks"
	}; 

	questions[6] = {
		question:"Back to Kentucky... failure to do this once a year could land you in the big house:",
		option1:"Take a bath",
		option2:"Go outside your home",
		option3:"Pay your taxes",
		option4:"Drink milk",
		answer:"1",
		image:"q6.gif",
		answertxt:"Take a bath"
	}; 

	questions[7] = {
		question:"In Atlanta, Georgia, it is illegal to do this to a lamp post or street light...",
		option1:"Tie a giraffe to it",
		option2:"Stand under it at night",
		option3:"Dance with it",
		option4:"Take a picture of it",
		answer:"1",
		image:"q7.gif",
		answertxt:"Tie a giraffe to it"
	}; 

	questions[8] = {
		question:"In Idaho, you cannot give someone this if it weighs over 50 pounds:",
		option1:"A sack of potatoes",
		option2:"A box of candy",
		option3:"A Christmas present",
		option4:"A drink of water",
		answer:"2",
		image:"q8.gif",
		answertxt:"A box of candy"
	}; 

	questions[9] = {
		question:"In Alaska, it is illegal to do this from a flying vehicle:",
		option1:"Spit",
		option2:"Count trees",
		option3:"Jump into snow",
		option4:"Look at a moose",
		answer:"4",
		image:"q9.jpg",
		answertxt:"Look at a moose"
	}; 

	// function to reset variables and start/restart the game. 	
	function gameReset() {
		i = 0;
		qCorrect = 0;
		qIncorrect = 0;
		qUnanswered = 0;
		$("#triviaQuestion").show();
		$("#timer").show();
		$("#startBtn").hide();
		$("#resultsDiv").hide();
		resetQuestion();
		startTimer(); 
	}

	// 30 second timer function. Displays remaining seconds (j) at #timer. Keeps track of unanswered question count
	// (those without a click within 30 seconds).
	function startTimer() {
		$("#timer").html(" ");
		j = 30;
	    countdownTimer = setInterval(function() {
	        $("#timer").html(j + " seconds remaining");
	        j = j - 1;
	        if (j < 0) {
	            clearInterval(countdownTimer);
				$("#triviaQuestion").html("Time's up!!! The answer is '"+answerText+"'")
	            qUnanswered++;
	            i++;
		        showAnswer();
	        }
	    }, 1000);
	}

	// function to move to next question & reset timer
	function nextQuestion() {
        startTimer(); 
		resetQuestion();
	}

	// replace the html with the questions and possible answers. Populate variables with correct answer id, text & image.
	function resetQuestion() {
		$("#triviaQuestion").html(questions[i].question);
		$("#op1").html(questions[i].option1);
		$("#op2").html(questions[i].option2);
		$("#op3").html(questions[i].option3);
		$("#op4").html(questions[i].option4);
		$("#questCont").show();
		$("#imageDiv").hide();
		correctAnswer = questions[i].answer;
		qImage = questions[i].image;
		answerText = questions[i].answertxt;
	}

	// hide the question div, update image and show image div. Wait 5 seconds then move to next question (nextQuestion()).
	// If last question, call results function (showResults()).
	function showAnswer() {
		var tImg = "<img src='assets/images/"+qImage+"' width='400px'/>"
		$("#questCont").hide();
		$("#imageDiv").html(tImg);
		$("#imageDiv").show();
        if (i === questions.length) {
			setTimeout(showResults, 5000);
		} else {
			setTimeout(nextQuestion, 5000);
		}
	}

	// listen for click on "list-group". Check if answer is correct and update #triviaQuestion. Call showAnswer() to display image.
	$(".list-group-item").on("click", function() {
		clearInterval(countdownTimer);

		clickAnswer = $(this).attr("value"); 
		if (clickAnswer === correctAnswer) { 
			$("#triviaQuestion").html("Correct!")
			qCorrect++;
		} else {
			$("#triviaQuestion").html("Sorry, that's incorrect. The answer is '"+answerText+"'")
			qIncorrect++;
		}
		i++;
        showAnswer();
	})

	// Function to show game results. Update results div with stats and show() them. Hide() other irrelevant divs. Change text on start button and show().
	function showResults() {
		$("#txtCorrect").html("Correct Answers: "+ qCorrect);
		$("#txtIncorrect").html("Incorrect Answers: "+ qIncorrect);
		$("#txtUnanswered").html("Unanswered: "+ qUnanswered);
		$("#imageDiv").hide();
		$("#resultsDiv").show();
		$("#triviaQuestion").hide();
		$("#timer").hide();
		$("#startBtn").html("Play Again!").show();
		$("#timer").html(" ");
	}

	// button to start game
	$("#startBtn").on("click", function() {
		gameReset();
	});

	// next three lines execute on page load. Three items to be hidden until start button is clicked.
	$("#questCont").hide();
	$("#resultsDiv").hide();
	$("#timer").hide();
});

