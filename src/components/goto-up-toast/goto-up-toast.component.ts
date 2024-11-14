import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapArrowUp } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'bw-goto-up-toast',
  standalone: true,
  imports:  [CommonModule, NgIcon ],viewProviders: [provideIcons({ bootstrapArrowUp})],
  templateUrl: './goto-up-toast.component.html',
  styleUrl: './goto-up-toast.component.scss'
})
export class GotoUpToastComponent {
  goToTop() {
    document.getElementById('marketing_section')?.scrollIntoView();
  }
}
