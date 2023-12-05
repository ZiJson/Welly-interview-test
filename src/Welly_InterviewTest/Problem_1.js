/*
Question:

JavaScript: 字串反轉
function reverseString(str) {
  // 實作你的解答	
}

console.log(reverseString("Hello")); // 預期輸出: "olleH”
*/

function reverseString(str) {
    if (typeof (str) !== "string") return "Error: invalid input!";
    // str is of type string now

    if (str.length <= 1) return str;

    let ans = "";
    for (let i of str) {
        ans = i + ans
    }
    return ans
}

console.log(reverseString("Hello"));

export default reverseString