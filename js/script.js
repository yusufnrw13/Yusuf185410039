//event link di klik
$('.page-scroll').on('click', function(e){

    //ambil href
    var tujuan = $(this).attr('href');
    //tangkap elemen bersangkutan
    var elemenTujuan = $(tujuan);

    //pindah scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    },1000);

    e.preventDefault();
});