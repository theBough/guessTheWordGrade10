//Global Variables
let myInput,myButton,myImage;
let arrayOfSecretWords,secretWord;

function selectSecretWord(){
  let randomNumber = Math.floor(Math.random()*arrayOfSecretWords.length);
  secretWord = arrayOfSecretWords[randomNumber]
  print(secretWord)
}
function setup() {
  createCanvas(400, 400);
  myInput = createInput()
  myInput.position(20,50)
  arrayOfSecretWords = ["jazz","lynx","You can't handle the truth","Very Nice","Mark it zero","May the force be with you" ,"math", "computer science"];
  selectSecretWord();
}
function draw() {
  background(220);
  text("Guess the Word" ,20,20)
  
}
