import React from "react";
import { Form, Drawer } from "antd";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./Modal.css";
import { PatientForm } from "./PatientForm";
import { $drawerShow, drawerChange } from "../../model/openDrawer";
import { useStore } from "effector-react";
import { reset } from "../../model/PatientFromTable";
import { addPatientFx } from "../../model/NewPatientData";

export function DrawerForm({ patients }: any) {
  const drawerShow = useStore($drawerShow);

  const [form] = Form.useForm();
  const onCreate = (values: any) => {
    drawerChange(false);
  };

  const validData = (e: any) => {
    e.preventDefault();
    form
      .validateFields()
      .then((values) => {
        addPatientFx(values);
        form.resetFields();
        onCreate(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <div>
      <div className="btn-add-patient">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => {
            reset();
            drawerChange(true);
          }}
        >
          Додати пацієнта
        </Button>
      </div>
      <Drawer
        title="Додати нового пацієнта"
        width="500"
        visible={drawerShow}
        onClose={() => drawerChange(false)}
        footer={
          <Button type="primary" htmlType="submit" onClick={validData}>
            Submit
          </Button>
        }
        destroyOnClose={true}
      >
        <PatientForm form={form} />
      </Drawer>
    </div>
  );
}
