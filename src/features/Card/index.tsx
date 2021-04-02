//TODO create Card component for view notes or add note (if you doctor)
import { useStore } from "effector-react";
import React, { useEffect } from "react";
import { Table } from "antd";
import { $cardInfo, cardInfoDataFx, resetCardInfo } from "./model/CardInfo";
import { columns } from "./columns";
import "./card.css";

export function CardTable() {
  const cardInfo = useStore($cardInfo);

  useEffect(() => {
    cardInfoDataFx();
    return () => {
      resetCardInfo();
    };
  }, []);

  const expandedRowRender = (record: any) =>
    record.prescription
      .split(",")
      .map((item: any) => item.trim())
      .map((medicine: any) => {
        return (
          <a
            href={`https://liki24.com/search/?q=${medicine}`}
            target="_blank"
            rel="noreferrer"
          >
            {medicine} &nbsp;&nbsp;
          </a>
        );
      });
  return (
    <div className="card">
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          rowExpandable: (record) => record.prescription !== "",
          expandRowByClick: true,
        }}
        dataSource={cardInfo}
      />
    </div>
  );
}
