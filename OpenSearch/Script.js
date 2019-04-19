var urlParams = new URLSearchParams(window.location.search);
if(urlParams.has("URL")) {
    document.getElementById("frame").src = urlParams.get('URL');
}