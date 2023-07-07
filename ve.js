function scrollappear(){
    var introtext = document.querySelector(`.intro-text`);
    var introPosition = introtext.getBoundingClientRect().top;
    var screenposition = window.innerHeight/2;

    if(introPosition < screenposition){
        introtext.classList.add(`apperar-text`);
    }
}

    window.addEventListener('scroll',scrollappear);