// dependency for inquirer npm package
var inquirer = require("inquirer");

//constructor to create questions and answers
function Qna(Q, A) {
  this.Q = Q;
  this.A = A;
}

//contains usermade Q&A
var flashCard = [];

// recursive function which will allow the user to create flashCards
var createQna = function() {
  // if the length of the flashCard array is 8 or higher, user will no longer be prompted to add Q&As
  if (flashCard < 8) {
    console.log("\nNew Flashcard!\n");
    inquirer.prompt([
      {
        name: "name",
        message: "What question would you like to ask?: "
      }, {
        name: "position",
        message: "What is the answer?: "
      },
    ]).then(function(answers) {
      // runs the constructor and places the new player object into the variable
      // player. turns the offense and defense variables into integers as well with parseInt
      var qna = new Qna(answers.Q, answers.A);
     //adds Q&As to flashCard array
      if (flashCard.length < 8) {
        flashCard.push(Qna);
        console.log("New question added to your flashcard queue!");
      }
      else{
     //creates new flashcards
      createQna();
  }
    });
  }
  else {
//meant to start Q&A "study"
    studyTime(0);
  }
};

function studyTime() {
for (var i = 0; i < flashCard.length; i++){

}
};
//create new flashcards until limit is hit
createQna();
