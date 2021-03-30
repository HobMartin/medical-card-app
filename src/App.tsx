import React from "react";
import "./App.css";
import MainLayout from "./pages/MainLayout";
import PatientList from "./pages/PatientList";
import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router";
function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/patientlist" component={PatientList} />
      </Switch>
    </MainLayout>
  );
}

export default App;
