'use strict';

function listen(){
    $('nav').on('click', function(){
        $('#links').toggleClass('open');
    });
}

$(listen);