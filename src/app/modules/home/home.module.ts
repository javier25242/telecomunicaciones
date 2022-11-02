import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import { AboutUsModule } from '../about-us/about-us.module';



@NgModule({
  declarations: [HomeComponent,HeaderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AboutUsModule
  ]
})
export class HomeModule { }
