import { Children } from "react"

export default function ButtonComp1({clicked,isDisabled,children,marginClass,widthClass,heightClass,fontClass,radiusClass}){
    const def_class = `border border-purple-700 ${widthClass} ${radiusClass} ${heightClass} ${marginClass} ${fontClass} `
    const className = isDisabled ? def_class + "text-purple-200" : def_class + "text-purple-400 hover:bg-purple-500 hover:text-white"
    return(
        <>
        {isDisabled ? <button className={className} onClick={clicked} disabled>{children}</button> : 
            <button  className={className} onClick={clicked}>{children}</button>}
        </>
    )
}