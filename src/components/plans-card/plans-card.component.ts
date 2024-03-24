import { Component, Input } from '@angular/core';
import { IAdvantage, IPlan } from '../../shared/interfaces/IPlan';
import { CommonModule } from '@angular/common';
import { provideIcons, NgIconComponent, provideNgIconsConfig } from '@ng-icons/core';
import { bootstrapCheckAll, bootstrapCheckCircle } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'bw-plans-card',
  standalone: true,
  imports: [CommonModule,NgIconComponent], viewProviders: [provideIcons({ bootstrapCheckAll, })],
  templateUrl: './plans-card.component.html',
  styleUrl: './plans-card.component.scss'
})
export class PlansCardComponent {
  @Input('plan') plan!: IPlan;
  @Input('card_bg_color') card_bg_color: string = '#ffffff';
}
