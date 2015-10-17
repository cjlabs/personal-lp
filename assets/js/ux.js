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