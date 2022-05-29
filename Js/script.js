

let colorListWidth =$('.colorList').innerWidth();
$('.setting').click(function () { 
    return $(".colorList").css("left") === "0px"?
    $('.colorList').animate({left:-colorListWidth}, 1000) :  $('.colorList').animate({left:0}, 1000); 
}); 
$('.color').click(function (e) { 
    let getBackgroundColor= $(e.target).css('background-color')
    $('h5,h1').css('color', getBackgroundColor);
});

/******************************************************************************************************** */
let offset = $('#about').offset();
$(window).scroll(function () { 
    let wScroll= $(window).scrollTop();
    if (wScroll>offset.top-50) {
        $('nav').css("background-color", 'white');
        $('.navLink').css("color", 'black');
        $('#logoChange').attr('src', 'images/logo-dark.png');
    }
    else{
        $('nav').css("background-color", 'transparent');
        $('.navLink').css("color", 'white');   
        $('#logoChange').attr('src', 'images/logo.png');
    }
    if (wScroll>offset.top-300) {
        $('.up').css('visibility', 'visible'); 
    }
    else{
        $('.up').css('visibility', 'hidden');
    }
});
$('.up').click(function () { 
    $('html,body').animate({scrollTop: 0},1000);
});
/******************************************************************************************************** */

$('a').click(function (e) {  
    let ahref=$(e.target).attr('href');
    let offsetservices = $(ahref).offset();
  
console.log(offsetservices.top)
    $('html , body ').animate({scrollTop : offsetservices.top   },500);
 
});


$(document).ready(function () {
    $('#loading').fadeOut(1000,function () {
        $('body').css('overflow', 'auto');
    });
 
});


var typed = new Typed('.element', {
    // Waits 1000ms after typing "First"
    strings: ['First ^1000 sentence.', 'My name is Ahmed Elshazly.', 'i am front end developer' ,'and UI/UX developer'],
    typeSpeed:100,
    backSpeed:0,
    smartBackspace:true
  });