var $animation_elements = $('.slidebar');
var $window = $(window);

function check_if_in_view(){
  var wheight = $window.height();
  var wtop = $window.scrollTop();
  var wbottom = (wheight + wtop);

  $.each($animation_elements, function(){
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= wtop) &&
        (element_top_position <= wbottom)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  })
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


// Functionality for the image slideshow in home
function slideshow(direction){
  var last_photo = sessionStorage.getItem('last_photo');
  if (direction == "back"){
    if (last_photo == null){
      sessionStorage.setItem('last_photo', '#o0');
      last_photo = sessionStorage.getItem('last_photo');
    }
    var order = parseInt(last_photo[2]) - 1;
    if (order < 0) { order = 7};
    var prev = "#o" + order.toString();
    var curr = document.querySelector(last_photo);
    curr.classList.add('no-show');
    var show = document.querySelector(prev);
    show.classList.remove('no-show');
    sessionStorage.setItem('last_photo', prev);
  } else {
    if (last_photo == null){
      sessionStorage.setItem('last_photo', '#o0');
      last_photo = sessionStorage.getItem('last_photo');
    }
    var order = parseInt(last_photo[2]) + 1;
    if (order > 7) { order = 0};
    var next = "#o" + order.toString();
    var curr = document.querySelector(last_photo);
    curr.classList.add('no-show');
    var show = document.querySelector(next);
    show.classList.remove('no-show');
    sessionStorage.setItem('last_photo', next);
  }

}