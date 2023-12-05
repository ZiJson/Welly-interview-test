/*
JavaScript: 陣列過濾
問題：寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。 

範例：

function filterNumbersGreaterThanFive(numbers) {
  // 實作你的解答
}
*/

function filterNumbersGreaterThanFive(numbers) {
    // 實作你的解答
    if(!Array.isArray(numbers)) return "Error: invalid input";

    const ans = numbers.filter((num)=>num>5);
    return ans
}

console.log(filterNumbersGreaterThanFive("fe"))

export default filterNumbersGreaterThanFive;