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
    if(e.target.id==="grey") body.style.backgroundColor = e.target.id;
    if(e.target.id==="blue") body.style.backgroundColor = e.target.id;
    if(e.target.id==="white") body.style.backgroundColor = e.target.id;
    if(e.target.id==="yellow") body.style.backgroundColor = e.target.id;     
  });
});
```