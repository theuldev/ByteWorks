import { Component } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { NgIconComponent, NgIconsModule, provideIcons } from '@ng-icons/core';
import { heroChevronRightMini } from '@ng-icons/heroicons/mini'
import { CommonModule } from '@angular/common';
import { bootstrapWhatsapp } from '@ng-icons/bootstrap-icons';
import {matClose} from '@ng-icons/material-icons/baseline'
import { ToastComponent } from '../../components/toast/toast.component';
import { ButtonComponent } from '../../components/button/button.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'bw-marketing-conversation',
  standalone: true,
  imports: [SectionComponent, NgIconComponent,CommonModule,ToastComponent,ButtonComponent],
  viewProviders: [provideIcons({ heroChevronRightMini})],

  templateUrl: './marketing-conversation.component.html',
  styleUrl: './marketing-conversation.component.scss'
})
export class MarketingConversationComponent {

constructor(private sanitizer : DomSanitizer  ) {
}
getSafeUrl(url: string) {
  return this.sanitizer.bypassSecurityTrustUrl(url);
}
  goToPlans() {
    document.getElementById('contact_section')?.scrollIntoView();
  }
}
