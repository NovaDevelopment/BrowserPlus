var urlParams = new URLSearchParams(window.location.search);
if(urlParams.has("URL")) {
    alert("This version of BrowserPlus, the HTML version, is deprecated, and no further changes will be made to it. Stay on the lookout for an installable extension for major browsers and bookmarklets for WebExtension-incompatible platforms.")
    document.getElementById("frame").src = urlParams.get('URL');
}
