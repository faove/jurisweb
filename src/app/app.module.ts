import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { MattersComponent } from './matters/matters.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    CategoryComponent,
    HomeComponent,
    FormComponent,
    MattersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
