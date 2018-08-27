// math.js Library Configuration
math.config({
  number: 'BigNumber',
  precision: 512
})
// Verification Script
var pubFactorKey;
var privFactorKey;
var sealMultRes;
function verify() {
    pubFactorKey = math.eval(document.getElementById("pubFactorKey").value);
    privFactorKey = math.eval(document.getElementById("privFactorKey").value);
    sealMultRes = math.eval(document.getElementById("sealMultRes").value);
}