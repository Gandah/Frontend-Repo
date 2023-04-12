let buttonColours = ["red", "blue", "green", "yellow"];
let buttons = $('.btn');

let gamePattern = [];
let userClickedPattern = [];
let level = 0;


let startGame = false;

$(document).keypress(function() {
    
    if (!startGame){
        
        $('#level-title').text(`Level ${level}`);
        nextSequence();
        startGame = true;
    }
    

    // console.log('Key pressed: ' + event.which) //shows numeric values of key pressed
});


//function for playing sounds
const playSound = (colorName) => {
    let audio = new Audio('sounds/' + colorName + '.mp3');
    audio.play();
};


//function adds and removes css selector pressed that animates the buttons 
const animatePress = (currentColor) => {
   $('#' + currentColor).addClass('pressed')

   setTimeout(function(){
    $('#' + currentColor).removeClass('pressed')
   }, 100)
}

//resets the game by emptying variables
const startOver = () => {
    level = 0;
    gamePattern = [];
    startGame = false;
 }

//this function compare the user's color array to game randomly generated color array
const checkAnswer = (currentLevel) => {

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("sucess");
        if (gamePattern.length === userClickedPattern.length ){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }else{
        console.log("wrong");
        playSound("wrong");
        startOver();
        $('body').addClass('game-over')

        setTimeout(function(){
            $('body').removeClass('game-over')
        }, 200)

        $('#level-title').text("Game Over, Press Any Key to Restart");
        
    }

}




buttons.click((event) => {
    userChosenColour = $(event.target).attr("id");
    playSound(userChosenColour);
    animatePress(userChosenColour);

    userClickedPattern.push(userChosenColour);
    let lastUserChosenColourIndex = userClickedPattern.length - 1;
checkAnswer(lastUserChosenColourIndex);

    console.log('userClickedPattern: ' + userClickedPattern)
})


const nextSequence = () => {
    userClickedPattern = [];
    level++;
    $('#level-title').text(`Level ${level}`);

    let randomNumber = Math.floor(Math.random(0, 1)*4);
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour)
    console.log('gamePattern: ' + gamePattern)

    $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
}


