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

ALLCARDS.push(new QuestionCard("Put a stop to war", "End world hunger"));
ALLCARDS.push(new QuestionCard("Have 3 close friends", "Have 30 distant friends"));
ALLCARDS.push(new QuestionCard("Live forever", "Have 2 months left to live"));
ALLCARDS.push(new QuestionCard("Lose all of the money you’ve earned this year", "Lose all of the memories you've gained this year?"));
ALLCARDS.push(new QuestionCard("Win $25,000", "Have your best friend win $100,000?"));
ALLCARDS.push(new QuestionCard("Work a high-paying job that you hate", "Have your dream job with only enough money for basic necessities"));
ALLCARDS.push(new QuestionCard("Be able to change the future", "Be able to change the past"));
ALLCARDS.push(new QuestionCard("Save 3 of your closest family members", "Save 1,000 people you don’t know"));
ALLCARDS.push(new QuestionCard("Lose all of your friends but win the lottery", "Keep your friends but lose all your money"));
ALLCARDS.push(new QuestionCard("Never have any pets", "Never have any kids"));
ALLCARDS.push(new QuestionCard("Have someone take credit for something you've done", "Take credit for something you didn't do"));
ALLCARDS.push(new QuestionCard("Recieve a free house", "Give a house to a homeless person"));





function getDeepCard(){
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


