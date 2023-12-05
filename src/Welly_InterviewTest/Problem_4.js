/*
React: 條件渲染
問題：在React中，如何根據條件渲染兩種不同的內容？

範例：

function ConditionalRendering({ isLoggedIn }) {
    // 實作你的條件渲染
}
*/

function ConditionalRendering({ isLoggedIn }) {
    // 實作你的條件渲染

    // isLoggedIn is suppose to be boolean
    if (typeof (isLoggedIn) !== "boolean") throw Error("invalid input");

    return isLoggedIn ?
        <div className="text-white bg-green-600  w-fit p-2 px-3 rounded-lg font-bold text-xl">
            Hello! you are logged in
        </div>
        :
        <div className="text-white bg-red-400 w-fit p-2 px-3 rounded-lg font-bold text-xl">
            Hey! please log in
        </div>

}

export default ConditionalRendering
