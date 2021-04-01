import { ColumnsType } from "antd/lib/table/Table";
import { ICardInfo } from "../../api/interfaces/ICardInfo";

export const columns: ColumnsType<ICardInfo> = [
  {
    title: "Дата",
    dataIndex: "date",
    key: "id",
  },
  {
    title: "Назва лікарні",
    dataIndex: "clinic",
    key: "id",
  },
  {
    title: "ЛІкар",
    dataIndex: "doctor",
    key: "id",
  },
  {
    title: "Спеціальність",
    dataIndex: "qualification",
    key: "id",
  },
  {
    title: "Запис",
    dataIndex: "note",
    key: "id",
  },
];
