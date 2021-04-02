import React from "react";
import { Form, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";

export function AddNoteForm() {
  return (
    <>
      <Form name="dynamic_form_nest_item" autoComplete="off">
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <>
                  <Form.Item
                    {...restField}
                    name={[name, "note"]}
                    fieldKey={[fieldKey, "note"]}
                    rules={[{ required: true, message: "Ви не ввели запис" }]}
                  >
                    <TextArea placeholder="Додати запис..." />
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Form.Item>
                </>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Додати запис
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </>
  );
}
