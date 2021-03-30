import React, { useState } from "react";
import { Form, Drawer } from "antd";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./Modal.css";
import { PatientForm } from "./PatientForm";

export function ModalForm() {
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const onCreate = (values: any) => {
    console.log("Received values of form: ", values);
    setModalVisible(false);
  };
  const validData = () => {
    form
      .validateFields()
      .then((values) => {
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
          onClick={() => setModalVisible(true)}
        >
          Додати пацієнта
        </Button>
      </div>
      <Drawer
        title="Додати нового пацієнта"
        width="500"
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        footer={
          <Button type="primary" htmlType="submit" onClick={validData}>
            Submit
          </Button>
        }
      >
        <PatientForm form={form} />
      </Drawer>
    </div>
  );
}
