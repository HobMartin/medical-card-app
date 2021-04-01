import React, { useEffect } from "react";
import { Timeline } from "antd";
import { useStore } from "effector-react";
import { modalChange } from "../model/openModal";
import {
  $selectedDate,
  resetSelectedDate,
} from "../../pages/DoctorSchedule/model/selectedDate";
import {
  $selectedPatient,
  setSelectedPatient,
  resetSelectedPatient,
} from "./model/selectedPatient";
import {
  $doctorSchedule,
  doctorScheduleDataFx,
  reset,
} from "../../pages/DoctorSchedule/model/DoctorScheduleData";
import {
  $visitOnToday,
  visitOnTodayFx,
  resetVisitOnToday,
} from "./model/VisitsOnToday";
import "./TimeLineDoctor.css";

export function TimeLineDoctor() {
  const doctorSchedule = useStore($doctorSchedule);
  const selectedDate = useStore($selectedDate);
  const selectedPatient = useStore($selectedPatient);
  const visitPatientOnToday = useStore($visitOnToday);

  console.log(selectedDate);

  useEffect(() => {
    doctorScheduleDataFx();
    visitOnTodayFx(selectedDate);
    return () => {
      reset();
      resetSelectedDate();
      resetSelectedPatient();
      resetVisitOnToday();
    };
  }, [selectedDate]);
  console.log(visitPatientOnToday);

  const clickOnPatientNameHandler = (e: any) => {
    setSelectedPatient((e.target as any).textContent);
    modalChange(true);
  };
  console.log(selectedPatient);

  return (
    <div className="timeLine">
      <Timeline mode="right">
        {visitPatientOnToday.map((record) => {
          if (selectedDate === record.date) {
            return (
              <Timeline.Item label={record.time}>
                <p className="patient-name" onClick={clickOnPatientNameHandler}>
                  {record.name}
                </p>
              </Timeline.Item>
            );
          }
          return null;
        })}
      </Timeline>
    </div>
  );
}
