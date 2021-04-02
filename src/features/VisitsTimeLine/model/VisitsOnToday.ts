import { createEffect, createEvent, createStore } from "effector";
import { IDoctorSchedule } from "../../../api/interfaces/IDoctorSchedule";
import { doctorScheduleForDate } from "../../../api/doctorScheduleForDate";

export const $visitOnToday = createStore<IDoctorSchedule[]>([]);

export const updateVisitOnToday = createEvent<IDoctorSchedule>();
export const resetVisitOnToday = createEvent();

export const visitOnTodayFx = createEffect(doctorScheduleForDate);
visitOnTodayFx.use(async (needDate) => await doctorScheduleForDate(needDate));

$visitOnToday.on(visitOnTodayFx.doneData, (_, patient) => patient);
$visitOnToday.reset(resetVisitOnToday);

// const filterStore = (state: IDoctorSchedule[], date: string) => {
//   return state.filter((patient) => patient.date === date);
// };
