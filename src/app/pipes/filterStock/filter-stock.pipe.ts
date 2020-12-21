import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStock'
})
export class FilterStockPipe implements PipeTransform {

  transform( arr: any = [], param: boolean ): unknown {

    if ( arr[0] && param ){

      
      let filter = arr.filter( ell => Number(ell.stock) > 0 )

      return filter;

    }

    return arr;
  }

}
