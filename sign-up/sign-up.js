$('.banner-BackgroundWrapper-mobile>ul>li').hide();
$('.banner-BackgroundWrapper-mobile>ul>li:first-child').show();

setInterval(function() {
    $('.banner-BackgroundWrapper-mobile>ul>li:first-child').fadeOut()
    .next().fadeIn().end(1000)
    .appendTo('.banner-BackgroundWrapper-mobile>ul')
},3000);
