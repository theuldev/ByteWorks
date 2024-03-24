import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapWhatsapp } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronRightMini } from '@ng-icons/heroicons/mini';
import { matClose } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'bw-toast',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  viewProviders: [provideIcons({ bootstrapWhatsapp, matClose })],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {

}
