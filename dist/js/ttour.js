// $(window).ready(function() {
//     $(".msg-box").css({
//       'width': ($(".iframe-ctr").width() )
//     });
//     $(".msg-ctr").css({
//         'height': ($(".iframe-ctr").height()/2 )
//       });

//   });


  $(".options-ctr").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    var amount_to_scroll = (($(section).offset().top));
    $("html, body").animate({
        scrollTop: amount_to_scroll }, 1000)
    
});


function showMyImg(img_name, ctr){
  
  if (img_name === 'bc'){
    findProperPlace(ctr,'crois.jpg');
  } 
  if (img_name == 'cc'){
    findProperPlace(ctr, 'choc.jpg');
  }
  if (img_name === 'tr'){
    findProperPlace(ctr,'tyropita.jpg');
  } 
  if (img_name == 'lk'){
    findProperPlace(ctr, 'loukaniko.jpg');
  }
  if (img_name === 'oj'){
    findProperPlace(ctr,'portokali.jpg');
  } 
  if (img_name == 'aj'){
    findProperPlace(ctr, 'mhlo.jpg');
  }
  if (img_name === 'shp'){
    findProperPlace(ctr,'spasta.jpg');
  } 
  if (img_name == 'ts'){
    findProperPlace(ctr, 'tsalad.jpg');
  }
  if (img_name === 'ma'){
    findProperPlace(ctr,'gavros.jpeg');
  } 
  if (img_name == 'gs'){
    findProperPlace(ctr, 'gsalad.jpg');
  }
  if (img_name === 'sp'){
    findProperPlace(ctr,'spie.jpg');
  } 
  if (img_name == 'tz'){
    findProperPlace(ctr, 'tzatziki.jpg');
  }
  if (img_name === 'ps'){
    findProperPlace(ctr,'kalamaki.jpg');
  } 
  if (img_name == 'cs'){
    findProperPlace(ctr, 'kkalamaki.jpg');
  }
  if (img_name == 'fg'){
    findProperPlace(ctr, 'fg.jpg');
  }
  if (img_name == 'alc'){
    findProperPlace(ctr, 'alc.jpg');
  }
}


function findProperPlace(str,img){
  var toChange = $('.catalogue-ctr'.concat(str));
  var path = "(/dist/img/menu/".concat(img).concat(")");

  toChange.css("background-image", "url".concat(path));
  toChange.css("background-repeat", "no-repeat");
  toChange.css("background-position", "center");
  toChange.css("background-size", "cover");

}


var clkState = 0;



