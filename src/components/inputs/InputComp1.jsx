import { forwardRef } from "react"

const InputComp1 = forwardRef(function InputComp1({widthClass},ref){
    const className = `bg-black border border-purple-600 ${widthClass} text-white pl-2 focus:outline-purple-500 focus:outline-offset-1 focus:ring-purple-500 focus:ring-1`
    return(
        <input ref={ref} className={className}></input>
    )
})

export default InputComp1