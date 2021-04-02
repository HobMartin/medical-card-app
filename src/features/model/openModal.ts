import { createEvent, createStore } from "effector";

export const $modalShow = createStore(false);

export const modalChange = createEvent<boolean>();

$modalShow.on(modalChange, (_, payload) => payload);
