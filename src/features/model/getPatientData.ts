import { createStore, createEvent, createEffect } from "effector";
import { IPatient } from "../../api/interfaces/IPatient";
import { patientData } from "../../api/fetch";

export const $patients = createStore<IPatient[]>([]);

export const update = createEvent<IPatient>();

export const fetchPatientsFx = createEffect(patientData);

$patients.on(fetchPatientsFx.doneData, (_, patients) => patients);
