import { TimeMachine } from "../entities/TimeMachine";
import calculateTimeBalance from "./CalculateTimeBalance";

const calculateTimeDifferential = (timeMachine:TimeMachine) => {
    /**
     * CALC
     */
    return calculateTimeBalance(timeMachine).year * 365 * 24 + calculateTimeBalance(timeMachine).month * 30 * 24 + calculateTimeBalance(timeMachine).day * 24;

}

export default calculateTimeDifferential;
