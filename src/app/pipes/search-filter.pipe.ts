import { Pipe, PipeTransform } from '@angular/core';
import {IRequest} from "../models/IRequest";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {

    return value.filter(function(item:IRequest) {
      return item.title.toLowerCase().includes(filterString.toLowerCase()) || item.request.toLowerCase().includes(filterString.toLowerCase());
    });
  }

}
