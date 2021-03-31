import { ColumnsType } from "antd/lib/table/Table";
import { IPatient } from "../../api/interfaces/IPatient";
import { EditOutlined } from "@ant-design/icons";
import { drawerChange } from "../../features/model/openDrawer";
import { updatePatient } from "../../features/model/getPatientFromTable";

export const columns: ColumnsType<IPatient> = [
  {
    title: "Прізвище",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Ім'я",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "По батькові",
    dataIndex: "secondaryName",
    key: "secondaryName",
  },
  {
    title: "Місто",
    dataIndex: ["address", "city"],
    key: "city",
  },
  {
    title: "Вулиця",
    dataIndex: ["address", "street"],
    key: "street",
  },
  {
    title: "Будинок",
    dataIndex: ["address", "suite"],
    key: "suite",
  },
  {
    title: "Телефон",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Редагувати",
    dataIndex: "",
    key: "x",
    render: (text, record) => (
      <EditOutlined
        onClick={() => {
          updatePatient(record);
          drawerChange(true);
        }}
      />
    ),
  },
];
