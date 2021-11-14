// Membuat scrolling event
// event pada saat di click
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    
    // tangkap isi href
    var elemenTujuan = $(tujuan);

    // mengambil fungsi scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top -55
    }, 1250, 'easeInOutExpo');
    
    e.preventDefault();

});

// membuat parallax memunculkan elemen
// parrallax 3 reload 
$(window).on('load', function() {
    $('.pLeft').addClass('pAppear');
    $('.pRight').addClass('pAppear');
});


// membuat parallax scroll
$(window).scroll(function() {
    
    // ambil isi scroll window
    var wScroll = $(this).scrollTop();

    // jalankan fungsi wScroll pada img,h1,p pada jumbotron
    // parallax 1 scroll header
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/6 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll +'%)'
    });

    // jalankan fungsi untuk menampilkan per img pada portfolio
    // parralax 2 scroll konten
    if ( wScroll > $('.portfolio').offset().top -320) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('dive');
            }, 300 * (i+1));
        })
    };
    // setTimeout untuk memberi waktu,  fungsi each untuk memberi fungsi pada tiap elemen

});











