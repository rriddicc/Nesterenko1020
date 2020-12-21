import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/API';

@Injectable({
  providedIn: 'root'
})
export class HttpService extends API {
  url = 'products/';
  httpHeaders: HttpHeaders;

  constructor(
    httpClient: HttpClient
  ) {
    super(httpClient);
    this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  }

  async getItems(){
    return await this.get( this.url, this.httpHeaders ).toPromise();
  }

  async getItem( id ){
    return await this.get( `${this.url}/${id}`, this.httpHeaders ).toPromise()
  }

  async deleteItem( id ){
    return await this.delete( `${this.url}/${id}`, this.httpHeaders ).toPromise();
  }

  async putItem( id, data ){
    return await this.put( `${this.url}/${id}`, data, this.httpHeaders ).toPromise();
  }

  async postItem( data ){
    return await this.post( this.url, data, this.httpHeaders ).toPromise();
  }


}
