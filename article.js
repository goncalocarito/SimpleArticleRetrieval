var article = (function () {

// to highlight text in the browser
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

// HTML DOM extraction
function DOMExtract(domobj){
  if ('innerText' in domobj) {
      return sent = domobj.innerText.split("\n").filter(function(n){ if(n.indexOf('.') !== -1 || n.indexOf('?') !== -1 || n.indexOf('!') !== -1 ) return n });
  } else {
      return sent = domobj.innerHTML.replace(/<\/?[^>]+>/gi,"").split("\n").filter(function(n){ if(n.indexOf('.') !== -1 || n.indexOf('?') !== -1 || n.indexOf('!') !== -1 ) return n });;
  }
}

sent = DOMExtract(document.body);
console.log(sent);

// just for testing
for (var i in sent) {
    console.log(sent[i]);
    doSearch(sent[i]);
}

}(article))
