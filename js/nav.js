/** Opens the social media platform 
 *  in a new tab.
 */
function smDirect(platform){
    if (platform == 'ig') 
        window.open("https://www.instagram.com/argocruising", '_blank');
}

function pDirect(page){
  if (page == 'home'){
    window.open("/dist/index.html", '_parent');
  } else if (page == 'takeatour'){
    window.open("/dist/takeatour.html", '_parent');
  } else if (page == 'whoweare'){
    window.open("/dist/whoweare.html", '_parent');
  } else{
    window.open("/dist/contactus.html", '_parent' );
  }
}

/** Keeps track of whether big menu buttons are clicked.
 *  If they're clicked it adds the animate class and 
 *  triggers the firework like animation on css.
 */
var animateButton = function(e) {
    e.preventDefault;
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("btn-links");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }



/** Keeps track of the menu bar button. 
 *  If clicked it adds the close class
 *  to make the 3-bar button disappear
 *  and make the boat wheel appear.
 */ 
var menuCtr = document.querySelector('.menu-ctr');
var menu = document.querySelector('.menu');


let showWheel = false;

menuCtr.addEventListener('click', toggleMenu);

function toggleMenu(){
  if(!showWheel){
    menuCtr.classList.add('showWheel');
    menu.classList.add('showButtons');
   

    showWheel = true;
  } else {
    menuCtr.classList.remove('showWheel');
    menu.classList.remove('showButtons');
   

    showWheel = false;

  }
}



var gr_selector = document.querySelectorAll('.gre');
var en_selector = document.querySelectorAll('.eng');
var listen_greek = document.querySelector('#gre');
var listen_english = document.querySelector('#eng')

// true = greek, false = english
var current_lang = false;

listen_greek.addEventListener('click', function() {toggleLanguage(true)});
listen_english.addEventListener('click', function() {toggleLanguage(false)})

function toggleLanguage(lang_toggle){
  if (lang_toggle) 
    // could be en_selector.length as they should be the same
    for (let i = 0; i < gr_selector.length; i++){
      let pragma = gr_selector[i];
      let item = en_selector[i];
      item.classList.add('ehide');
      pragma.classList.remove('ghide');
    }   
  } else {
    
    for (let i = 0; i < gr_selector.length; i++){
      let pragma = gr_selector[i];
      let item = en_selector[i];
      pragma.classList.add('ghide');
      item.classList.remove('ehide');  
    }
  }
}










/** Keeps track of the window size in order to
 *  reset the menu button in case the user 
 *  resizes the window.
 *  EXPENSIVE. RUNS all the time
 */ 

window.onresize = function() {
  if (window.innerWidth > 972) {
    showWheel = true; // A little counter intuititive, based on toggleMenu()
    this.toggleMenu();
    
  }
}



