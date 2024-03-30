import { Component } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { returnToolsAdvantages } from '../../shared/interfaces/IToolsAdvantages';
import { CommonModule } from '@angular/common';
import {  NgIconComponent, provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { heroChevronRightMini } from '@ng-icons/heroicons/mini';

@Component({
  selector: 'bw-tools',
  standalone: true,
  imports: [SectionComponent,CommonModule,NgIconComponent],
  viewProviders: [provideIcons({ heroChevronRightMini,})],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss'
})
export class ToolsComponent {
  //tools_advantages = returnToolsAdvantages();

}
