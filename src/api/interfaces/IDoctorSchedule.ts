export interface IDoctorSchedule {
  id: number;
  name: string;
  type: "success" | "warning";
  date: string;
  time: string;
}
