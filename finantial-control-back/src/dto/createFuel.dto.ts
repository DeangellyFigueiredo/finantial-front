import { Transform, TransformFnParams } from 'class-transformer';
import { IsDateString, IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class CreateFuelDto {
  @IsDateString()
  @IsDefined()
  dayOfRefill: string;
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  initialKm: string;
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  fuelGasoline: string;
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  fuelAlcohol: string;
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  valuePaid: string;
}
