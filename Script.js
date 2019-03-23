if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    window.location.replace("Mobile/index.html")
}
if (document.cookie.replace(/(?:(?:^|.*;\s*)disclaimerDisplayed\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
    if(window.confirm("By using this site, you agree that you have read and understand the Disclaimers and Terms section of the document, README.md, as well as the LICENSE.md file, in the GitHub repository that contains the contents of this site. If you have not done so, you must complete this action before using the site. You will be redirected to GitHub in order to read the document. After reading, you may return to BrowserPlus and use it.")){
        document.cookie = "disclaimerDisplayed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        window.location.replace("https://github.com/NovaDevelopment/BrowserPlus");
    }
        else {
            close();
            window.location.replace("about:blank");
        }
}
console.log(" ____                                         _____   _             |  _ \\                                       |  __ \\ | |            \r\n| |_) | _ __  ___ __      __ ___   ___  _ __ | |__) || | _   _  ___ \r\n|  _ < | \'__|\/ _ \\\\ \\ \/\\ \/ \/\/ __| \/ _ \\| \'__||  ___\/ | || | | |\/ __|\r\n| |_) || |  | (_) |\\ V  V \/ \\__ \\|  __\/| |   | |     | || |_| |\\__ \\\r\n|____\/ |_|   \\___\/  \\_\/\\_\/  |___\/ \\___||_|   |_|     |_| \\__,_||___\/\r\n __          __  _                                      \r\n \\ \\        \/ \/ | |                                     \r\n  \\ \\  \/\\  \/ \/__| | ___ ___  _ __ ___   ___             \r\n   \\ \\\/  \\\/ \/ _ \\ |\/ __\/ _ \\| \'_ ` _ \\ \/ _ \\            \r\n    \\  \/\\  \/  __\/ | (_| (_) | | | | | |  __\/_           \r\n  ___\\\/  \\\/ \\___|_|\\___\\___\/|_| |_| |_|\\___( )      _ _ \r\n |  __ \\               | |                 |\/      | | |\r\n | |  | | _____   _____| | ___  _ __   ___ _ __ ___| | |\r\n | |  | |\/ _ \\ \\ \/ \/ _ \\ |\/ _ \\| \'_ \\ \/ _ \\ \'__\/ __| | |\r\n | |__| |  __\/\\ V \/  __\/ | (_) | |_) |  __\/ |  \\__ \\_|_|\r\n |_____\/ \\___| \\_\/ \\___|_|\\___\/| .__\/ \\___|_|  |___(_|_)\r\n                               | |                      \r\n                               |_|                      \r\n\r\nThank you for using the BrowserPlus developer features. If you are debugging a specific problem, please report the issue at https://github.com/NovaDevelopment/BrowserPlus/issues. If you do not know how to use the OpenConsole features integrated into BrowserPlus, you can find instructions at https://github.com/NovaDevelopment/BrowserPlus/wiki/Using-OpenConsole. Please let us know if you find anything interesting!");
var isfullscreen = false;
var isblurred = false;
function fullscreen() {
    if(isfullscreen == false) {
        document.getElementById("non-browser").hidden = "true";
        document.getElementById("browserfullscreen").value = "Exit Fullwindow";
        document.getElementById("frame").style.height = "1080px";
        document.getElementById("browserfullscreen").style.width = "90px"
        document.getElementById("browserfullscreen").style.marginBottom = "10px"
        document.getElementById("browserfullscreen").style.cursor = "zoom-out";
        isfullscreen = true;
    }
        else {
            document.getElementById("non-browser").removeAttribute("hidden");
            document.getElementById("frame").style.height = "";
            document.getElementById("browserfullscreen").style.width = ""
            document.getElementById("browserfullscreen").style.marginBottom = ""
            document.getElementById("browserfullscreen").style.cursor = "";
            document.getElementById("browserfullscreen").value = "Fullwindow";
            isfullscreen = false;
        }
}
function nav(navigationURL) {
    if(navigationURL == "http://" || navigationURL == "" || navigationURL == "https://" || navigationURL == "http://www." || navigationURL == "https://www.") {
        alert("Please enter a URL to navigate.");
        document.getElementById("navurl").style.backgroundColor = "red";
        document.getElementById("navurl").style.color = "white";
    }
        else {
            document.getElementById("browsertabtitle").textContent = "Loading...";
            document.getElementById("frame").hidden = "true";
            document.getElementById("loading").removeAttribute("hidden");
            document.getElementById("navurl").style.backgroundColor = "";
            document.getElementById("navurl").style.color = "";
            document.getElementById("frame").src = navigationURL;
            document.getElementById("currentURL").textContent = "Last Navigated URL: " + navigationURL;
            document.getElementById("navurl").value = "http://www.";
        }
        return 'Command executed.';
}
function refreshiframe() {
    nav(document.getElementById("frame").src)
}
function loadedframe() {
    document.getElementById("browsertabtitle").textContent = "Browser+";
    document.getElementById("frame").removeAttribute("hidden");
    document.getElementById("loading").hidden = "true";
}
function blurcontent() {
   if(isblurred == false){
        document.getElementById("frame").style.filter = "blur(20px)";
        document.getElementById("currentURL").style.filter = "blur(20px)";
        document.getElementById("refreshbutton").disabled = "true";
        document.getElementById("refreshbutton").style.filter = "blur(10px)";
        document.getElementById("refreshbutton").style.cursor = "cursor: not-allowed";
        document.getElementById("blur").value = "Undo Privacy Blur";
        isblurred = true;
    }
        else{
            document.getElementById("frame").style.filter = "";
            document.getElementById("currentURL").style.filter = "";
            document.getElementById("refreshbutton").style.filter = "";
            document.getElementById("refreshbutton").style.cursor = "";
            document.getElementById("refreshbutton").removeAttribute("disabled");
            document.getElementById("blur").value = "Privacy Blur";
            isblurred = false;
        }
}
function windowclose() {
    document.getElementById("html").style.filter="blur(50px)"
    close();
    console.clear();
    window.location.replace("about:blank");
}
function clearData() {
    document.getElementById("currentURL").textContent = "Last Navigated URL: Waiting for navigation...";
    document.getElementById("frame").src = "splashpage.html";
    console.clear();
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
        window.open("https://github.com/NovaDevelopment/BrowserPlus");
    }
}
function reportIssues() {
    if(window.confirm("This page will not be opened in BrowserPlus, thus voiding all privacy features. Are you sure that you want to proceed?")) {
        window.open("https://github.com/NovaDevelopment/BrowserPlus/issues");
    }
}