var isfullscreen = false;
var isblurred = false;
function fullscreen() {
    if(isfullscreen == false){
        document.getElementById("non-browser").hidden = "true";
        document.getElementById("browserfullscreen").value = "Exit Fullscreen";
        document.getElementById("frame").style = "height: 465px!important;";
        isfullscreen = true;
    }
        else{
            document.getElementById("non-browser").removeAttribute("hidden");
            document.getElementById("frame").removeAttribute("style");
            document.getElementById("browserfullscreen").value = "Fullscreen";
            isfullscreen = false;
        }
}
function nav() {
    if(document.getElementById("navurl").value == ""){
        alert("Please enter a URL to navigate.")
        document.getElementById("navurl").style = "background-color: red!important; color: white!important"
    }
        else{
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