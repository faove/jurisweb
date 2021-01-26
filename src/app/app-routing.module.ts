import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ServiceComponent } from './service/service.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'form', component: FormComponent},
  {path: 'form/:id', component: FormComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'service/:id', component: ServiceComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'category/:id', component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
