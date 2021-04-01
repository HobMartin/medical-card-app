import { IPatient } from "./interfaces/IPatient";
export async function postPatientToData(data: IPatient) {
  let res = await fetch("/stub/patient.json", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return await res.json();
}
