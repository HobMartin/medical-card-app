export async function doctorScheduleData() {
  let res = await fetch("/stub/doctorSchedule.json");
  return res.json();
}
