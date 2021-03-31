import React, { useEffect } from "react";

//TODO create list of patient

import { Table } from "antd";
import { useStore } from "effector-react";
import {
  $patients,
  fetchPatientsFx,
} from "../../features/model/getPatientData";
import { columns } from "./columsForTable";
import { ModalForm } from "../../features/Patients/AddPatientForm";

function PatientList() {
  const patients = useStore($patients);
  useEffect(() => {
    fetchPatientsFx();
  }, []);

  return (
    <>
      <ModalForm patients={patients} />
      <Table columns={columns} dataSource={patients} />
    </>
  );
}

export default PatientList;
