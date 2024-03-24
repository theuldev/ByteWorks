import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing-module';
import { WrapperComponent } from '../../components/wrapper/wrapper.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, HomeRoutingModule,WrapperComponent
  ]
})
export class HomeModule { }
