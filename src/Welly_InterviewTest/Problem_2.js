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
    if(typeof(numbers)!=="object") return "Error: invalid input";

    const ans = numbers.filter((num)=>num>5);
    return ans
}

console.log(filterNumbersGreaterThanFive([1,3,,66,5,6,9]))

export default filterNumbersGreaterThanFive;