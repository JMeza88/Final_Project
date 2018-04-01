$(document).ready(function(){

$('.read_more').click(readMore)
$('.read_less').click(readLess)
$('.plan').click(lessonPlans)
$('.material').click(materials)


function readMore(){
		$('.extratext').slideDown('slow');
		$('.read_more').css('display','none');
		$('.read_less').css('display','block');
	};

function readLess (){
	$('.extratext').slideUp('slow');
	$('.read_less').css('display','none');
	$('.read_more').css('display','block');
};


// var $bg1 = $('.bg1 img').attr('src');
// var $bg2 = $('.bg2 img').attr('src');
// var $bg3 = $('.bg3 img').attr('src');
// // $('header').css('background-image', 'url(' + $bg2 + ')');

//array of images
var $slideShow = [$('.bg1 img').attr('src'), $('.bg2 img').attr('src') , $('.bg3 img').attr('src')];
var $currentSlide = 0;
//set interval
var $transition = setInterval(function(){
$('header').css('background-image', 'url(' + $slideShow[$currentSlide] + ')');
	$currentSlide++;
	 if($currentSlide >=$slideShow.length) {
        $currentSlide = 0;
    }
   },4000);
	
//});

window.onscroll = function() {createSticky()};

var nav = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function createSticky() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

function lessonPlans(){
 /*$(event.target).children().toggle()
 console.log(event.target)*/

var $lesson = $(event.target)
if ($lesson.hasClass('plan')) {
	$lesson.children().toggle()
}
} ;

function materials(){
var $material = $(event.target)
if ($material.hasClass('material')) {
	$material.children().toggle()
} 
};

});



