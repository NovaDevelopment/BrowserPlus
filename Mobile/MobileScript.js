if (document.cookie.replace(/(?:(?:^|.*;\s*)inlineDataDisplayed\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
    document.getElementById("disclaimer").removeAttribute("hidden");
    document.getElementById("experiencenote").removeAttribute("hidden");
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if(iOS == true){
        document.getElementById("webappnote").removeAttribute("hidden");
    }
    document.cookie = "inlineDataDisplayed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}
var isblurred = false;
var isDarkMode = false;
var toolsHidden = false;
function nav(navigationURL) {
    if(navigationURL == "http://" || navigationURL == "" || navigationURL == "https://" || navigationURL == "http://www." || navigationURL == "https://www.") {
        alert("Please enter a URL to navigate.");
        document.getElementById("navurl").style = "background-color: red!important; color: white!important";
    }
        else {
            document.getElementById("navurl").removeAttribute("style");
            document.getElementById("frame").src = navigationURL;
            document.getElementById("frame").hidden = "true";
            document.getElementById("loading").removeAttribute("hidden");
            document.getElementById("currentURL").innerHTML = "Last Navigated URL: " + navigationURL;
            document.getElementById("navurl").value = "http://www.";
        }
        return "Command executed.";
}
function loadedframe() {
    document.getElementById("frame").removeAttribute("hidden");
    document.getElementById("loading").hidden = "true";
}
function refreshiframe() {
    nav(document.getElementById("frame").src)
}
function blurcontent() {
   if(isblurred == false){
        document.getElementById("frame").style = "filter: blur(20px)!important;";
        document.getElementById("currentURL").style = "filter: blur(20px)!important;";
        document.getElementById("blur").value = "Undo Privacy Blur";
        document.getElementById("refresh").disabled = "true";
        document.getElementById("refresh").style = "filter: blur(20px)!important;"
        isblurred = true;
    }
        else{
            document.getElementById("frame").removeAttribute("style");
            document.getElementById("currentURL").removeAttribute("style");
            document.getElementById("blur").value = "Privacy Blur";
            document.getElementById("refresh").removeAttribute("disabled");
            document.getElementById("refresh").removeAttribute("style");
            isblurred = false;
        }
}
function clearData() {
    document.getElementById("currentURL").innerHTML = "Last Navigated URL: Waiting for navigation...";
    document.getElementById("frame").src = "mobilesplashpage.html";
    console.clear();
}
function toggleDarkMode() {
    if(isDarkMode == false){
        document.getElementById("html").style="background: black!important;";
        isDarkMode = true;
        isSimpleMode = false;
        isCoffeeMode = false;
    }
        else{
            document.getElementById("html").removeAttribute("style");
            isDarkMode = false;
        }
}
function aboutInBrowser() {
    if(window.confirm("This page will not be opened in BrowserPlus, thus voiding all privacy features. Are you sure that you want to proceed?")) {
        window.open("https://github.com/nebuladevelopment/BrowserPlus");
    }
}
function hideTools() {
    if(toolsHidden == false){
        document.getElementById("tools").hidden="true";
        document.getElementById("hideTools").value="Unhide Tools";
        document.getElementById("frame").style="height: 710px!important;";
        toolsHidden = true;
    }
        else{
            document.getElementById("tools").removeAttribute("hidden");
            document.getElementById("hideTools").value="Hide Tools"
            document.getElementById("frame").removeAttribute("style");
            toolsHidden = false;
        }
}