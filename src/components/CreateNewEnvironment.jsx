import { forwardRef, useContext, useRef } from "react"
import ButtonComp1 from "./buttons/ButtonComp1"
import InputComp1 from "./inputs/InputComp1"
import WorkplaceContext from "./contexts/WorkplaceContext"
import { useNavigate } from "react-router-dom"

const CreateNewEnvironment = forwardRef(function CreateNewEnvironment({},ref){
    const workplaceRef = useRef()
    const targetRef = useRef()
    const workplaceContext = useContext(WorkplaceContext)
    const navigate = useNavigate()
    const workplace = workplaceContext.workplace 
    return(
        <dialog className="mt-20 w-2/3 h-96 border border-purple-900" ref={ref}>
           <form className="bg-black h-full" method="dialog" >
            <p className="text-end">
                <ButtonComp1 clicked={()=>{
                 ref.current.close()
                }} widthClass={"w-8"} fontClass={"font-bold"} heightClass={"h-8"} radiusClass={"rounded-lg"} marginClass={"m-4"}>X</ButtonComp1>
            </p>
            <div className="grid mt-12 justify-items-end mr-32">
                <p className="mb-5"><label className="m-5 font-semibold text-purple-400">Workplace Name:</label><InputComp1 ref={workplaceRef}></InputComp1></p>
                <p><label className="m-5 font-semibold text-purple-400">Target:</label><InputComp1 ref={targetRef}></InputComp1></p>
                <p className="w-full mt-12 text-center">
                    <ButtonComp1 clicked={()=>{
                        workplace.maintarget = targetRef.current.value
                        workplace.workplaceName = workplaceRef.current.value
                        navigate("/dashboard")
                    }} fontClass={"font-semibold"} marginClass={"ml-32"} radiusClass={"rounded-lg"} heightClass={"h-10"} widthClass={"w-24"}>Create</ButtonComp1>
                </p>
            </div>
            
           </form>
        </dialog>
    )
})

export default CreateNewEnvironment