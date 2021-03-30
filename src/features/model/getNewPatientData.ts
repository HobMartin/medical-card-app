import { IPatient } from "../../api/interfaces/IPatient";
import { createStore, createEvent } from "effector";

export const $newPatients = createStore<IPatient[]>([]);

export const updateNewPatients = createEvent<IPatient>();
