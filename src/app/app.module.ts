import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ViewComponent } from './components/view/view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewItemComponent } from './components/new-item/new-item.component';
import { SortPipe } from './pipes/sort/sort.pipe';
import { FilterCategoryPipe } from './pipes/filter-category.pipe';
import { FilterStockPipe } from './pipes/filterStock/filter-stock.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ViewComponent,
    NavbarComponent,
    NewItemComponent,
    SortPipe,
    FilterCategoryPipe,
    FilterStockPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
