// Initialize the JS for the Bootstrap Tooltips
$(document).ready(function() {
    $("i.fa").popover({'trigger':'hover'});
});

// Thanks to edelman (http://jsfiddle.net/user/edelman/fiddles/) for the JS that got this working.
function SelectText(element) {
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

$(function() {
    $('button').click(function() {
        SelectText('getEmailSig');
    });
});


// Loader
$(document).ready(function() {

    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000); // Sets the delay time. 2000 = 2 seconds

});
