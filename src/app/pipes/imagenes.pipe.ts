import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenes'
})
export class ImagenesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    if (value.length == 0) {
      return 'assets/images/angular.jpg'
    }
    return value;
  }

}
