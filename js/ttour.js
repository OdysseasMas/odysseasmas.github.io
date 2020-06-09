
// // Show the picture on hover for menu
$(".options-ctr").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    var amount_to_scroll = (($(section).offset().top));
    $("html, body").animate({
        scrollTop: amount_to_scroll }, 1000)
    
});


// Shows and hides the menu buttons and contents
function animat(btn_cname,ctr_cname, war_cname, arr_cname, fit_cname, btn_add_hide,hid_cname, option_cname = ""){
  if ($(window).width() < 769){setTimeout(function(){ helper_animate(btn_cname,ctr_cname, war_cname, arr_cname, fit_cname, btn_add_hide,hid_cname,option_cname) }, 1000);
  } else{
    helper_animate(btn_cname,ctr_cname, war_cname, arr_cname, fit_cname, btn_add_hide,hid_cname, option_cname);
  }

}

// Params: button class name, ctr class name, warning class name, arrow class name, food items class name, class name to hide button, class name that hides items.
// option_cname (this one is optional)
function helper_animate(btn_cname,ctr_cname, war_cname, arr_cname, fit_cname, btn_add_hide,hid_cname, option_cname = ""){
  var breakfast_button = document.querySelector(btn_cname);
  var change_layout = document.querySelector(ctr_cname);
  var warnings = document.querySelectorAll(war_cname);
  var arrow = document.querySelector(arr_cname);
  var items = document.querySelectorAll(fit_cname);
  var options;
  if (option_cname != ""){
    options = document.querySelectorAll(option_cname);
  }

  breakfast_button.classList.add(btn_add_hide);
  if (btn_cname[1] == 'b'){
    change_layout.classList.add('bf-new-layout');
  } else if (btn_cname[1] == "l") {
    change_layout.classList.add('lu-new-layout');
  } else{
    change_layout.classList.add('di-new-layout');
  }
  
  setTimeout(function(){
    arrow.classList.remove(hid_cname);
    for (let i=0; i < items.length; i++){
      if (i < 2) {
        warnings[i].classList.remove(hid_cname);
        if (option_cname != ""){
          options[i].classList.remove(hid_cname);
        }
        
      }
      items[i].classList.remove(hid_cname);} } , 200); 

}





  
function revert(btn_cname,ctr_cname, war_cname, arr_cname, fit_cname, btn_add_hide,hid_cname,option_cname = ""){
  var breakfast_button = document.querySelector(btn_cname);
  var change_layout = document.querySelector(ctr_cname);
  var warnings = document.querySelectorAll(war_cname);
  var arrow = document.querySelector(arr_cname);
  var items = document.querySelectorAll(fit_cname);
  var options;
  if (option_cname != ""){
    options = document.querySelectorAll(option_cname);
  }
  breakfast_button.classList.remove(btn_add_hide);
  if (btn_cname[1] == 'b'){
    change_layout.classList.remove('bf-new-layout');
  } else if (btn_cname[1] == "l") {
    change_layout.classList.remove('lu-new-layout');
  } else{
    change_layout.classList.remove('di-new-layout');
  }
  arrow.classList.add(hid_cname);
  for (let i=0; i < items.length; i++){
    if (i < 2) {
      warnings[i].classList.add(hid_cname);
      if (option_cname != ""){
        options[i].classList.add(hid_cname);
      }
    }
    items[i].classList.add(hid_cname);}

}




// function animateBr(){
//   if ($(window).width() < 769){
//     setTimeout(function(){
//       var breakfast_button = document.querySelector('.bfast');
//       var change_layout = document.querySelector('.breakfast-ctr');
//       var warnings = document.querySelectorAll('.bfhide.warning');
//       var arrow = document.querySelector('.bfhide.arrow-back');
//       var items = document.querySelectorAll('.bfood-ctr.bfhide');
//       breakfast_button.classList.add('bhide');
//       change_layout.classList.add('add-layout');
//       setTimeout(function(){
//         arrow.classList.remove('bfhide');
//         for (let i=0; i < items.length; i++){
//           if (i < 2) {
//             warnings[i].classList.remove('bfhide');
//           }
//           items[i].classList.remove('bfhide');} } , 200); 
      
//       }, 1000);

//   } else {
//     var breakfast_button = document.querySelector('.bfast');
//     var change_layout = document.querySelector('.breakfast-ctr');
//     var warnings = document.querySelectorAll('.bfhide.warning');
//     var arrow = document.querySelector('.bfhide.arrow-back');
//     var items = document.querySelectorAll('.bfood-ctr.bfhide');
//     breakfast_button.classList.add('bhide');
//     change_layout.classList.add('add-layout');
//     setTimeout(function(){
//       arrow.classList.remove('bfhide');
//       for (let i=0; i < items.length; i++){
//         if (i < 2) {
//           warnings[i].classList.remove('bfhide');
//         }
//         items[i].classList.remove('bfhide');} } , 200); 
//   }
// }



// function revert(){
//   var breakfast_button = document.querySelector('.bfast');
//   var change_layout = document.querySelector('.breakfast-ctr');
//   var warnings = document.querySelectorAll('.warning');
//   var arrow = document.querySelector('.arrow-back');
//   var items = document.querySelectorAll('.bfood-ctr');
//   breakfast_button.classList.remove('bhide');
//   change_layout.classList.remove('add-layout');
//   arrow.classList.add('bfhide');
//   for (let i=0; i < items.length; i++){
//     if (i < 2) {
//       warnings[i].classList.add('bfhide');
//     }
//     items[i].classList.add('bfhide');}

// }


function fadeLeftRight(){
  var toFade = document.querySelectorAll('.welcome-text');
  for (let i = 0; i < toFade.length; i++){
    toFade[i].classList.add('fadeLR');
    
  }
}