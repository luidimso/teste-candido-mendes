import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './base/header/header.component';
import { NavbarComponent } from './base/navbar/navbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  entryComponents: [
    HomeComponent,
    HeaderComponent,
    NavbarComponent
  ],
  exports:[
    HomeComponent,
    HeaderComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
