var isDarkMode = false;
var isSimpleMode = false;
var isCoffeeMode = false;
var isBlueLightFilter = false;
function toggleCoffeeMode() {
    if (document.cookie.replace(/(?:(?:^|.*;\s*)CoffeeInfo\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
            alert("Studies have shown that blue light stimulates the human circadian rhythm. You may notice that at a certain time, some electronic devices' screens aquire an orange tint. Because orange is the opposite of blue, it blocks some of the display's blue light, aiding sleep. BrowserPlus's coffee mode does the opposite, using blue light to awaken you by stimulating your circadian rhythm.");
            document.cookie = "CoffeeInfo=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
                if(isCoffeeMode == false){
                    document.getElementById("html").style.background="linear-gradient(135deg, rgb(0,176,240) 0%, rgb(0,112,192) 100%)";
                    document.getElementById("html").style.color="";
                    document.getElementById("html").style.fontFamily="";
                    isCoffeeMode = true;
                    isDarkMode = false;
                    isSimpleMode = false;
                }
                    else{
                        document.getElementById("html").style.background="";
                        isCoffeeMode = false;
                    }
        }
            else {
                if(isCoffeeMode == false){
                    document.getElementById("html").style.background="linear-gradient(135deg, rgb(0,176,240) 0%, rgb(0,112,192) 100%)";
                    document.getElementById("html").style.color="";
                    document.getElementById("html").style.fontFamily="";
                    isCoffeeMode = true;
                    isDarkMode = false;
                    isSimpleMode = false;
                }
                    else{
                        document.getElementById("html").style.background="";
                        isCoffeeMode = false;
                    }
            }
}
function toggleDarkMode() {
    if(isDarkMode == false){
        document.getElementById("html").style.background="black";
        document.getElementById("html").style.color="white";
        document.getElementById("html").style.fontFamily="";
        isCoffeeMode = false;
        isDarkMode = true;
        isSimpleMode = false;
    }
        else{
            document.getElementById("html").style.background="";
            document.getElementById("html").style.color="";
            isDarkMode = false;
        }
}
function toggleSimpleMode() {
    if(isSimpleMode == false){
        document.getElementById("html").style.background="none";
        document.getElementById("html").style.color="";
        document.getElementById("html").style.fontFamily="none";
        isCoffeeMode = false;
        isDarkMode = false;
        isSimpleMode = true;
    }
        else{
            document.getElementById("html").style.background="";
            document.getElementById("html").style.fontFamily="";
            isSimpleMode = false;
        }
}
function toggleBlueLightFilter() {
    if(!isBlueLightFilter) {
        if(isCoffeeMode) {
            toggleCoffeeMode();
        }
        document.getElementById("toggleCoffeeMode").disabled = "true";
        document.getElementById("toggleCoffeeMode").style.animation = "none";
        document.getElementById("toggleCoffeeMode").style.cursor = "not-allowed";
        document.getElementById("html").style.filter = "sepia(100%) brightness(0.5)";
        isBlueLightFilter = true;
    }
    else {
        document.getElementById("toggleCoffeeMode").removeAttribute("disabled");
        document.getElementById("toggleCoffeeMode").style.animation = "";
        document.getElementById("toggleCoffeeMode").style.cursor = "";
        document.getElementById("html").style.filter = "";
        isBlueLightFilter = false;
    }
}