export async function patientsData() {
  let res = await fetch("/stub/patient.json");
  return res.json();
}
