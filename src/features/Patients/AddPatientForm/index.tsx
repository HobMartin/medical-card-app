import React, { useState } from "react";
import { Form, Drawer, Input, DatePicker } from "antd";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
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

function ModalForm(props: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const onCreate = (values: any) => {
    console.log("Received values of form: ", values);
    setModalVisible(false);
  };
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
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              form
                .validateFields()
                .then((values) => {
                  form.resetFields();
                  onCreate(values);
                })
                .catch((info) => {
                  console.log("Validate Failed:", info);
                });
            }}
          >
            Submit
          </Button>
        }
      >
        <Form
          form={form}
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
          <Form.Item
            wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
          ></Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}

export default ModalForm;
