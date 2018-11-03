if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    window.location.replace("Mobile/MobilePage.html")
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
console.log(" ____                                         _____   _             \r\n|  _ \\                                       |  __ \\ | |            \r\n| |_) | _ __  ___ __      __ ___   ___  _ __ | |__) || | _   _  ___ \r\n|  _ < | \'__|\/ _ \\\\ \\ \/\\ \/ \/\/ __| \/ _ \\| \'__||  ___\/ | || | | |\/ __|\r\n| |_) || |  | (_) |\\ V  V \/ \\__ \\|  __\/| |   | |     | || |_| |\\__ \\\r\n|____\/ |_|   \\___\/  \\_\/\\_\/  |___\/ \\___||_|   |_|     |_| \\__,_||___\/\r\n\r\nThank you for using the BrowserPlus developer features. If you are debugging a specific problem, please report the issue at https://github.com/NovaDevelopment/BrowserPlus/issues. If you do not know how to use the OpenConsole features integrated into BrowserPlus, you can find instructions at https://github.com/NovaDevelopment/BrowserPlus/wiki/Using-OpenConsole. Please let us know if you find anything interesting!");
var isfullscreen = false;
var isblurred = false;
var isDarkMode = false;
var isSimpleMode = false;
var isCoffeeMode = false;
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
            document.getElementById("browsertabtitle").innerHTML = "Loading...";
            document.getElementById("frame").hidden = "true";
            document.getElementById("loading").removeAttribute("hidden");
            document.getElementById("navurl").style.backgroundColor = "";
            document.getElementById("navurl").style.color = "";
            document.getElementById("frame").src = navigationURL;
            document.getElementById("currentURL").innerHTML = "Last Navigated URL: " + navigationURL;
            document.getElementById("navurl").value = "http://www.";
        }
        return 'Command executed.';
}
function refreshiframe() {
    nav(document.getElementById("frame").src)
}
function loadedframe() {
    document.getElementById("browsertabtitle").innerHTML = "Browser+";
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
    document.getElementById("currentURL").innerHTML = "Last Navigated URL: Waiting for navigation...";
    document.getElementById("frame").src = "splashpage.html";
    console.clear();
}
function toggleDarkMode() {
    if(isDarkMode == false){
        document.getElementById("html").style.color="white";
        document.getElementById("html").style.background="black";
        isDarkMode = true;
        isSimpleMode = false;
        isCoffeeMode = false;
    }
        else{
            document.getElementById("html").style.color="";
            document.getElementById("html").style.background="";
            isDarkMode = false;
        }
}
function toggleSimpleMode() {
    if(isSimpleMode == false){
        document.getElementById("html").style.background="none";
        document.getElementById("html").fontFamily="none";
        isSimpleMode = true;
        isDarkMode = false;
        isCoffeeMode = false;
    }
        else{
            document.getElementById("html").style.background="";
            document.getElementById("html").fontFamily="";
            isSimpleMode = false;
        }
}
function toggleCoffeeMode() {
    if (document.cookie.replace(/(?:(?:^|.*;\s*)CoffeeInfo\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
            alert("Studies have shown that blue light stimulates the human circadian rhythm. You may notice that at a certain time, some electronic devices' screens aquire an orange tint. Because orange is the opposite of blue, it blocks some of the display's blue light, aiding sleep. BrowserPlus's coffee mode does the opposite, using blue light to awaken you by stimulating your circadian rhythm.");
            document.cookie = "CoffeeInfo=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
                if(isCoffeeMode == false){
                    document.getElementById("html").style.background="linear-gradient(135deg, rgb(0,176,240) 0%, rgb(0,112,192) 100%)";
                    isCoffeeMode = true;
                    isSimpleMode = false;
                    isDarkMode = false;
                }
                    else{
                        document.getElementById("html").style.background="";
                        isCoffeeMode = false;
                    }
        }
            else {
                if(isCoffeeMode == false){
                    document.getElementById("html").style.background="linear-gradient(135deg, rgb(0,176,240) 0%, rgb(0,112,192) 100%)";
                    isCoffeeMode = true;
                    isSimpleMode = false;
                    isDarkMode = false;
                }
                    else{
                        document.getElementById("html").style.background="";
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
        window.open("https://github.com/NovaDevelopment/BrowserPlus");
    }
}
function reportIssues() {
    if(window.confirm("This page will not be opened in BrowserPlus, thus voiding all privacy features. Are you sure that you want to proceed?")) {
        window.open("https://github.com/NovaDevelopment/BrowserPlus/issues");
    }
}