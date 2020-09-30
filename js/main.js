$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        // nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
   
})


// function setDatepicker() {
//     $(".offer-date i").datepicker({
//     format: "mm/dd/yyyy",
//     orientation: "bottom auto",
//     autoclose: true
// });
// };