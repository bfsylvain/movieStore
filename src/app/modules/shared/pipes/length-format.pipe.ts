import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthFormat',
})
export class LengthFormatPipe implements PipeTransform {
  transform(length: number): string {
    let hours: string = `${Math.floor(length / 60)}h`;
    let minutes: string = '';
    let finalLength = '';

    if (length % 60 < 10) {
      minutes = `0${length % 60}`;
    } else {
      minutes = `${length % 60}`;
    }

    return `${hours}${minutes}`;
  }
}
