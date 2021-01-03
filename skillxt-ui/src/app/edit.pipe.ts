import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edit'
})
export class EditPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
