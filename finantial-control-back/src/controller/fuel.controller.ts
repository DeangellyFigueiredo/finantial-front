import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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

  @Patch('/:id')
  async update(
    @Body() createFuelDto: CreateFuelDto,
    @Param('id') id: string,
  ): Promise<Fuel> {
    return await this.fuelService.update(id, createFuelDto);
  }
}
