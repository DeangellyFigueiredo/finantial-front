import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/configs/database/prisma.service';
import { Fuel } from 'src/entity/Fuel';
import IFuelRepository from './fuel.repository.contract';

@Injectable()
export class FuelRepository implements IFuelRepository {
  constructor(private readonly repository: PrismaService) {}
  async create(data: Fuel): Promise<Fuel> {
    return await this.repository.fuel.create({
      data: {
        id: data.id,
        approximateKm: data.approximateKm ?? '',
        carPerformance: data.carPerformance ?? '',
        dayFuelEnds: data.dayFuelEnds ?? '',
        dayOfRefill: data.dayOfRefill,
        finalKm: data.finalKm ?? '',
        fuelAlcohol: data.fuelAlcohol ?? '0',
        fuelGasoline: data.fuelGasoline ?? '0',
        initialKm: data.initialKm,
        length: data.length ?? '0',
        totalFuel: data.totalFuel ?? '0',
        valuePaid: data.valuePaid,
        createdAt: data.createdAt,
      },
    });
  }

  findAll(): Promise<Fuel[]> {
    return this.repository.fuel.findMany();
  }

  async update(id: string, data: Fuel): Promise<Fuel> {
    return await this.repository.fuel.update({
      where: { id },
      data: {
        finalKm: data.finalKm,
      },
    });
  }
}
