import { Component } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { NgIconComponent, NgIconsModule, provideIcons } from '@ng-icons/core';
import { heroChevronRightMini } from '@ng-icons/heroicons/mini'
import { CommonModule } from '@angular/common';
import { bootstrapWhatsapp } from '@ng-icons/bootstrap-icons';
import {matClose} from '@ng-icons/material-icons/baseline'

@Component({
  selector: 'bw-marketing-conversation',
  standalone: true,
  imports: [SectionComponent, NgIconComponent,CommonModule],
  viewProviders: [provideIcons({ heroChevronRightMini , bootstrapWhatsapp,matClose})],

  templateUrl: './marketing-conversation.component.html',
  styleUrl: './marketing-conversation.component.scss'
})
export class MarketingConversationComponent {


  goToPlans() {
    document.getElementById('plans_section')?.scrollIntoView();
  }
}
