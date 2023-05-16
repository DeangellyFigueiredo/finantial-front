import { Inject, Injectable } from '@nestjs/common';
import { CreateFuelDto } from 'src/dto/createFuel.dto';
import { MappedFuel } from 'src/dto/mappedFuel.dto';
import { Fuel } from 'src/entity/Fuel';
import IFuelRepository from 'src/repository/fuel/fuel.repository.contract';

@Injectable()
export class FuelService {
  constructor(
    @Inject('IFuelRepository')
    private readonly fuelRepository: IFuelRepository,
  ) {}

  async create(createFuelDto: CreateFuelDto): Promise<any> {
    return await this.fuelRepository.create(new Fuel({ ...createFuelDto }));
  }

  async findAll(): Promise<MappedFuel[]> {
    const items = await this.fuelRepository.findAll();
    return this.mappedFuel(items);
  }

  private mappedFuel(fuel: Fuel[]): MappedFuel[] {
    return fuel.map((item) => {
      return {
        id: item.id,
        dayOfRefill: item.dayOfRefill,
        dayFuelEnds: item.dayFuelEnds,
        initialKm: item.initialKm,
        finalKm: item.finalKm,
        approximateKm: item.approximateKm,
        fuelGasoline: item.fuelGasoline,
        fuelAlcohol: item.fuelAlcohol,
        totalFuel: item.fuelGasoline + item.fuelAlcohol,
        length: Number(item.finalKm) - Number(item.initialKm),
        valuePaid: item.valuePaid,
        carPerformance:
          (Number(item.finalKm) - Number(item.initialKm)) /
          (Number(item.fuelGasoline) + Number(item.fuelAlcohol)),
      };
    });
  }
}
