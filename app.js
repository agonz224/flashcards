// dependency for inquirer npm package
var inquirer = require("inquirer");

//constructor to create questions and answers
function Qna(Q, A) {
  this.Q = Q;
  this.A = A;
}

// arrays used to contain all of our player objects
var flashCard = [];

// recursive function which will allow the user to create 5 starting players and
// 3 substitution players and then will print each players stats afterwards
var createQna = function() {
  // if the length of the team array is 8 or higher, no more questions will be asked
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
      // adds a player to the starters array if there are less than five player
      // objects in it. otherwise adds the newest player object to the subs array
      if (flashCard.length < 5) {
        flashCard.push(Qna);
        console.log("New question added to your flashcard queue!");
      }
      else{
      // runs the createPlayer function once more
      createQna();
  }
    });
  }
  else {
    // starts first round
    studyTime(0);
  }
};

function studyTime() {
for (var i = 0; i < flashCard.length; i++){
if (flashCard.length<5){
	console.log("Study time!")
}
}
};
// calls the function createPlayer() to start the code
createQna();
