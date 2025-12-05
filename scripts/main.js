let text = document.getElementById('text');
let fon = document.getElementById('fon');
let nefon = document.getElementById('nefon');

let po1 = document.getElementById('po1');
let po2 = document.getElementById('po2');






window.addEventListener('scroll',()=>{
    let value = window.scrollY;


    text.style.marginTop = value * 0.3 + 'px';
    nefon.style.marginBottom = value * 0.3 + 'px';
    fon.style.marginTop = value * 0.2 + 'px';



    
    if(value>=500){
        po1.classList.add('animation');
    }
    else{
        po1.classList.remove('animation');
    }
    if(value>=600){
        po2.classList.add('anim');
        po2.style.opacity = 1;
    }
    else{
        po2.classList.remove('anim');
        po2.style.opacity = 0;
    }

    




});







