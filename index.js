//CLI app which will read the user input and process the input

const readLineSync = require("readline-sync");
//console.log(readLineSync); 

// let answer = ["one","two","three","four"];
// let index = readLineSync.keyInSelect(answer,"which option?");
// console.log(index);

let questions = [

  {
    question:"What's my Favourite color ? ",
    options:["red","blue","green","yellow"],
    answer:2
  },
  {
    question:"What's my Favourite food ? ",
    options:["Pizza","Burger","Sadwich","Toast"],
    answer:3
  },
  {
    question:"What's my Favourite bike ? ",
    options:["mt15","xtreme","Apache","pulsar"],
    answer:1
  },
  {
    question:"What's my Favourite cartoon ? ",
    options:["pokemon","BeyBlade","Tom&Jerry","Popeye"],
    answer:4
  },
  {
    question:"Who's my Favourite superhero ? ",
    options:["IronMan","SuperMan","Batman","Shaktimaan"],
    answer:2
  }

];

let name = readLineSync.question("Please enter your name?");

console.log("Hi "+name+" Do you know me , take below quizz to find out....!");

let score=0;

function quizz(question,options,answer){
  let index = readLineSync.keyInSelect(options,question);
  //console.log(index);
  if(index+1==answer){
    score = score + 1;
    console.log("you are right")
  }else if(index==-1){
    console.log("you choose cancel , Try next time...")
  } 
  else{
    console.log("nope...!");
  }
}

for(let i=0;i<questions.length;i++){
  quizz(questions[i].question,questions[i].options,questions[i].answer);
}

console.log("Score is "+score);

