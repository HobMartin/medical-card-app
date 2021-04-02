import { createEvent, createStore } from "effector";

export const $drawerShow = createStore(false);

export const drawerChange = createEvent<boolean>();

$drawerShow.on(drawerChange, (_, payload) => payload);
