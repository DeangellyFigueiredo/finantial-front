import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFuelDto } from 'src/dto/createFuel.dto';
import { MappedFuel } from 'src/dto/mappedFuel.dto';
import { Fuel } from 'src/entity/Fuel';
import { FuelService } from 'src/service/fuel.service';

@Controller('/api/fuel')
export class FuelController {
  constructor(private readonly fuelService: FuelService) {}

  @Post()
  async create(@Body() createFuelDto: CreateFuelDto): Promise<Fuel> {
    return await this.fuelService.create(createFuelDto);
  }

  @Get()
  async findAll(): Promise<MappedFuel[]> {
    return await this.fuelService.findAll();
  }
}
