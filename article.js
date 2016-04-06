var article = (function () {

// highlights text
// if you just want to retrieve comment the invocation
function doSearch(text) {
    // from http://stackoverflow.com/a/5887719/2237234
    if (window.find && window.getSelection) {
        document.designMode = "on";
        var sel = window.getSelection();
        sel.collapse(document.body, 0);

        while (window.find(text)) {
            document.execCommand("HiliteColor", false, "yellow");
            sel.collapseToEnd();
        }
        document.designMode = "off";
    } else if (document.body.createTextRange) {
        var textRange = document.body.createTextRange();
        while (textRange.findText(text)) {
            textRange.execCommand("BackColor", false, "yellow");
            textRange.collapse(false);
        }
    }
}


var sent = document.body.textContent.split("\n").filter(function(n){return n.match(/^[^<>\{\}_]+$/)}).filter(function(n){ if(n.indexOf('.') !== -1 || n.indexOf('?') !== -1 || n.indexOf('!') !== -1 ) return n });;

for (var i in sent) {
    console.log(sent[i]);
    doSearch(sent[i]);
}

}(article))
