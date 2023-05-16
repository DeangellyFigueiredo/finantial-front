import { FuelHistory } from "@/app/interface/fuelHistory";
import { api } from "../api";

export function CreateFuel(data: any) {
  const payload = {
    ...data,
  };
  console.log(payload);
  return api.post("/api/fuel/", payload);
}

export function ListFuel() {
  return api.get("/api/fuel/");
}

export function UpdateFuel(data: Partial<FuelHistory>) {
  return api.patch(`/api/fuel/${data.id}/`, data);
}
