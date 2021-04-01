//TODO if clicked on recond in Doctor Schedule show Patient Information, Last Visits, History. Add new note or recipe to Card
import React, { useEffect } from "react";
import { AddNoteForm } from "./AddNoteForm";
import { Modal, Timeline } from "antd";
import { useStore } from "effector-react";
import { $modalShow, modalChange } from "../../features/model/openModal";
import {
  $patientHistoryVisit,
  fetchPatientHistoryVisitFx,
} from "./model/patientVisitData";
import "./DoctorVisit.css";

export function DoctorVisit() {
  const modal = useStore($modalShow);
  const patientHistoryVisit = useStore($patientHistoryVisit);

  useEffect(() => {
    fetchPatientHistoryVisitFx();
  }, []);

  console.log(patientHistoryVisit);

  return (
    <Modal
      title="Пацієнт"
      centered
      visible={modal}
      onOk={() => modalChange(false)}
      onCancel={() => modalChange(false)}
    >
      <p>Василь Петрович Мочалка</p>
      <p>12.04.1976</p>
      <div className="patient-timeline">
        <Timeline mode="right">
          <Timeline.Item label="12.03.2021">Ендокринолог</Timeline.Item>
          <Timeline.Item label="01.01.2021">Невропатолог</Timeline.Item>
          <Timeline.Item label="23.10.2020">Терапевт</Timeline.Item>
          <Timeline.Item label="18.09.2020">Терапевт</Timeline.Item>
          <Timeline.Item label="20.06.2020">Терапевт</Timeline.Item>
          <Timeline.Item label="16.04.2020">Кардіолог</Timeline.Item>
          <Timeline.Item label="18.04.2020">Терапевт</Timeline.Item>
        </Timeline>
      </div>
      <AddNoteForm />
    </Modal>
  );
}
