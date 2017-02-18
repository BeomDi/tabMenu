'use strict';
$(document).ready(function () {

   var tab1 = new TabMenu({
       selector: '.tab1'
   });
    //원본을 사용하지 않고 복사하여 사본을 원하는 곳에 붙여넣어 사용

    var tab2 = new TabMenu({
       selector: '.tab2',
        fade: true,
        duration: 800
    });
});