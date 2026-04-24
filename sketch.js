//Global Variables
let myInput,myButton,myImage;
let arrayOfSecretWords,secretWord, solution, wrongCount;
let pictures = []
function wrong(){
  wrongCount += 1;
}
function guess(){
  let theirGuess = myInput.value()//grab the letter from the input box.
  theirGuess = theirGuess.toLowerCase()
  if(secretWord.indexOf(theirGuess) >= 0){
    //the letter they guessed is in the secret word
    let positions = []//array that holds the position of repeated letters
    for(let i =0 ; i < secretWord.length ; i++){
      if(secretWord[i] == theirGuess){
        positions.push(i);//add the location of the guessed letter
      }
    }//end loop
    let editSolution = solution.split("")//splits the solution into an array
    for(let i = 0; i < positions.length ; i++){
      editSolution[positions[i]] = theirGuess;//changes the dash to their guess  
    }
    solution = editSolution.join("")//change the array back to a string
  }else{
    wrong();
  }
}
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
  wrongCount = 0;
  myInput = createInput()
  myInput.position(20,50)
  myButton = createButton("Guess");
  myButton.position(200,50)
  myButton.mousePressed(guess);
  arrayOfSecretWords = ["jazz","lynx","you can't handle the truth","very nice","forest gump","may the force be with you" ,"math", "computer science"];
  selectSecretWord();
  solution = "";
  makeBlanks();
  for (let i =1 ; i<6 ; i++){
    //load the images into an array
    pictures.push(loadImage("pictures/pic" + i + ".png"))
  }

}
function draw() {
  background(220);
  text("Guess the Word" ,20,20)
  push()
    textSize(60)
    text(solution, 20,200);
  pop()
  image(pictures[wrongCount],20,250)
}
