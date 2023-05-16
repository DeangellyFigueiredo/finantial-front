import { Module } from '@nestjs/common';
import { FuelController } from 'src/controller/fuel.controller';
import { FuelService } from 'src/service/fuel.service';

@Module({
  controllers: [FuelController],
  providers: [FuelService],
})
export class FuelModule {}
