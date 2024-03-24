import { Component } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { CommonModule } from '@angular/common';
import {IExample, returnExamples } from '../../shared/interfaces/IExample'
import { NgIconComponent,provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { matHandshakeOutline,matCalendarTodayOutline } from '@ng-icons/material-icons/outline';
import {bootstrapCreditCard } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'bw-examples',
  standalone: true,
  imports: [SectionComponent, CommonModule,NgIconComponent],
  viewProviders: [provideIcons({ matHandshakeOutline,bootstrapCreditCard,matCalendarTodayOutline })],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss'
})
export class ExamplesComponent {
  examples :IExample[] = returnExamples();
  selectedItem: number = 1;

  getCurrentItem(index:number){
    console.log(index)

  }

}
