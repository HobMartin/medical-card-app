import React, { useEffect } from "react";
import { Timeline } from "antd";
import { useStore } from "effector-react";
import { modalChange } from "../model/openModal";
import {
  $selectedDate,
  resetSelectedDate,
} from "../../pages/DoctorSchedule/model/selectedDate";
import {
  setSelectedPatient,
  resetSelectedPatient,
} from "./model/selectedPatient";
import {
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
  const selectedDate = useStore($selectedDate);
  const visitPatientOnToday = useStore($visitOnToday);

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

  const clickOnPatientNameHandler = (e: any) => {
    setSelectedPatient((e.target as any).textContent);
    modalChange(true);
  };

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
