import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { useStore } from "effector-react";
import { $patientFromTable, reset } from "../../model/PatientFromTable";
import "./Modal.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} є обов'язковим!",
  types: {
    email: "${label} неправильний email!",
    number: "${label} неправильне число",
  },
  number: {
    range: "${label} повинно бути між ${min} та ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */
export function PatientForm({ form }: any) {
  const editPatient = useStore($patientFromTable);
  useEffect(() => {
    form.setFieldsValue(editPatient);

    return () => {
      reset();
      form.resetFields();
    };
  }, [editPatient, form]);

  const onCreate = (values: any) => {};
  return (
    <Form
      form={form}
      {...layout}
      name="nest-messages"
      onFinish={onCreate}
      validateMessages={validateMessages}
    >
      <Form.Item name={"firstName"} label="Ім'я" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name={"secondaryName"}
        label="По батькові"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={"lastName"}
        label="Прізвище"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={"email"} label="Email" rules={[{ type: "email" }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name={["address", "country"]}
        label="Країна"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["address", "city"]}
        label="Місто"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["address", "region"]}
        label="Регіон"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["address", "street"]}
        label="Вулиця"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["address", "suite"]}
        label="Будинок"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={"phone"} label="Телефон">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}></Form.Item>
    </Form>
  );
}
