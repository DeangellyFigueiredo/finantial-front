import { Module } from '@nestjs/common';
import { FuelModule } from './fuel.module';
import { RepositoryModule } from './repository.module';
@Module({
  imports: [FuelModule, RepositoryModule],
})
export class AppModule {}
