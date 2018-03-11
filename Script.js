if (document.cookie.replace(/(?:(?:^|.*;\s*)disclaimerDisplayed\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
    if(window.confirm("By using this site, you agree that you have read and understand the Disclaimers and Terms section of the document, README.md, in the GitHub repository that contains the contents of this site. If you have not done so, you must complete this action before using the site. You will be redirected to GitHub in order to read the document. After reading, you may return to BrowserPlus and use it.")){
        document.cookie = "disclaimerDisplayed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        window.location.replace("https://github.com/ZelnickB/BrowserPlus#browserplus");
    }
        else {
            close();
            window.location.replace("about:blank");
        }
}
var isfullscreen = false;
var isblurred = false;
var isDarkMode = false;
var isSimpleMode = false;
function fullscreen() {
    if(isfullscreen == false) {
        document.getElementById("non-browser").hidden = "true";
        document.getElementById("browserfullscreen").value = "Exit Fullscreen";
        document.getElementById("frame").style = "height: 504px!important;";
        isfullscreen = true;
    }
        else {
            document.getElementById("non-browser").removeAttribute("hidden");
            document.getElementById("frame").removeAttribute("style");
            document.getElementById("browserfullscreen").value = "Fullscreen";
            isfullscreen = false;
        }
}
function nav(navigationURL) {
    if(navigationURL == "") {
        alert("Please enter a URL to navigate.");
        document.getElementById("navurl").style = "background-color: red!important; color: white!important";
    }
        else {
            document.getElementById("browsertabtitle").innerHTML = "Loading...";
            document.getElementById("frame").hidden = "true";
            document.getElementById("loading").removeAttribute("hidden");
            document.getElementById("navurl").removeAttribute("style");
            document.getElementById("frame").src = navigationURL;
            document.getElementById("currentURL").innerHTML = "Current URL: " + navigationURL;
            document.getElementById("navurl").value = "";
        }
        return "Command executed.";
}
function loadedframe() {
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
    clear();
    window.location.replace("about:blank");
}
function clearData() {
    document.getElementById("currentURL").innerHTML = "Current URL: Waiting for navigation...";
    document.getElementById("frame").src = "splashpage.html";
    clear();
}
function toggleDarkMode() {
    if(isDarkMode == false){
        document.getElementById("html").style="color: white!important; background: black!important;";
        isDarkMode = true;
        isSimpleMode = false;
    }
        else{
            document.getElementById("html").removeAttribute("style");
            isDarkMode = false;
        }
}
function toggleSimpleMode() {
    if(isSimpleMode == false){
        document.getElementById("html").style="background: white!important; font-family:none!important";
        isSimpleMode = true;
        isDarkMode = false;
    }
        else{
            document.getElementById("html").removeAttribute("style");
            isSimpleMode = false;
        }
}
function versionInfoView() {
    window.open(
        "Version Info.html",
        "popUpWindow",
        "toolbar=no, width=300px, height: 660px"
    )
}
function aboutInBrowser() {
    if(window.confirm("This page will not be opened in BrowserPlus, thus voiding all privacy features. Are you sure that you want to proceed?")) {
        window.open("https://github.com/ZelnickB/BrowserPlus");
    }
}