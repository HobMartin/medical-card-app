export async function patientHistoryVisitData() {
  let res = await fetch("/stub/patientsHistoryVisits.json");
  return res.json();
}
