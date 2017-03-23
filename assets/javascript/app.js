$( document ).ready(function() {

	//initialize variables	
	var questions = [];
	var correctAnswer = "";
	var answerText = "";
	var clickAnswer = "";
	var qImage = "";
	var qCorrect = 0;
	var qIncorrect = 0;
	var qUnanswered = 0;
	var i = 0;
	var j = 0;
	var countdownTimer = 0;

	//load all the questions, answer options & images to questions array
	questions[0] = {
		question:"In Sarasota, Florida, it is illegal to do what while wearing a bathing suit in a public place?",
		option: ["Sing", "Dance", "Shower", "Eat"],
		aAnswer: 0,
		image:"q0.gif",
	}; 

	questions[1] = {
		question:"In Michigan, a woman must have her husband's permission to do what?",
		option: ["Cut her hair", "Buy a horse", "Go to a movie", "Eat bacon"],
		aAnswer: 0,
		image:"q1.gif",
	}; 

	questions[2] = {
		question:"In Ohio, it is illegal to sell beer while wearing what?",
		option: ["A bathing suit", "A Santa suit", "Religious garb", "Nothing"],
		aAnswer: 1,
		image:"q2.gif",
	}; 

	questions[3] = {
		question:"In West Virgina, it is illegal to do what underwater?",
		option: ["Fish", "Sleep", "Swim", "Whistle"],
		aAnswer: 3,
		image:"q3.gif",
	}; 

	questions[4] = {
		question:"In Lexington, Kentucky, it is illegal to carry what in your pocket?",
		option: ["A slice of pizza", "Eggs", "A small animal", "An ice cream cone"],
		aAnswer: 3,
		image:"q4.gif",
	}; 

	questions[5] = {
		question:"In Minnesota, it is illegal to make fun of what animal?",
		option: ["Skunks", "Fish", "Humans", "Monkeys"],
		aAnswer: 0,
		image:"q5.gif",
	}; 

	questions[6] = {
		question:"Back to Kentucky... failure to do this once a year could land you in the big house:",
		option: ["Take a bath", "Go outside your home", "Pay your taxes", "Drink milk"],
		aAnswer: 0,
		image:"q6.gif",
	}; 

	questions[7] = {
		question:"In Atlanta, Georgia, it is illegal to do this to a lamp post or street light...",
		option: ["Tie a giraffe to it", "Stand under it at night", "Dance with it", "Take a picture of it"],
		aAnswer: 0,
		image:"q7.gif",
	}; 

	questions[8] = {
		question:"In Idaho, you cannot give someone this if it weighs over 50 pounds:",
		option: ["A sack of potatoes", "A box of candy", "A Christmas present", "A drink of water"],
		aAnswer: 1,
		image:"q8.gif",
	}; 

	questions[9] = {
		question:"In Alaska, it is illegal to do this from a flying vehicle:",
		option: ["Spit", "Count trees", "Jump into snow", "Look at a moose"],
		aAnswer: 3,
		image:"q9.jpg",
	}; 

	// function to reset variables on start/restart of game. 	
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
				$("#triviaQuestion").html("Time's up!!! The answer was: "+answerText+".")
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
		$("#op1").html(questions[i].option[0]);
		$("#op2").html(questions[i].option[1]);
		$("#op3").html(questions[i].option[2]);
		$("#op4").html(questions[i].option[3]);
		$("#questCont").show();
		$("#imageDiv").hide();
		correctAnswer = questions[i].aAnswer + 1;
		qImage = questions[i].image;
		answerText = questions[i].option[questions[i].aAnswer];
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
		if (clickAnswer == correctAnswer) { 
			$("#triviaQuestion").html("Correct!")
			qCorrect++;
		} else {
			$("#triviaQuestion").html("Sorry, that's incorrect. The answer was: "+answerText+".")
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

