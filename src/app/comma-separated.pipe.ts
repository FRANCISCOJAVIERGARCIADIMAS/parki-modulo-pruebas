import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'commaSeparated' })
export class CommaSeparatedPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }
    const values = value.split(',');
    let result = '';
    for (const v of values) {
      result += v.trim() + '\n';
    }
    return result;
  }
}
