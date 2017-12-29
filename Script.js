if (document.cookie.replace(/(?:(?:^|.*;\s*)disclaimerDisplayed\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
    alert("By using this site, you agree that you have read and understand the Disclaimers and Terms section of the document, README.md, in the GitHub repository that contains the contents of this site. If you have not done so, you must complete this action before using the site. Navigate to https://zelnickb.github.io/BrowserPlus/README.md in order to read the document. IT IS YOUR RESPONSIBILITY TO CONVERT THE MARKDOWN TO A MORE READABLE FORM IF YOU CANNOT COMPREHEND THE CODE.");
    document.cookie = "disclaimerDisplayed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}
var isfullscreen = false;
var isblurred = false;
function fullscreen() {
    if(isfullscreen == false) {
        document.getElementById("non-browser").hidden = "true";
        document.getElementById("browserfullscreen").value = "Exit Fullscreen";
        document.getElementById("frame").style = "height: 465px!important;";
        isfullscreen = true;
    }
        else {
            document.getElementById("non-browser").removeAttribute("hidden");
            document.getElementById("frame").removeAttribute("style");
            document.getElementById("browserfullscreen").value = "Fullscreen";
            isfullscreen = false;
        }
}
function nav() {
    if(document.getElementById("navurl").value == "") {
        alert("Please enter a URL to navigate.")
        document.getElementById("navurl").style = "background-color: red!important; color: white!important"
    }
        else {
            document.getElementById("browsertabtitle").innerHTML = "Loading...";
            document.getElementById("frame").hidden = "true";
            document.getElementById("loading").removeAttribute("hidden");
            document.getElementById("navurl").removeAttribute("style");
            document.getElementById("frame").src = document.getElementById("navurl").value
            document.getElementById("currentURL").innerHTML = "Current URL: " + document.getElementById("navurl").value
            document.getElementById("navurl").value = ""
        }
}
function loaded() {
    document.getElementById("browsertabtitle").innerHTML = "Browser+";
    document.getElementById("frame").removeAttribute("hidden");
    document.getElementById("loading").hidden = "true";
}
function blurcontent() {
   if(isblurred == false){
        document.getElementById("frame").style = "filter: blur(20px)!important;";
        document.getElementById("currentURL").style = "filter: blur(20px)!important;";
        document.getElementById("blur").value = "Undo Privacy Blur";
        isblurred = true;
    }
        else{
            document.getElementById("frame").removeAttribute("style");
            document.getElementById("currentURL").removeAttribute("style");
            document.getElementById("blur").value = "Privacy Blur";
            isblurred = false;
        }
}
function windowclose() {
    document.getElementById("html").style="filter: blur(50px)!important;"
    close();
    window.location.replace("about:blank");
}
function disableSite() {
    document.getElementById("frame").src="about:blank";
    document.getElementById("currentURL").innerHTML="URL is not being displayed currently.";
    document.getElementById("currentURL").style="filter: blur(5px)!important;";
    document.getElementById("navurl").disabled="true";
    document.getElementById("navbutton").disabled="true";
    document.getElementById("non-browser").innerHTML="";
    document.getElementById("frame").style="height: 465px!important;";
    document.getElementById("browserfullscreen").disabled="true";
}