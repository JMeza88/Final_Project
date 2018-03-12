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



});
