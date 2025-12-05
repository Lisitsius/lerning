var stopanimation = false;

$('nav_button_anim').mouseover(function() {
   
  if (!stopanimation) {//если анимация не выключена

    $(this).toggleClass('anim')
    stopanimation = true;//выключаем

    setTimeout(function() {
      stopanimation = false;//включаем после завершения анимации.
    }, 2000)

  }

})