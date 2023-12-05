/*
React: 組件
問題：使用React創建一個簡單的計數器組件，具有增加和減少計數的按鈕。
*/

import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    const onPlusClick = () => {
        setCount(pre => pre + 1)
    }
    const onMinusClick = () => {
        if (count === 0) return
        setCount(pre => pre - 1)
    }
    return (
        <div className="w-full h-full">
            <h1>Q5. 計數器組件</h1>
            <div className=" flex flex-col gap-6 items-center justify-center mt-16">
                <div className="text-2xl font-bold">
                    count: {count}
                </div>
                <div className="flex gap-4 justify-center">
                    <button className="text-8xl  bg-gray-50 p-1 rounded-lg" onClick={onPlusClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 stroke-[2.5]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                    {
                        count > 0 ?
                            <button className="text-8xl  bg-gray-50 p-1 rounded-lg" onClick={onMinusClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 stroke-[2.5]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                </svg>

                            </button>
                            : null
                    }
                </div>
            </div>
        </div>
    )
}