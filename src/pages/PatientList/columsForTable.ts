import { ColumnsType } from "antd/lib/table/Table";
import { IPatient } from "../../api/interfaces/IPatient";
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
];
