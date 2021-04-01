import React, { useEffect } from "react";
import { DoctorVisit } from "../DoctorVisit";
import { Calendar, Badge } from "antd";
import { withRouter } from "react-router-dom";
import {
  $doctorSchedule,
  doctorScheduleDataFx,
  reset,
} from "./model/DoctorScheduleData";
import { updateSelectedDate } from "./model/selectedDate";
import { useStore } from "effector-react";
import "./DoctorSchedule.css";

//TODO create calendar for doctor visits

function DoctorSchedule({ history }: any) {
  const doctorSchedule = useStore($doctorSchedule);
  useEffect(() => {
    doctorScheduleDataFx();
    return () => {
      reset();
    };
  }, []);

  function visitsOnTodayHandler(value: any) {
    console.log(value.format("DD.MM.YYYY"));
    updateSelectedDate(value.format("DD.MM.YYYY"));
    history.push("/visitstoday");
  }

  function dateCellRender(value: any) {
    return (
      <ul className="events">
        {doctorSchedule.map((record) => {
          if (value.format("DD.MM.YYYY") === record.date) {
            return (
              <li key={record.id}>
                <Badge status={record.type} text={record.name} />
              </li>
            );
          }
          return null;
        })}
      </ul>
    );
  }

  return (
    <div>
      <DoctorVisit />
      <Calendar
        dateCellRender={dateCellRender}
        onSelect={visitsOnTodayHandler}
      />
    </div>
  );
}

export default withRouter(DoctorSchedule);
