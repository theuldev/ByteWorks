import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroChevronRightMini } from '@ng-icons/heroicons/mini';

@Component({
  selector: 'bw-button',
  standalone: true,
  imports: [CommonModule, NgIcon], viewProviders: [provideIcons({ heroChevronRightMini})],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
 @Input() text!:string;
 @Input() icon_name!:string;
 @Input() icon_size:string = "1rem";
 @Input() btn_width!: string;
 @Input() btn_height!: string;
 @Input() type!: string;
}
