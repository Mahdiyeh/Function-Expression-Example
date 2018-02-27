$(document).ready(function () {
    'use strict';
    var tB = $(".toggleBox"),
        i = 0,
        panel = '';
    
    for (i = 0; i < tB.length; i += 1) {
        panel = new ToggleBox(tB[i]);
    }
});
