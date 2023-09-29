let string='';
let buttons = document.querySelectorAll('.container-grid button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        
        if(e.target.innerHTML == 'Enter'){
            string = eval(string);
            document.querySelector('.js-input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = '';
            document.querySelector('.js-input').value = string;
        }
        else if(e.target.innerHTML == 'Del'){
            string = string.slice(0, -1);
            document.querySelector('.js-input').value = string;
        }
        else if(e.target.innerHTML == 'π'){
            pi = Math.PI;
            string = string + eval(pi);
            document.querySelector('.js-input').value = string;
        }
        else if(e.target.innerHTML == 'sin'){
            const radians = (parseFloat(string) * Math.PI) / 180;
            string = Math.sin(radians);
            document.querySelector('.js-input').value = string;
        }
        else if(e.target.innerHTML == 'cos'){
            const radians = (parseFloat(string) * Math.PI) / 180;
            string = Math.cos(radians);
            document.querySelector('.js-input').value = string;
        }
        else if(e.target.innerHTML == 'tan'){
            const radians = (parseFloat(string) * Math.PI) / 180;
            string = Math.tan(radians);
            document.querySelector('.js-input').value = string;
        }
        else if (e.target.innerHTML == 'sqrt')
        {
            string = Math.sqrt(string);
            document.querySelector('.js-input').value = string;
        }
        else if (e.target.innerHTML == 'sqr')
        {
            let sqr = string*string;
            string = eval(sqr);
            document.querySelector('.js-input').value = string;
        }
        else if (e.target.innerHTML == 'cube')
        {
            let cube = string*string*string;
            string = eval(cube);
            document.querySelector('.js-input').value = string;
        }
        else if (e.target.innerHTML == 'ln')
        {
            string = Math.log(string);
            document.querySelector('.js-input').value = string;
        }
        else if (e.target.innerHTML == 'log')
        {
            string = Math.log10(string);
            document.querySelector('.js-input').value = string;
        }
        else if (e.target.innerHTML == 'log')
        {
            string = Math.e(string);
            document.querySelector('.js-input').value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('.js-input').value = string;
        }
    });
});
