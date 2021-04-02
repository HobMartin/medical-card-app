import React from "react";
import MainLayout from "./pages/MainLayout";
import PatientList from "./pages/PatientList";
import HomePage from "./pages/HomePage";
import { MyCard } from "./pages/MyCard";
import DoctorSchedule from "./pages/DoctorSchedule";
import { VisitsOnToday } from "./pages/VisitsOnToday";
import { Route, Switch } from "react-router";
import "./App.css";
function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/patientlist" component={PatientList} />
        <Route path="/schedule" component={DoctorSchedule} />
        <Route path="/visitstoday" component={VisitsOnToday} />
        <Route path="/mycard" component={MyCard} />
      </Switch>
    </MainLayout>
  );
}

export default App;
