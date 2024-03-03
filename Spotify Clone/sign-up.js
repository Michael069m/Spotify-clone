//email
//error
console.log("hello");
document.addEventListener('DOMContentLoaded',function(){
    const form = document.querySelector('form');
    form.addEventListener('submit',function(e){
        e.preventDefault();
        const input = document.querySelector('#input').value;

        console.log(input);
        let flag =0;
        if(input.indexOf(".com")==-1) flag++;
        if(input.indexOf("@")==-1)flag++;

        const error = document.querySelector('#error');
        if(flag >0) error.innerHTML='This email is invalid. Make sure it’s written like example@email.com';
        

    })
})