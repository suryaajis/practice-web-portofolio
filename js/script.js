// event scrolling navbar
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    
    // tangkap href
    var elemenTujuan = $(tujuan);

    // jalankan fungsi scrolling
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top -50
    }, 1250, 'swing');

    e.preventDefault();


});


$(window).on('load', function() {
    $('.pLeft').addClass('pAppear');
    $('.pRight').addClass('pAppear');
    $('.content-header').addClass('pAppear');
});






$(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    if ( wScroll > $('.service').offset().top -320) {
        $('.service .card').each(function(i) {
            setTimeout(function() {
                $('.service .card').eq(i).addClass('dive');
            }, 300 * (i+1));
        })
    };





})