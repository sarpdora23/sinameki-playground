import { useContext, useRef } from "react";
import ButtonComp1 from "./buttons/ButtonComp1";
import CreateNewEnvironment from "./CreateNewEnvironment";
import WorkplaceContext from "./contexts/WorkplaceContext";

export default function WelcomePage(){
    const dialog_ref = useRef()

    return(
        <div className="grid place-content-center h-screen">
            <CreateNewEnvironment ref={dialog_ref}></CreateNewEnvironment>
            
            <h2 className="text-3xl text-center text-purple-500 mb-6">Sinameki's Playground</h2>
            <p className="text-purple-300 font-extralight">Welcome Sinameki's Playgorund  Web Application Security Tool for Bug Bounty Hunters,Web Pentesters</p>
            <div className="w-full grid place-items-center">
            <ButtonComp1 clicked={()=>{}} widthClass={"w-80"} radiusClass={"rounded-lg"} heightClass={"h-16"} marginClass={"mt-10 mb-5"} isDisabled={true}>Load Work Environment</ButtonComp1>
            </div>
            <div className="w-full grid place-items-center">
            <ButtonComp1 clicked={()=>{dialog_ref.current.showModal()}} widthClass={"w-80"} radiusClass={"rounded-lg"} heightClass={"h-16"} marginClass={"mt-5"} isDisabled={false}>Create New Environment</ButtonComp1>
            </div>
            
        </div>
    )
}