import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateconverter'
})
export class DateconverterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
