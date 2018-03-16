$(document).ready(function(){

$('.read_more').click(readMore)
$('.read_less').click(readLess)


function readMore(){
		$('.extratext').slideDown('slow');
		$('.read_more').css('display','none');
		$('.read_less').css('display','block');
	};

function readLess (){
	$('.extratext').slideUp('slow');
	$('.read_less').css('display','none');
	$('.read_more').css('display','block');
}


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
	 if($currentSlide === 3) {
        clearInterval($transition);
    }

   },3000);
	
});
