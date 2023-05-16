import { Fuel } from 'src/entity/Fuel';

export default interface IFuelRepository {
  create(data: Fuel): Promise<Fuel>;
  findAll(): Promise<Fuel[]>;
}
