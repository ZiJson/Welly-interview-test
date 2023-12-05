import { useState } from "react"
import { ConditionalRendering } from "../Welly_InterviewTest"

export default function ConditionalRender() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div>
            <h1>Q4. 條件渲染</h1>
            <div className="flex flex-col gap-6 items-center justify-center mt-16">
                <ConditionalRendering isLoggedIn={isLoggedIn}/>
                <button className="text-xl font-bold p-1 px-2 bg-gray-50 rounded-lg" onClick={()=>setIsLoggedIn(pre=>!pre)}>
                    {isLoggedIn?"Log Out":"Log In"}
                </button>
            </div>
        </div>
    )
}