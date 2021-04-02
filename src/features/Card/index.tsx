//TODO create Card component for view notes or add note (if you doctor)
import { useStore } from "effector-react";
import React, { useEffect } from "react";
import { Table } from "antd";
import { $cardInfo, cardInfoDataFx, resetCardInfo } from "./model/CardInfo";
import { columns } from "./columns";

export function CardTable() {
  const cardInfo = useStore($cardInfo);

  useEffect(() => {
    cardInfoDataFx();
    return () => {
      resetCardInfo();
    };
  }, []);
  return (
    <div>
      <Table columns={columns} dataSource={cardInfo} />
    </div>
  );
}
