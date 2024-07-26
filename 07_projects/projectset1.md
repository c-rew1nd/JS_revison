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