import { Component, Input } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { IPlan, returnPlans } from '../../shared/interfaces/IPlan';
import { CommonModule } from '@angular/common';
import { PricingCardComponent } from '../../components/pricing-card/pricing-card.component';

@Component({
  selector: 'bw-plans',
  standalone: true,
  imports: [SectionComponent, CommonModule,PricingCardComponent],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent {
  plans: IPlan[] = returnPlans();
  

}
