
$('.closeMe').click(function(){
    $('.primary-bg').addClass('animated bounceOutLeft');
 });
 $('.closeSlide').click(function(){
    
    $('.slide-in').addClass('animated bounceOutRight');

 });
 
 $('.navigation li a').each(function(i){
    $(this).on("click", function(){
     $('.slide-in').css( "display", "block" );
     $('.slide-in').removeClass('animated bounceOutRight');
     $('.slide-in').addClass('animated bounceInRight');
    })
    $('#list_item_3').on("click", function(i){
        $('.list_item_3').css( "display", "block" );
        $('.list_item_3').removeClass('animated bounceOutRight');
        $('.list_item_3').addClass('animated bounceInRight');
    })
 });

 $('a.expand_link').click(function(){
    $(this).text(function(i,old){
        return old=='Expand' ?  'Collapse' : 'Expand';
    });
});


