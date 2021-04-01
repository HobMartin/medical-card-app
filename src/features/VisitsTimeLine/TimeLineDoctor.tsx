import React from "react";
import { Timeline } from "antd";
import { drawerChange } from "../model/openDrawer";
import { modalChange } from "../model/openModal";
import "./TimeLineDoctor.css";

export function TimeLineDoctor() {
  return (
    <div className="timeLine">
      <Timeline mode="right">
        <Timeline.Item label="15:45">
          <a
            onClick={() => {
              modalChange(true);
            }}
          >
            Василь Петрович Мочалка
          </a>
        </Timeline.Item>
        <Timeline.Item label="16:30">Олена Дмитрівна Вовк</Timeline.Item>
        <Timeline.Item label="17:00">Григорій Любомирович Дуб</Timeline.Item>
        <Timeline.Item label="18:30">Іван Якович Франко</Timeline.Item>
      </Timeline>
    </div>
  );
}
