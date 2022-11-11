// this will contain the JS to display the different cards and categories

// use "cd" command followed by a space and : 
// Library/Mobile\ Documents/com~apple~CloudDocs/rather/
// RUN PROGRAM "node game.js"

const ALLCARDS = [];


// Setup for all cards for game
class QuestionCard {
    constructor(leftText, rightText){
        this.leftText = leftText;
        this.rightText = rightText;
    }
}

ALLCARDS.push(new QuestionCard("Only listen to music for the rest of your life", "Only watch tv for the rest of your life"));
ALLCARDS.push(new QuestionCard("Live in a comedy movie", "Live in a action movie"));
ALLCARDS.push(new QuestionCard("Explore outer space", "Explore the ocean"));
ALLCARDS.push(new QuestionCard("Work in a group", "Work alone"));
ALLCARDS.push(new QuestionCard("Live where its always cold", "Live where its always hot"));
ALLCARDS.push(new QuestionCard("Talk to animals", "Speak all human languages"));
ALLCARDS.push(new QuestionCard("Be able to play every musical instrument", "Master every type of sport"));
ALLCARDS.push(new QuestionCard("Have a pause button in your life", "Have a rewind button"));
ALLCARDS.push(new QuestionCard("Always be overdressed", "Always be underdressed"));
ALLCARDS.push(new QuestionCard("Always have full battery for your phone", "Always have a full tank of gas for your car"));





function getIcebreakCard(){
    // get the next random card:
    var randomIndex = Math.floor(Math.random()*ALLCARDS.length);
    var randomCard = ALLCARDS[randomIndex];

    // change left text on html page
    document.getElementById("rather1").innerHTML = randomCard.leftText;
    // change right text on page
    document.getElementById("rather2").innerHTML = randomCard.rightText;

    // Then delete that card from the deck so same card isn't displayed again:
    ALLCARDS.splice(randomIndex,1);


}


