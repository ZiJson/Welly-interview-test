import { useState } from "react"
import { formatName } from "../Welly_InterviewTest"

export default function FormatName() {
    const [fullName, setFullName] = useState({
        firstName: "",
        lastName: ""
    })
    const onChange = (e) => {
        e.preventDefault();
        const { value, name } = e.target;
        const newFullName = name === "firstName" ?
            {
                ...fullName,
                firstName: value
            } :
            {
                ...fullName,
                lastName: value
            }
        setFullName(newFullName)
    }
    return (
        <div>
            <h1>Q3. 重構 <code className="text-lg">formatName()</code></h1>
            <div className="flex flex-col gap-6 items-center justify-center mt-16">
                <div className=" flex justify-center gap-2 font-medium">
                    <input className="h-8 rounded-lg px-2 w-28 text-xl text-center" placeholder="First Name" type="text" name="firstName" value={fullName.firstName} onChange={onChange} />
                    <input className="h-8 rounded-lg px-2 w-28 text-xl text-center" placeholder="Last Name" type="text" name="lastName" value={fullName.lastName} onChange={onChange} />
                </div>
                {
                    fullName.firstName || fullName.lastName ?
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
                            </svg>
                            <div className=" text-xl font-semibold">
                                {formatName(fullName.firstName, fullName.lastName)}
                            </div>
                        </>
                        : null
                }
            </div>
        </div>
    )
}