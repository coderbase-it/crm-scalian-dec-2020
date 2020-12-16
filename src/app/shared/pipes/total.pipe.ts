import { Pipe, PipeTransform } from '@angular/core';
import { isTemplateExpression } from 'typescript';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: number, coef: number, tva?: number): number {
    if (value && coef) {
      if (tva) {
        return value * coef * (1 + tva / 100);
      }
      return value * coef;
    }
    return 0;
  }

}
