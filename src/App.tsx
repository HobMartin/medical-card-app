import React from "react";
import "./App.css";
import MainLayout from "./pages/MainLayout";
import PatientList from "./pages/PatientList";
import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router";
import { DoctorSchedule } from "./pages/DoctorSchedule";
function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/patientlist" component={PatientList} />
        <Route path="/schedule" component={DoctorSchedule} />
      </Switch>
    </MainLayout>
  );
}

export default App;
