import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { ViewComponent } from './components/view/view.component';


const routes: Routes = [

  { path: 'main', component: MainComponent },
  { path: 'view', component: ViewComponent },
  { path: 'edit/:id', component: NewItemComponent },
  { path: 'add', component: NewItemComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
