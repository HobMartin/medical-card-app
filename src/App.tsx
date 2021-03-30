import React from "react";
import "./App.css";
import MainLayout from "./pages/MainLayout";
import PatientList from "./pages/PatientList";
function App() {
  return (
    <div className="App">
      <MainLayout>
        <PatientList />
      </MainLayout>
    </div>
  );
}

export default App;
