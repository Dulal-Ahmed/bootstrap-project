// mobileMenu
const mobileMenu = document.querySelector('.Menu');
function myFunction(x) {
  x.classList.toggle("change");
  mobileMenu.classList.toggle("menuChange");
}

// text animation
window.addEventListener('scroll', reveal);

      function reveal(){
          let textAnimationContainer = document.querySelectorAll('.textAnimationContainer');
         let clipPathh2 = document.querySelectorAll('.clipPathh2');
      
      for(let i=0; i< textAnimationContainer.length; i++){  
        let windowheight = window.innerHeight;
        let revealtop = textAnimationContainer[i].getBoundingClientRect().top;
        let revealpoint = 50;

        if(revealtop < windowheight - revealpoint){
         clipPathh2[i].style.clipPath = 'polygon(96% 100%, 98% 95%, 100% 82%, 99% 49%, 100% 44%, 97% 1%, 0 4%, 1% 23%, 0 85%, 0 99%)';
      
     }

      }
     }
