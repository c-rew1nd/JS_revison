# Project related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project One

```javascript
const  buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach((button)=>{
  button.addEventListener('click', function(e){
    if(e.target.id==="grey") 
    body.style.backgroundColor = e.target.id;

    if(e.target.id==="blue")
    body.style.backgroundColor = e.target.id;

    if(e.target.id==="white") 
    body.style.backgroundColor = e.target.id;

    if(e.target.id==="yellow") 
    body.style.backgroundColor = e.target.id;     
  });
});
```
## Project Two
```javascript
onst form = document.querySelector("form")

form.addEventListener("submit" , (e)=>{
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height<0 || isNaN(height)){
    results.innerHTML = 'Please Give a valid height'; 
  } 
  else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = 'Please Give a valid weight'; 
  }
  else {
    const BMI = (weight / ((height*height)/10000)).toFixed(2)
    results.innerHTML = `<span>${BMI}</span>`
    if(BMI<18.6){ results.innerHTML=`<span>Under Weight</span><br><span>${BMI}</span>`}
    else if (BMI>18.6 && BMI< 24.9) {results.innerHTML = `<span>Normal Range</span><br><span>${BMI}</span>`}
    else{results.innerHTML = `<span>Over weight</span><br><span>${BMI}</span>`}
  }
})
```

## Project Three
```javascript
document.getElementById('clock')
// we dont use server side cronjob for such a simple task normally
setInterval(()=>{
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
},1000)
```

## Project Four
```javascript
let randomNum= parseInt(Math.random() *100 + 1)
const submit = document.querySelector('#subt') // id 
const userInput = document.querySelector ('#guessField')
const guessSlot = document.querySelector('.guesses') // class
const remaining = document.querySelector('.lastResult')
const lowOrhigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){submit.addEventListener('click' , (e) => {
  e.preventDefault()
  const guess = parseInt(userInput.value)
  console.log(guess)
  validateGuess(guess)
})}

function validateGuess(guess){
  if(isNaN(guess)) {alert('Please enter a valid number')}

  else if (guess<1)
  {alert('Please enter a number greater than 1')}
  else if (guess>100) {
    alert('Please enter a number more than 100')
  }
  else {
    prevGuess.push(guess)
    if(numGuess===11) { displayGuess(guess); displayMessage('Game Over , random number was: ' + randomNum)
    endGame()}
    else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNum) {
  displayMessage('You Guessed it right');
  endGame()
} else if (guess< randomNum) {
  displayMessage("Number is smaller than random")
} else if (guess > randomNum) {
  displayMessage ("Number is larger than random")
}
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML = prevGuess
  numGuess++;
  remaining.innerHTML = `${11 - (numGuess - 1)}`
}

function displayMessage(message){
  lowOrhigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', (e)=> {
    randomNum= parseInt(Math.random() *100 + 1)
    prevGuess = []
    numGuess = 1
    guessSlot.innesHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
    displayMessage("")
    guessSlot.innerHTML = prevGuess
  })
}
```

## Project Four
```javascript
const randomColor = function() {
        const hex = "0123456789ABCDEF";
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    let BackColor;
    const startChangingColor = function() {
        if (!BackColor) {
            BackColor = setInterval(bg_color, 1000);
        }
    };

    const stopChangingColor = function() {
        if (BackColor) {
            clearInterval(BackColor);
            BackColor = null;
        }
    };

    function bg_color() {
        document.body.style.backgroundColor = randomColor();
    }

    document.querySelector("#start").addEventListener('click', startChangingColor);
    document.querySelector("#stop").addEventListener('click', stopChangingColor);
```