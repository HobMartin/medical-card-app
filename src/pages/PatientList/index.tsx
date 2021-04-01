import React, { useEffect } from "react";
import { columns } from "./columsForTable";
import { DrawerForm } from "../../features/Patients/AddPatientForm";
import { Table } from "antd";
import { useStore } from "effector-react";
import { $patients, fetchPatientsFx } from "../../features/model/Patients";
import "./PatientList.css";

function PatientList() {
  const patients = useStore($patients);
  useEffect(() => {
    fetchPatientsFx();
  }, []);

  return (
    <div className="patientList">
      <DrawerForm patients={patients} />
      <Table columns={columns} dataSource={patients} />
    </div>
  );
}

export default PatientList;
