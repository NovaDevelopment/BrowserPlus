var isfullscreen = false
function fullscreen() {
    if(isfullscreen == false){
        document.getElementById("toolsheader").hidden = "true";
        document.getElementById("runscript").hidden = "true";
        document.getElementById("browserheader").hidden = "true";
        document.getElementById("browserfullscreen").value = "Exit Fullscreen";
        document.getElementById("frame").style = "height: 435px!important;"
        isfullscreen = true;
    }
        else{
            document.getElementById("toolsheader").removeAttribute("hidden");
            document.getElementById("runscript").removeAttribute("hidden");
            document.getElementById("browserheader").removeAttribute("hidden");
            document.getElementById("frame").removeAttribute("style");
            document.getElementById("browserfullscreen").value = "Fullscreen";
            isfullscreen = false;
        }
}
function nav() {
    document.getElementById("frame").src = document.getElementById("navurl").value
    document.getElementById("currentURL").innerHTML = "Current URL: " + document.getElementById("navurl").value
    document.getElementById("navurl").value = ""
}