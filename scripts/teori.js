function myFunction() {
    if(document.getElementById("item-1").style.backgroundColor != "aqua"){
    document.getElementById("item-1").style.backgroundColor = "aqua";
    document.getElementById("item-1").style.color = "black";}
    else{
      document.getElementById("item-1").style.backgroundColor = "#080D19";
    document.getElementById("item-1").style.color = "black";}  
    
  }



  //navbar hide
  let lastScroll = 0;
  const defoultOffset = 0;
  const nav = document.querySelector('.navbar');
  const containHide = () => nav.classList.contains('hide');

  window.addEventListener('scroll',()=>{
    let value = window.scrollY;

    if(value>lastScroll && !containHide() && value> defoultOffset){

        nav.classList.add('hide');
        console.log('down');
    }
    else if(value<lastScroll && containHide()){

        nav.classList.remove('hide');
        console.log('up');
    }


    lastScroll = value;





})

  