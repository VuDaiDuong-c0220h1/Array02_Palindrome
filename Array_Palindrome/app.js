let i = 0;
function isPalindrome() {
    let str = document.getElementById("value01").value;
    let array = str.split("");
    if (array[i] === array[array.length - 1 - i]) {
        if (i == array.length) {
            document.getElementById("result").innerHTML = "Đây là từ đối xứng";
            i = 0;
            return;
        }
        i++;
        isPalindrome();
    } else {
        i = 0;
        document.getElementById("result").innerHTML = "Đây không là từ đối xứng";
    }
}
