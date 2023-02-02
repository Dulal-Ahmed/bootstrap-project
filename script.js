// mobileMenu
const mobileMenu = document.querySelector('.Menu');
const removeClass = document.querySelector('.toggle');
function myFunction(x) {
  x.classList.toggle("change");
  if(mobileMenu.style.width === "100%"){
    mobileMenu.style.width = "0%";
  }else{
    mobileMenu.style.width = "100%"
  }
}

function myHidden() {
  mobileMenu.style.width = "0%";
  removeClass.classList.remove('change');
}

// text animation
window.addEventListener('scroll', reveal);

      function reveal(){
          let textAnimationContainer = document.querySelectorAll('.textAnimationContainer');
          let svgAnimationContainer = document.querySelectorAll('.svgAnimationContainer');
        let clipPathh2 = document.querySelectorAll('.clipPathh2');
        let clipPathh3 = document.querySelectorAll('.clipPathh3');
      
      for(let i=0; i< textAnimationContainer.length; i++){  
        let windowheight = window.innerHeight;
        let revealtop = textAnimationContainer[i].getBoundingClientRect().top;
      let revealpoint = 50;

        if(revealtop < windowheight - revealpoint){
         clipPathh2[i].style.clipPath = 'polygon(96% 100%, 98% 95%, 100% 82%, 99% 49%, 100% 44%, 97% 1%, 0 4%, 1% 23%, 0 85%, 0 99%)';
      
     }
    }
      for(let i=0; i< svgAnimationContainer.length; i++){  
        let windowheight = window.innerHeight;
        let revealtop = svgAnimationContainer[i].getBoundingClientRect().top;
      let revealpoint = 50;

        if(revealtop < windowheight - revealpoint){
         clipPathh3[i].style.clipPath = 'polygon(96% 100%, 98% 95%, 100% 82%, 99% 49%, 100% 44%, 97% 1%, 0 4%, 1% 23%, 0 85%, 0 99%)';
      
     }


      }
     }
