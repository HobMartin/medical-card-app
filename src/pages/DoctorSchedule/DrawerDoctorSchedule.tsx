import { Drawer } from "antd";
import { useStore } from "effector-react";
import React from "react";
import { $drawerShow, drawerChange } from "../../features/model/openDrawer";
import { TimeLineDoctor } from "./TimeLineDoctor";

export function DrawerDoctorSchedule() {
  const drawerShow = useStore($drawerShow);
  return (
    <>
      <Drawer
        title="Записи"
        width="500"
        visible={drawerShow}
        onClose={() => drawerChange(false)}
      >
        <TimeLineDoctor />
      </Drawer>
    </>
  );
}
