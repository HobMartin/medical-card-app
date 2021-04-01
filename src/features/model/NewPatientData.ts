import { IPatient } from "../../api/interfaces/IPatient";
import { createEvent, createEffect } from "effector";
import { postPatientToData } from "../../api/post";

export const updateNewPatient = createEvent<IPatient>();

export const addPatientFx = createEffect(postPatientToData);
addPatientFx.use(async (data: any) => {
  return await postPatientToData(data);
});
