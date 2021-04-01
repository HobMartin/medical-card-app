import { createEffect, createEvent, createStore } from "effector";
import { PatientHistoryVisit } from "./../../../api/interfaces/IPatientHistoryVisit";
import { patientHistoryVisitData } from "../../../api/patientHistoryVisit";

export const $patientHistoryVisit = createStore<PatientHistoryVisit[]>([]);

export const updateHistoryVisit = createEvent<PatientHistoryVisit>();

export const fetchPatientHistoryVisitFx = createEffect(patientHistoryVisitData);

$patientHistoryVisit.on(
  fetchPatientHistoryVisitFx.doneData,
  (_, history) => history
);
