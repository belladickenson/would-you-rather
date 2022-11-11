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

ALLCARDS.push(new QuestionCard("Eat 100 ice cream cones", "Eat 1 grasshopper"));
ALLCARDS.push(new QuestionCard("Fight 100 birds", "Fight a bear"));
ALLCARDS.push(new QuestionCard("Recieve 1 million dollars today", "Recieve 1,000$ everyday"));
ALLCARDS.push(new QuestionCard("Only be able to listen to one album", "Only be able to watch to one show"));
ALLCARDS.push(new QuestionCard("Own a pet tiger", "Own a pet giraffe"));
ALLCARDS.push(new QuestionCard("Be president of the United States", "Be CEO of your own company"));
ALLCARDS.push(new QuestionCard("Own 10,000 pet frogs in your backyard", "Own 100 hamster in your room"));
ALLCARDS.push(new QuestionCard("Be ale to talk to your pet but they don't understand you","Be ale to talk to your pet but you don't understand them"));
ALLCARDS.push(new QuestionCard("Have a mispelled tattoo on your arm", "Have a correctly spelled tattoo on your neck"));
ALLCARDS.push(new QuestionCard("Be able to go back in time and see dinosaurs", "Be able to go to space and see aliens"));
ALLCARDS.push(new QuestionCard("Spend a day 1,000 years in the past", "Spend a day 1,000 years in the future"));
ALLCARDS.push(new QuestionCard("Have 18 fingers", "Have 4 Toes"));
ALLCARDS.push(new QuestionCard("Be able to fly", "Be able to teleport"));
ALLCARDS.push(new QuestionCard("Eat only breakfast foods for all meals", "Eat only dinner foods for all meals"));
ALLCARDS.push(new QuestionCard("Be 3 foot tall", "Be 9 foot tall"));
ALLCARDS.push(new QuestionCard("Wear a suit and tie for the rest of your life", "Wear pajamas for the rest of your life"));
ALLCARDS.push(new QuestionCard("Be half your height", "Double your weight"));
ALLCARDS.push(new QuestionCard("Live with a barnyard of animals in your house", "Live in the barn with the animals"));
ALLCARDS.push(new QuestionCard("Only be able to eat miniture versions of food", "Only be able to eat huge versions of food"));
ALLCARDS.push(new QuestionCard("Have 20 kids", "Never have kids"));
ALLCARDS.push(new QuestionCard("Never know whats going on in the media", "Never know whats going on in school"));
ALLCARDS.push(new QuestionCard("Have to live in an amusement park", "Have to live in a Target"));


function getNextCard(){
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


