import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(list: any[], searchTerm: string): any[] {
    if (!list || !searchTerm) {
      return list;
    }

    return list.filter(item => item.pname.includes(searchTerm) ||  item.qty == searchTerm  );
  }
}
  
