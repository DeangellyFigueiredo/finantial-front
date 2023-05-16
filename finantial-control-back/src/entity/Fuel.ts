import { getDateInLocaleTime } from 'src/utils/Date';
import { v4 as uuid } from 'uuid';

export class Fuel {
  id: string;
  dayOfRefill: string;
  dayFuelEnds: string;
  initialKm: string;
  finalKm: string;
  approximateKm: string;
  fuelGasoline: string;
  fuelAlcohol: string;
  totalFuel: string;
  length: string;
  valuePaid: string;
  carPerformance: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(props: Omit<Fuel, 'id' | 'createdAt'>, id?: string) {
    Object.assign(this, props);
    this.createdAt = getDateInLocaleTime(new Date());
    this.id = id ?? uuid();
  }
}
