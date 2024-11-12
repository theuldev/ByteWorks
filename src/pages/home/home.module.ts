import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing-module';
import { WrapperComponent } from '../../components/wrapper/wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, HomeRoutingModule,WrapperComponent,NgbModule
  ]
})
export class HomeModule { }
