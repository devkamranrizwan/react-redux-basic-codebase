import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from "../types";
import { actionCreatorWithoutPayload } from "./actionCreator";

export const increaseCounter = (count) => actionCreatorWithoutPayload(INCREMENT_COUNTER);

export const decreaseCounter = (count) => actionCreatorWithoutPayload(DECREMENT_COUNTER);

export const resetCounter = (count) => actionCreatorWithoutPayload(RESET_COUNTER);
