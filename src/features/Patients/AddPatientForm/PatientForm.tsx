import React from "react";

import { Form, Input, DatePicker } from "antd";
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

const dateFormat = "DD/MM/YYYY";
const config = {
  rules: [
    {
      type: "object" as const,
      required: true,
      message: "Введіть дану народження!",
    },
  ],
};

export function PatientForm(props: any) {
  const onCreate = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      form={props.form}
      {...layout}
      name="nest-messages"
      onFinish={onCreate}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["patient", "firstName"]}
        label="Ім'я"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["patient", "secondaryName"]}
        label="По батькові"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["patient", "lastName"]}
        label="Прізвище"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["patient", "email"]}
        label="Email"
        rules={[{ type: "email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["patient", "address", "country"]}
        label="Країна"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["patient", "address", "city"]}
        label="Місто"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["patient", "address", "region"]}
        label="Регіон"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["patient", "address", "street"]}
        label="Вулиця"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["patient", "address", "suite"]}
        label="Будинок"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["patient", "birthday"]}
        label="Дата народження"
        {...config}
      >
        <DatePicker format={dateFormat} />
      </Form.Item>
      <Form.Item name={["patient", "phone"]} label="Телефон">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}></Form.Item>
    </Form>
  );
}
