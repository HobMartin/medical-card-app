import { createStore, createEvent, createEffect } from "effector";
import { IPatient } from "../../api/interfaces/IPatient";
import { patientData } from "../../api/fetch";
import { addPatientFx } from "./getNewPatientData";

export const $patients = createStore<IPatient[]>([]);

export const update = createEvent<IPatient>();

export const fetchPatientsFx = createEffect(patientData);

$patients.on(fetchPatientsFx.doneData, (_, patients) => patients);

$patients.on(addPatientFx.doneData, (state, patient) => [...state, patient]);

addPatientFx.doneData.watch((patient) => {
  console.log(patient);
});
