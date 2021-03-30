export async function patientData() {
  let res = await fetch("http://localhost:3000/stub/patient.json");
  return res.json();
}
