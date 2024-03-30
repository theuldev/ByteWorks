import { Component, Input } from '@angular/core';
import { IPlan } from '../../shared/interfaces/IPlan';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { CommonModule } from '@angular/common';
import { bootstrapCheck, bootstrapCheckAll } from '@ng-icons/bootstrap-icons';
import {LOCALE_ID,DEFAULT_CURRENCY_CODE} from '@angular/core';
import { ButtonComponent } from '../button/button.component';
@Component({
  selector: 'bw-pricing-card',
  standalone: true,
  imports: [CommonModule,NgIconComponent,ButtonComponent], viewProviders: [provideIcons({ bootstrapCheck, })],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss'
})
export class PricingCardComponent {
  @Input('plan') plan!: IPlan;
}
