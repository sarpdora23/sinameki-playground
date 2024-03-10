import { useContext, useState } from "react"
import WorkplaceContext from "./contexts/WorkplaceContext"
import EmptyDashboard from "./EmptyDashboard"
import FeatureMenu from "./FeatureMenu"


export default function MainDashboard(){
    window.resizeTo(1920,1080)
    const workplaceContext = useContext(WorkplaceContext)
    const [compState,changeCompState] = useState("default")

    let comp = <EmptyDashboard />

    switch (compState) {
        case "":
            
            break;
    
        default:
            comp = <EmptyDashboard></EmptyDashboard>
            break;
    }

    return(
        <div className="w-screen h-screen bg-black">
            <div className="w-full h-full flex">
                <FeatureMenu>
                    
                </FeatureMenu>
                <div className="w-4/5 h-screen pt-3">
                    <div className="h-1/7">
                        <p className="text-purple-400 text-center"><b>Workplace:</b> {workplaceContext.workplace.workplaceName}</p>
                        <p className="text-purple-400 text-center"><b>Target:</b> {workplaceContext.workplace.maintarget}</p>
                    </div>
                    <div className="m-2 w-6/7 h-[50rem] border border-purple-600 rounded">
                        {comp}
                    </div>
                </div>
            </div>
        </div>
    )
}