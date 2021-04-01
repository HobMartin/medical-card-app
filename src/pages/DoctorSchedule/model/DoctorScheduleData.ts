import { createStore, createEvent, createEffect } from "effector";
import { doctorScheduleData } from "../../../api/doctorSchedule";
import { IDoctorSchedule } from "../../../api/interfaces/IDoctorSchedule";

export const $doctorSchedule = createStore<IDoctorSchedule[]>([]);

export const updateDoctorSchedule = createEvent<IDoctorSchedule>();

export const reset = createEvent();

export const doctorScheduleDataFx = createEffect(doctorScheduleData);

$doctorSchedule.on(doctorScheduleDataFx.doneData, (_, data) => data);

$doctorSchedule.reset(reset);
