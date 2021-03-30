import React, { useEffect } from "react";

//TODO create list of patient

import { Table } from "antd";
import { useStore } from "effector-react";
import {
  $patients,
  fetchPatientsFx,
} from "../../features/model/getPatientData";
import { columns } from "./columsForTable";

function PatientList() {
  const patients = useStore($patients);
  useEffect(() => {
    fetchPatientsFx();
  }, []);

  return (
    <>
      <Table columns={columns} dataSource={patients} />
    </>
  );
}

export default PatientList;
