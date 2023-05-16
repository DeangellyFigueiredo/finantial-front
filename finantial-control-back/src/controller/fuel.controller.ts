import { Controller } from '@nestjs/common';
import { CreateFuelDto } from 'src/dto/createFuel.dto';
import { FuelService } from 'src/service/fuel.service';

@Controller('/api/fuel')
export class FuelController {
  constructor(private readonly fuelService: FuelService) {}

  @Post()
  async create(@Body() createFuelDto: CreateFuelDto): Promise<Fuel> {
    return await this.fuelService.create(createFuelDto);
  }
}
