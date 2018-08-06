import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoDone'
})
export class TodoDonePipe implements PipeTransform {

  transform(todoDone: boolean, displayNotDone: boolean): any {
    if(todoDone)
    {
      return 'Finidhed';
    }
    else if(displayNotDone)
    {
      return 'Not Finidhed';
    }
    return '';
  }

}
