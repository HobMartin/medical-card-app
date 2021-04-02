import { createStore, createEvent, createEffect } from "effector";
import { IPatient } from "../../api/interfaces/IPatient";
import { patientsData } from "../../api/patients";
import { addPatientFx } from "./NewPatientData";

export const $patients = createStore<IPatient[]>([]);

export const update = createEvent<IPatient>();

export const fetchPatientsFx = createEffect(patientsData);

$patients.on(fetchPatientsFx.doneData, (_, patients) => patients);

$patients.on(addPatientFx.doneData, (state, patient) => [...state, patient]);
