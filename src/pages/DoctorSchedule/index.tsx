import React from "react";
import { DoctorVisit } from "../DoctorVisit";
import { Calendar, Badge } from "antd";
import "./DoctorSchedule.css";
import { Link, NavLink, withRouter } from "react-router-dom";

//TODO create calendar for doctor visits

function getListData(value: any) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
      ];
      break;
    case 10:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
        { type: "error", content: "This is error event." },
      ];
      break;
    case 15:
      listData = [
        { type: "warning", content: "Василь Петрович Мочалка 15:45" },
        { type: "success", content: "Олена Дмитрівна Вовк 16:30" },
        { type: "error", content: "Григорій Любомирович Дуб 17:00" },
        { type: "error", content: "Іван Якович Франко 18:30" },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value: any) {
  const listData = getListData(value);

  return (
    <ul className="events">
      {listData.map((item) => (
        <li key={item.content}>
          <Badge status="warning" text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function DoctorSchedule({ history }: any) {
  function visitsOnTodayHandler() {
    history.push("/visitstoday");
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
