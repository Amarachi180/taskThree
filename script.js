const keys = document.querySelectorAll('button')
const display = document.querySelector('.display')
const result = document.querySelector('.result')


keys.forEach(key=>{
    key.addEventListener('click',calculate);
});

function calculate(){
    let buttonText = this.innerText;
    if(buttonText === 'DEL'){
        display.innerText = '';
        result.innerText = '0';
        return;
    }

    if(buttonText === '='){
        result.innerText = eval(display.innerText);
    }

    else{
        display.textContent += buttonText;
        return;
    }
}