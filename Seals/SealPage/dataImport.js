var urlParams = new URLSearchParams(window.location.search);
var client = new XMLHttpRequest();
client.open('GET', "../Seal%20Data/" + urlParams.get("sealIDHash") + ".xml");
client.responseType = "document";
client.addEventListener("load", function() {
    window.responseXML = client.responseXML;
    document.getElementById("data-IDHash").textContent = window.responseXML.getElementsByTagName("IDHash")[0].childNodes[0].nodeValue;
    document.getElementById("data-PubKey").addEventListener("click", function () {
        window.alert(window.responseXML.getElementsByTagName("publicKey")[0].childNodes[0].nodeValue);
    }, false);
    document.getElementById("data-HMACResult").addEventListener("click", function () {
        window.alert(window.responseXML.getElementsByTagName("HMACResult")[0].childNodes[0].nodeValue);
    }, false);
    document.getElementById("data-Receiver").textContent = window.responseXML.getElementsByTagName("receiver")[0].childNodes[0].nodeValue;
    document.getElementById("data-IssueDate").textContent = window.responseXML.getElementsByTagName("issueDate")[0].childNodes[0].nodeValue;
    document.getElementById("data-ExpirationDate").textContent = window.responseXML.getElementsByTagName("expirationDate")[0].childNodes[0].nodeValue;
});
client.send();
document.getElementById("data-SealImage").src = "../Seal%20Data/Seal%20Images/" + urlParams.get("sealIDHash") + ".png";