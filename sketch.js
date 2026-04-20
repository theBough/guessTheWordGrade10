//Global Variables
let myInput,myButton,myImage;
let arrayOfSecretWords,secretWord, solution;

function makeBlanks(){
  for(let i=0 ; i< secretWord.length; i++){
    if(secretWord.charAt(i) == " "){
      solution += " ";
    }else{
      solution += "-"
    }
  }
}
function selectSecretWord(){
  let randomNumber = Math.floor(Math.random()*arrayOfSecretWords.length);
  secretWord = arrayOfSecretWords[randomNumber]
  print(secretWord)
}
function setup() {
  createCanvas(400, 400);
  myInput = createInput()
  myInput.position(20,50)
  myButton = createButton("Guess");
  myButton.position(200,50)
  myButton.mousePressed(guess);
  arrayOfSecretWords = ["jazz","lynx","You can't handle the truth","Very Nice","Forest Gump","May the force be with you" ,"math", "computer science"];
  selectSecretWord();
  solution = "";
  makeBlanks();
}
function draw() {
  background(220);
  text("Guess the Word" ,20,20)
  push()
    textSize(60)
    text(solution, 20,100);
  pop()
  
}
