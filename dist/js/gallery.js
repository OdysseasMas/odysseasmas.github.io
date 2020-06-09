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

