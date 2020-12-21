import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  items: any = [];

  stockParam: boolean = false;
  sortParam: string = '';
  filterParam: string = '';

  constructor(
    private http: HttpService,
  ) { }

  async ngOnInit(){
    this.getItems();
  }

  async getItems(){
    await this.http.getItems().then( w => this.items = w ).catch( e => console.log(e) );
  }

  async onChangeCount( id, type: string ){
    let item = this.items.filter( ell => ell.id == id);
    item = item[0];
    if ( type == 'minus' )
      item.stock = item.stock - 1;
    else item.stock++

    await this.http.putItem( id, item ).then( async() => await this.getItems() )
  }

}
