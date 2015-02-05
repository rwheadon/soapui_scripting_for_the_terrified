/************ vars ****************/
//Load up the footer label...
var footer_left_value = '"SoapUI Scripting for the Terrified" : Rich Wheadon';

/************ methods ****************/
function replaceContentInContainer(matchClass, content) {
    var elems = document.getElementsByTagName('*'), i;
    for (i in elems) {
        if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ')
                > -1) {
            elems[i].innerHTML = content;
        }
    }
}

/************ control center ****************/
// We're going to fire the following methods on every fire //
setTimeout(function(){
 replaceContentInContainer("footer_left", footer_left_value)
}, 5000);