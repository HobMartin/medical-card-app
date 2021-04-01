export async function doctorScheduleForDate(date: string) {
  let res = await fetch("/stub/doctorSchedule.json");
  const data = await res.json();

  return data.filter((item: any) => item.date === date);
}
