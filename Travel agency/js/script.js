$(document).ready(function(){

    function Overlay(){
        $('.overlay').animate(
            {
                opacity: 'toggle',
                height: 'toggle',
            }, 3000
        );
    }

    function Modal(){
        $('.modal').css(
            {
                'display': 'block',
                 'margin': '-55rem -40% 0 30%' 
            });
        $('.modal').animate(
             {
                'margin': '5rem -30% 0 30%'
             },3000);
    }
    
    $('.main_btna').on('click', function(){
        Overlay();
        Modal();
    });

    $('.main_btn').on('click', function(){
        Overlay();
        Modal();
    });

     $('.col-sm-7 a:eq(1)').on('click', function(){
         Overlay();
         Modal();
     });
    // $('#sheldure').on('click', function(){
    //     console.log('Good');
    //     Overlay();
    //     Modal();
    // });

    $('.close').on('click', function(){
        Overlay();
         $('.modal').animate(
             {
                'margin': '-55rem -30% 0 30%'
             },3000);

    });
});