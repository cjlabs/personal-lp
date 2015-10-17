/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 function Ux() {
    this.clickName = function() {
        nameId = "#name";
        $(nameId).on('click', function() {

            $("header").load('partials/detail_name.html', function(){
                $(this).slideDown()();
            });
        });

    }
}

Ux.init = function() {
    uxObj = new Ux();
    uxObj.clickName();
}




$(function () {

    var owl = $("#owl-demo");

    owl.owlCarousel({
        navigation: false,
        singleItem: true,
        pagination: false,
        transitionStyle: "backSlide"
    });


    var owl = $("#owl-demo").data('owlCarousel');


    $(".service-box").on('click', function () {
        x = $(this).attr('val');
        owl.goTo(x);

    });

});