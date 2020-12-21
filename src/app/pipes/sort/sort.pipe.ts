import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any = [], param: string): unknown {

    if ( arr[0] && param ){
      
      let sort = arr.sort( (a, b) => {

          if (param == 'priceUp') {
            if ( Number(a.price) < Number(b.price) )
              return -1
            if ( Number(a.price) > Number(b.price) )
              return 1
            return 0;
          }else
          if ( param == 'priceDown' ){
            if ( Number(a.price) < Number(b.price) )
              return 1
            if ( Number(a.price) > Number(b.price) )
              return -1
            return 0;
          }else
          if ( param == 'stockUp' ){
            if ( Number(a.stock) < Number(b.stock) )
              return -1
            if ( Number(a.stock) > Number(b.stock) )
              return 1
            return 0;
          }else
          if ( param == 'stockDown' ){
            if ( Number(a.stock) < Number(b.stock) )
              return 1
            if ( Number(a.stock) > Number(b.stock) )
              return -1
            return 0;
          }

      })
      return sort;
    }

    return arr;
  }

}
