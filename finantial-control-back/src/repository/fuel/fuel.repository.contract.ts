import { UpdateFuel } from 'src/dto/updateFuel.dto';
import { Fuel } from 'src/entity/Fuel';

export default interface IFuelRepository {
  create(data: Fuel): Promise<Fuel>;
  findAll(): Promise<Fuel[]>;
  update(id: string, data: UpdateFuel): Promise<Fuel>;
}
