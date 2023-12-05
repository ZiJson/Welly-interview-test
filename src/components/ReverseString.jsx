import { useState } from "react"
import { reverseString } from "../Welly_InterviewTest"
export default function ReverseString() {

    const [letter, setLetter] = useState("")

    const onChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setLetter(value)
    }
    return (
        <div className=" w-full h-full">
            <h1>Q1. 字串反轉</h1>
            <div className="flex flex-col gap-6 items-center justify-center mt-16">
                <input className="h-8 rounded-lg px-2 w-[80%] text-xl text-center" type="text" placeholder="enter something" value={letter} onChange={onChange} />
                {letter ?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                    : null
                }
                <div className=" text-xl font-semibold">
                    {reverseString(letter)}
                </div>
            </div>
        </div>
    )
}