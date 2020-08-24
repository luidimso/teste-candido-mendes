import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './base/header/header.component';
import { NavbarComponent } from './base/navbar/navbar.component';
import { DeleteComponent } from './modals/delete/delete.component';
import { ViewComponent } from './modals/view/view.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    DeleteComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  entryComponents: [
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    DeleteComponent,
    ViewComponent
  ],
  exports:[
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    DeleteComponent,
    ViewComponent
  ]
})
export class ComponentsModule { }
