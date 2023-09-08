import { Pipe, PipeTransform } from '@angular/core';

interface Server {
  instanceType: string;
  name: string;
  status: string;
  started: Date;
}
@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: Server[], name: string): Server[] {
    return value.sort((a, b) => a[name].localeCompare(b[name]));
  }

}
