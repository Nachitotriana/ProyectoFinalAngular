import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textosupper'
})
export class TextosupperPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.toUpperCase()
  }



}
