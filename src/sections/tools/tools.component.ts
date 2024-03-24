import { Component } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { returnToolsAdvantages } from '../../shared/interfaces/IToolsAdvantages';
import { CommonModule } from '@angular/common';
import {  NgIconComponent, provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { bootstrapCheck2 } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'bw-tools',
  standalone: true,
  imports: [SectionComponent,CommonModule,NgIconComponent],
  viewProviders: [provideIcons({ bootstrapCheck2,}), provideNgIconsConfig({
    size: '1.8em',
  })],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss'
})
export class ToolsComponent {
  tools_advantages = returnToolsAdvantages();

}
