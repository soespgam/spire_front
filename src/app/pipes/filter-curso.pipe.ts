import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCurso'
})
export class FilterCursoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
