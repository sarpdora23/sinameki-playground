import { WorkPlace } from "../models/WorkPlace";
const { createContext } = require("react");


const WorkplaceContext = createContext({workplace:new WorkPlace("","")})

export default WorkplaceContext;