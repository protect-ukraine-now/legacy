const copyTrg = document.querySelector(".copy_btn");
const copyElem = document.querySelector(".letter_text");
const copyCnt = copyElem.textContent

copyTrg.onclick = function() {
    document.execCommand("copy");
}

copyTrg.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", copyCnt);
        console.log(event.clipboardData.getData("text"))
    }
});