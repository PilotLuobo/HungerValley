$('a.opt1').addClass('active');

$('a.opt1').on('click', function () {
    $('a.opt1').addClass('active');
    $('a.opt2').removeClass('active');
    $('a.opt3').removeClass('active');
    $('a.opt4').removeClass('active');
    $('.images').css({
        transform: 'translate(0)'  
    })
});

$('a.opt2').on('click', function () {
    $('a.opt1').removeClass('active');
    $('a.opt2').addClass('active');
    $('a.opt3').removeClass('active');
    $('a.opt4').removeClass('active');
    $('.images').css({
        transform: 'translate(-100%)'
    })
});

$('a.opt3').on('click', function () {
    $('a.opt1').removeClass('active');
    $('a.opt2').removeClass('active');
    $('a.opt3').addClass('active');
    $('a.opt4').removeClass('active');
    $('.images').css({
        transform: 'translate(-200%)'
    })
});

$('a.opt4').on('click', function () {
    $('a.opt1').removeClass('active');
    $('a.opt2').removeClass('active');
    $('a.opt3').removeClass('active');
    $('a.opt4').addClass('active');
    $('.images').css({
        transform: 'translate(-300%)'
    })
});