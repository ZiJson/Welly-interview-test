import { useState } from "react"
import { filterNumbersGreaterThanFive } from "../Welly_InterviewTest";

export default function FilterNumbers() {
    const [nums, setNums] = useState([])
    const [inputNum, setInputNum] = useState("")
    console.log("render")
    const onChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setInputNum(value)
    }
    const onAddClick = () => {
        if (!inputNum) return
        const newNums = [...nums, inputNum];
        setNums(newNums)
    }
    const onClearClick = () => {
        setNums([])
    }

    const displayList = (numsList) => {
        return `[ ${numsList.join(", ")} ]`
    }
    return (
        <div>
            <h1>Q2. 陣列過濾</h1>
            <div className="flex flex-col gap-6 items-center justify-center mt-16">
                <div className=" flex justify-center gap-3  ">
                    <input className="h-8 rounded-lg px-2 w-20 text-xl text-center" type="number" name="num" value={inputNum} onChange={onChange} />
                    <button className="h-8 text-xl font-bold bg-white px-2 rounded-lg " onClick={onAddClick}>add</button>
                    <button className="h-8 text-xl font-bold bg-white px-2 rounded-lg" onClick={onClearClick}>clear</button>
                </div>
                <div className=" text-xl font-semibold">
                    {displayList(nums)}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
                <div className=" text-xl font-semibold">
                    {displayList(filterNumbersGreaterThanFive(nums))}
                </div>
            </div>
        </div>
    )
}