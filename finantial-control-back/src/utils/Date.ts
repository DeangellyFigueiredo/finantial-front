import { HttpException, HttpStatus } from '@nestjs/common';
import { zonedTimeToUtc } from 'date-fns-tz';

interface DateStartEnd {
  start: Date;
  end: Date;
}

export function getDateInLocaleTime(date: Date): Date {
  const newDate = zonedTimeToUtc(date, 'UTC');

  return newDate;
}

export function getDateStartToEndOfDay(date: string): DateStartEnd {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  if (year < 2000 || year > 2100 || Number.isNaN(year))
    throw new HttpException(
      'Selecione uma data válida',
      HttpStatus.BAD_REQUEST,
    );
  const start = getDateInLocaleTime(
    new Date(
      newDate.getFullYear(),
      newDate.getMonth(),
      newDate.getUTCDate(),
      0,
      0,
      0,
      0,
    ),
  );
  const end = getDateInLocaleTime(
    new Date(
      newDate.getFullYear(),
      newDate.getMonth(),
      newDate.getUTCDate(),
      23,
      59,
      59,
      999,
    ),
  );
  //  add 4 hours to get the correct date

  return { start, end };
}

export function compareDates(dateInit: Date, dateFinal: Date) {
  const atual = getDateInLocaleTime(new Date(dateInit));
  const final = getDateInLocaleTime(new Date(dateFinal));
  return atual < final;
}

export function verifyDateFilter(date?: string) {
  if (date) {
    // verifica se a data em string é uma data válida
    const dateData = new Date(date);
    if (dateData.toString() === 'Invalid Date')
      throw new HttpException('Data inválida', HttpStatus.BAD_REQUEST);
  }
}

export function convertDate(date?: Date | string) {
  let convertedDate;
  if (typeof date === 'string') convertedDate = date;
  if (date instanceof Date) convertedDate = date.toISOString().split('T')[0];
  const dateParts = convertedDate.split('-');

  return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
}
