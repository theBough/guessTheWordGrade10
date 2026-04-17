//Global Variables
let myInput,myButton,myImage;
let secretWords;

function selectSecretWord(){
  let randomNumber = Math.random();
  print(randomNumber)
}
function setup() {
  createCanvas(400, 400);
  myInput = createInput()
  myInput.position(20,50)
  secretWords = ["jazz","lynx","You can't handle the truth","Very Nice","Mark it zero","May the force be with you" ];
  selectSecretWord();
}
function draw() {
  background(220);
  text("Guess the Word" ,20,20)
  
}
