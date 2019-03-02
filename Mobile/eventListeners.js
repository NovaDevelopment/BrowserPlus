document.getElementById("hideTools").addEventListener("click", hideTools, false);
document.getElementById("blur").addEventListener("click", blurcontent, false);
document.getElementById("quickRemove").addEventListener("click", clearData, false);
document.getElementById("toggleDarkMode").addEventListener("click", toggleDarkMode, false);
document.getElementById("openGHPage").addEventListener("click", aboutInBrowser, false);
document.getElementById("navbutton").addEventListener("click", function() {nav(document.getElementById("navurl").value)}, false);
document.getElementById("refresh").addEventListener("click", refreshiframe, false);
document.getElementById("frame").addEventListener("load", loadedframe, false);