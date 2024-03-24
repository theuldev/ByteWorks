import { Component, Input } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { IPlan, returnPlans } from '../../shared/interfaces/IPlan';
import { CommonModule } from '@angular/common';
import { PlansCardComponent } from '../../components/plans-card/plans-card.component';

@Component({
  selector: 'bw-plans',
  standalone: true,
  imports: [SectionComponent, CommonModule,PlansCardComponent],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent {
  plans: IPlan[] = returnPlans();
  

}
