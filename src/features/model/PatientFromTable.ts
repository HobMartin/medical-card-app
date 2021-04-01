import { createEvent, createStore } from "effector";

export const $patientFromTable = createStore({});

export const updatePatient = createEvent<Object>();
export const reset = createEvent();

$patientFromTable.on(updatePatient, (_, payload) => payload);
$patientFromTable.reset(reset);
