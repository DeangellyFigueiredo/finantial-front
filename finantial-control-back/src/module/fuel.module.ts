import { Module } from '@nestjs/common';
import { FuelController } from 'src/controller/fuel.controller';
import { FuelRepository } from 'src/repository/fuel/fuel.respository';
import { FuelService } from 'src/service/fuel.service';

@Module({
  controllers: [FuelController],
  providers: [
    FuelService,
    {
      provide: 'IFuelRepository',
      useClass: FuelRepository,
    },
  ],
  exports: [FuelService],
})
export class FuelModule {}
