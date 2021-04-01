import { createEvent, createStore } from "effector";
import moment from "moment";

export const $selectedDate = createStore(moment().format("DD.MM.YYYY"));

export const updateSelectedDate = createEvent();
export const resetSelectedDate = createEvent();

$selectedDate.on(updateSelectedDate, (_, payload) => payload);
$selectedDate.reset(resetSelectedDate);
