import React from "react";
import { TimeLineDoctor } from "../../features/VisitsTimeLine/TimeLineDoctor";
import { DoctorVisit } from "../DoctorVisit";

export function VisitsOnToday() {
  return (
    <>
      <DoctorVisit />
      <TimeLineDoctor />;
    </>
  );
}
