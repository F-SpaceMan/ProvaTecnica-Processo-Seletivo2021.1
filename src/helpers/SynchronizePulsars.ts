import SimpleDate from "../interfaces/SimpleDate";
import SpacePoint from "../interfaces/SpacePoint";
import { TimeMachine } from "../entities/TimeMachine";
import calculateSpaceTime from "./CalculateSpaceTime";
import calculateTimeBalance from "./CalculateTimeBalance";

const synchronizePulsars = (timeMachine:TimeMachine) => {
    
    /**
     * CALC
     */
    return Math.sqrt(Math.pow(timeMachine.currentPosition.x, 2) + Math.pow(timeMachine.currentPosition.y, 2) + Math.pow(timeMachine.currentPosition.z, 2)/calculateSpaceTime(timeMachine));
}

export default synchronizePulsars;
