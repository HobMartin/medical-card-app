import { Timeline } from "antd";
import React from "react";
import { drawerChange } from "../../features/model/openDrawer";
import { modalChange } from "../../features/model/openModal";

export function TimeLineDoctor() {
  return (
    <>
      <Timeline mode="right">
        <Timeline.Item label="15:45">
          <a
            onClick={() => {
              modalChange(true);
              drawerChange(false);
            }}
          >
            Василь Петрович Мочалка
          </a>
        </Timeline.Item>
        <Timeline.Item label="16:30">Олена Дмитрівна Вовк</Timeline.Item>
        <Timeline.Item label="17:00">Григорій Любомирович Дуб</Timeline.Item>
        <Timeline.Item label="18:30">Іван Якович Франко</Timeline.Item>
      </Timeline>
    </>
  );
}
