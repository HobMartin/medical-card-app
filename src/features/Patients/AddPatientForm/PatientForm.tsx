import React, { useEffect } from "react";

import { Form, Input, DatePicker } from "antd";
import "./Modal.css";
import { useStore } from "effector-react";
// import { $patients } from "../../model/getPatientData";
import { $patientFromTable, reset } from "../../model/getPatientFromTable";
// import { addPatientFx } from "../../model/getNewPatientData";

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

// const dateFormat = "DD.MM.YYYY";
// const config = {
//   rules: [
//     {
//       type: "object" as const,
//       required: true,
//       message: "Введіть дану народження!",
//     },
//   ],
// };

export function PatientForm({ form }: any) {
  const editPatient = useStore($patientFromTable);
  console.log(editPatient);
  useEffect(() => {
    form.setFieldsValue(editPatient);
    return () => {
      form.resetFields();
    };
  }, [editPatient, form]);
  console.log(editPatient);
  // console.log(patientId);

  const onCreate = (values: any) => {
    console.log("Received values of form: ", values);
  };
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
      {/* <Form.Item name={"birthday"} label="Дата народження" {...config}>
        <DatePicker format={dateFormat} />
      </Form.Item> */}
      <Form.Item name={"phone"} label="Телефон">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}></Form.Item>
    </Form>
  );
}
