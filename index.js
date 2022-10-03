var msg1 = document.getElementById("message-1");
var msg2 = document.getElementById("message-2");
var msg3 = document.getElementById("message-3");
var msg4 = document.getElementById("message-4");

var answer = Math.floor(Math.random()*100 )+ 1

var no_of_guesses = 0;
var guessed_numbers = [];
    
var button = document.getElementById("my_btn");
button.addEventListener("click", play);

function play(){
    var user_guesses = document.getElementById("guess").value;

    if (user_guesses < 1 || user_guesses > 100  ){
        alert("Please enter number between 1 - 100");
    }
    else{
        guessed_numbers.push(user_guesses);
        no_of_guesses += 1;

        if(user_guesses < answer){
            msg1.textContent = "Your guessed is too low";
            msg2.textContent = "No. of Guesses: "+ no_of_guesses;
            msg3.textContent = "Guessed Numbers are: "+ guessed_numbers;

        }
        else if(user_guesses > answer){

            msg1.textContent = "Your guessed is too high";
            msg2.textContent = "No. of Guesses: "+ no_of_guesses;
            msg3.textContent = "Guessed Numbers are: "+ guessed_numbers;

        }
        else if(user_guesses == answer){
            msg1.textContent = "Yahoo !!! You did a great job";
            msg2.textContent = "The answer was "+ user_guesses;
            msg3.textContent = "You Guessed in " + no_of_guesses;
            msg4.textContent = "Guessed Numbers are: " +guessed_numbers;
            
        }

    }
}