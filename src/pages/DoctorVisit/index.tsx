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
import { $selectedPatient } from "../../features/VisitsTimeLine/model/selectedPatient";
import { $visitOnToday } from "../../features/VisitsTimeLine/model/VisitsOnToday";
import "./DoctorVisit.css";

export function DoctorVisit() {
  const modal = useStore($modalShow);
  const patientHistoryVisit = useStore($patientHistoryVisit);
  const selectedPatient = useStore($selectedPatient);
  const visitOnToday = useStore($visitOnToday);

  useEffect(() => {
    fetchPatientHistoryVisitFx();
  }, []);

  return (
    <Modal
      title="Пацієнт"
      centered
      visible={modal}
      onOk={() => modalChange(false)}
      onCancel={() => modalChange(false)}
    >
      {visitOnToday.map((patient) => {
        if (selectedPatient === patient.name) {
          return (
            <>
              <p>{patient.name}</p>
              <div className="patient-timeline">
                <Timeline mode="right">
                  {patientHistoryVisit.map((record) => {
                    if (record.name === selectedPatient) {
                      return (
                        <Timeline.Item label={record.whenVisit}>
                          {record.doctorQualification}
                        </Timeline.Item>
                      );
                    }
                    return null;
                  })}
                </Timeline>
              </div>
            </>
          );
        }
        return null;
      })}
      <AddNoteForm />
    </Modal>
  );
}
