// !!!!! WARNING !!!!!: MODIFYING THIS FILE OR ANY LINKS TO THIS FILE IS AGAINST THE MODIFICATION TERMS AND CONDITIONS FOR BROWSERPLUS. THIS SCRIPT PROTECTS THE USER AND MUST BE PRESERVED IN ALL MODIFIED VERSIONS OF THE SOFTWARE.
if (window.location.hostname !== "novadevelopment.github.io" && document.cookie.replace(/(?:(?:^|.*;\s*)unofficialVersionDisclaimerDisplayed\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
    if (!window.confirm("You are about to use an unofficial version of BrowserPlus. NovaDevelopment cannot guarantee the safety of this page, as it is controlled by an outside organization or individual. Use caution when entering sensitive information into websites displayed in this version of BrowserPlus. Click \"OK\" to continue, or \"Cancel\" to go back")) {
        window.location.replace("about:blank");
    }
    document.cookie = "unofficialVersionDisclaimerDisplayed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    console.warn("Unofficial version of BrowserPlus is being used");
}
if (window.location.protocol !== "https:") {
    if (!window.confirm("The connection to BrowserPlus is not secure. We strongly reccomend not continuing to this page. To continue, click \"OK\". To go back, click \"Cancel\"")) {
        window.location.replace("securityError.html");
    }
}