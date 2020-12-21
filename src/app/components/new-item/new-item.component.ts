import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit, OnDestroy {
  subscription;
  id: any;

  item: any;

  form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpService,
    private router: Router,
  ) {
    this.subscription = this.activatedRoute.params.subscribe( data => {
      this.id = data.id;
    });
   }

  async ngOnInit() {
    if (this.id)
      await this.getItem();
    let disabled = false;

    this.form = new FormGroup({
      name: new FormControl( { value: this.item ? this.item.name : '', disabled: disabled }, [ Validators.required ] ),
      price: new FormControl( { value: this.item ? this.item.price : '', disabled: disabled }, [ Validators.required, Validators.pattern('[0-9]*') ] ),
      weight: new FormControl( { value: this.item ? this.item.weight : '', disabled: disabled }, [ Validators.required, Validators.pattern('[0-9]*') ] ),
      stock: new FormControl( { value: this.item ? this.item.stock : '', disabled: disabled }, [ Validators.required, Validators.pattern('[0-9]*') ] ),
      madeBy: new FormControl( { value: this.item ? this.item.madeBy : '', disabled: disabled }, [ Validators.required ] ),
      article: new FormControl( { value: this.item ? this.item.article : '', disabled: disabled }, [ Validators.required ] ),
      category: new FormControl( { value: this.item ? this.item.category : 'phone', disabled: disabled }, [ Validators.required ] )
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  async getItem(){
    await this.http.getItem( this.id )
      .then( w => this.item = w);
  }

  async deleteItem(){
    await this.http.deleteItem(this.id).then( () => this.router.navigate( ['/view'] ) );
  }

  async postItem(){
    await this.http.postItem( this.form.value ).then( () => this.router.navigate( ['/view'] ) );
  }

  async putItem(){
    await this.http.putItem( this.id, this.form.value ).then( () => this.router.navigate( ['/view'] ) );
  }

}
