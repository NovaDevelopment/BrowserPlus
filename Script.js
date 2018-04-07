if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    window.location.replace("MobilePage.html")
}
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
var isCoffeeMode = false;
function fullscreen() {
    if(isfullscreen == false) {
        document.getElementById("non-browser").hidden = "true";
        document.getElementById("browserfullscreen").value = "Exit Fullscreen";
        document.getElementById("frame").style = "height: 504px!important;";
        document.getElementById("browserfullscreen").style = "width: 90px!important; margin-bottom: 10px; cursor: zoom-out!important;"
        isfullscreen = true;
    }
        else {
            document.getElementById("non-browser").removeAttribute("hidden");
            document.getElementById("frame").removeAttribute("style");
            document.getElementById("browserfullscreen").removeAttribute("style");
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
            document.getElementById("html").style = "cursor: wait!important;"
            document.getElementById("frame").hidden = "true";
            document.getElementById("loading").removeAttribute("hidden");
            document.getElementById("navurl").removeAttribute("style");
            document.getElementById("frame").src = navigationURL;
            document.getElementById("currentURL").innerHTML = "Last Navigated URL: " + navigationURL;
            document.getElementById("navurl").value = "";
        }
        return 'Command executed.';
}
function refreshiframe() {
    nav(document.getElementById("frame").src)
}
function loadedframe() {
    document.getElementById("browsertabtitle").innerHTML = "Browser+";
    document.getElementById("frame").removeAttribute("hidden");
    document.getElementById("html").removeAttribute("style");
    document.getElementById("loading").hidden = "true";
}
function blurcontent() {
   if(isblurred == false){
        document.getElementById("frame").style = "filter: blur(20px)!important;";
        document.getElementById("currentURL").style = "filter: blur(20px)!important;";
        document.getElementById("refreshbutton").disabled = "true";
        document.getElementById("refreshbutton").style = "filter: blur(10px)!important; cursor: not-allowed!important;"
        document.getElementById("blur").value = "Undo Privacy Blur";
        isblurred = true;
    }
        else{
            document.getElementById("frame").removeAttribute("style");
            document.getElementById("currentURL").removeAttribute("style");
            document.getElementById("refreshbutton").removeAttribute("disabled");
            document.getElementById("refreshbutton").removeAttribute("style");
            document.getElementById("blur").value = "Privacy Blur";
            isblurred = false;
        }
}
function windowclose() {
    document.getElementById("html").style="filter: blur(50px)!important;"
    close();
    console.clear();
    window.location.replace("about:blank");
}
function clearData() {
    document.getElementById("currentURL").innerHTML = "Last Navigated URL: Waiting for navigation...";
    document.getElementById("frame").src = "splashpage.html";
    console.clear();
}
function toggleDarkMode() {
    if(isDarkMode == false){
        document.getElementById("html").style="color: white!important; background: black!important;";
        isDarkMode = true;
        isSimpleMode = false;
        isCoffeeMode = false;
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
        isCoffeeMode = false;
    }
        else{
            document.getElementById("html").removeAttribute("style");
            isSimpleMode = false;
        }
}
function toggleCoffeeMode() {
    if (document.cookie.replace(/(?:(?:^|.*;\s*)CoffeeInfo\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
            alert("Studies have shown that blue light stimulates the human circadian rhythm. You may notice that at a certain time, some electronic devices' screens aquire an orange tint. Because orange is the opposite of blue, it blocks some of the display's blue light, aiding sleep. BrowserPlus's coffee mode does the opposite, using blue light to awaken you by stimulating your circadian rhythm.");
            document.cookie = "CoffeeInfo=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
                if(isCoffeeMode == false){
                    document.getElementById("html").style="background: linear-gradient(135deg, aqua 0%, blue 50%, darkblue 100%);";
                    isCoffeeMode = true;
                    isSimpleMode = false;
                    isDarkMode = false;
                }
                    else{
                        document.getElementById("html").removeAttribute("style");
                        isCoffeeMode = false;
                    }
        }
            else {
                if(isCoffeeMode == false){
                    document.getElementById("html").style="background: linear-gradient(135deg, aqua 0%, blue 50%, darkblue 100%);";
                    isCoffeeMode = true;
                    isSimpleMode = false;
                    isDarkMode = false;
                }
                    else{
                        document.getElementById("html").removeAttribute("style");
                        isCoffeeMode = false;
                    }
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
function reportIssues() {
    if(window.confirm("This page will not be opened in BrowserPlus, thus voiding all privacy features. Are you sure that you want to proceed?")) {
        window.open("https://github.com/ZelnickB/BrowserPlus/issues");
    }
}