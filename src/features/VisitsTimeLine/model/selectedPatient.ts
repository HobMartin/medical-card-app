import { createEvent, createStore } from "effector";

export const $selectedPatient = createStore("");

export const setSelectedPatient = createEvent();
export const resetSelectedPatient = createEvent();

$selectedPatient.on(setSelectedPatient, (_, payload) => payload);
$selectedPatient.reset(resetSelectedPatient);
