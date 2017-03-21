$( document ).ready(function() {

	//initialize variables	
	var questions = [];
	var correctAnswer = ""
	var qCorrect = 0;
	var qIncorrect = 0;
	var i = 0;
	var j = 0;
	var ques = ""
	var opt1 = ""
 	var opt2 = ""
	var opt3 = ""
	var opt4 = ""
	var countdownTimer = 0;
	var clickAnswer = ""

	//load all the data to questions[]

	questions[0] = {
		question:"In Sarasota, Florida, it is illegal to do what while wearing a bathing suit in a public place?",
		option1:"Sing",
		option2:"Dance",
		option3:"Shower",
		option4:"Eat",
		answer:"1"
	}; 

	questions[1] = {
		question:"In Michigan, a woman must have her husband's permission to do what?",
		option1:"Cut her hair",
		option2:"Buy a horse",
		option3:"Go to a movie",
		option4:"Eat bacon",
		answer:"1"
	}; 

	questions[2] = {
		question:"In Ohio, it is illegal to sell beer (even if you are a dog) while wearing what?",
		option1:"A bathing suit",
		option2:"A Santa suit",
		option3:"Religious garb",
		option4:"Nothing",
		answer:"2"		
	}; 

	questions[3] = {
		question:"In West Virgina, it is illegal to do what underwater?",
		option1:"Fish",
		option2:"Sleep",
		option3:"Swim",
		option4:"Whistle",
		answer:"4"
	}; 

	questions[4] = {
		question:"In Lexington, Kentucky, it is illegal to carry what in your pocket?",
		option1:"A slice of pizza",
		option2:"Eggs",
		option3:"A small animal",
		option4:"An ice cream cone",
		answer:"4"
	}; 

	questions[5] = {
		question:"In Minnesota, it is illegal to make fun of what animal?",
		option1:"Skunks",
		option2:"Fish",
		option3:"Humans",
		option4:"Monkeys",
		answer:"1"
	}; 

	questions[6] = {
		question:"Back to Kentucky... failure to do this once a year could land you in the big house:",
		option1:"Take a bath",
		option2:"Go outside your home",
		option3:"Pay your taxes",
		option4:"Drink milk",
		answer:"1"
	}; 

	questions[7] = {
		question:"In Atlanta, Georgia, it is illegal to do this to a lamp post or street light...",
		option1:"Tie a giraffe to it",
		option2:"Stand under it at night",
		option3:"Dance with it",
		option4:"Take a picture of it",
		answer:"1"
	}; 

	questions[8] = {
		question:"In Idaho, you cannot give someone this if it weighs over 50 pounds:",
		option1:"A sack of potatoes",
		option2:"A box of candy",
		option3:"A Christmas present",
		option4:"A drink of water",
		answer:"2"
	}; 

	questions[9] = {
		question:"In Alaska, it is illegal to do this from a flying vehicle:",
		option1:"Spit",
		option2:"Count trees",
		option3:"Jump into snow",
		option4:"Look at a moose",
		answer:"4"
	}; 


	resetQuestion();
	startTimer(); 					


	function startTimer() {
		j = 30;
	    countdownTimer = setInterval(function() {
	        $("#timer").html(j + " seconds remaining");
	        j = j - 1;
	        if (j < 0) {
	            clearInterval(countdownTimer);
	            qIncorrect++;
	            i++;
	            resetQuestion();
				startTimer(); 	
	        }
	    }, 1000);
	}

	function resetQuestion() {
		$("#triviaQuestion").html(questions[i].question);
		$("#op1").html(questions[i].option1);
		$("#op2").html(questions[i].option2);
		$("#op3").html(questions[i].option3);
		$("#op4").html(questions[i].option4);
		correctAnswer = questions[i].answer;
	}

		$(".list-group-item").on("click", function() {
			clickAnswer = $(this).attr("value"); 
			console.log(clickAnswer);
			console.log(correctAnswer);
			clearInterval(countdownTimer);
			if (clickAnswer === correctAnswer) { 
				alert("your are correct");
				qCorrect++;
				console.log(qCorrect);
			} else {
				alert("wrong");
				qIncorrect++;
				console.log(qIncorrect);
			}
			i++;
            resetQuestion();
			startTimer(); 	
		})


});