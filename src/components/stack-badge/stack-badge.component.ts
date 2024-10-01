import { Component, Input } from '@angular/core';

@Component({
  selector: 'bw-stack-badge',
  standalone: true,
  imports: [],
  templateUrl: './stack-badge.component.html',
  styleUrl: './stack-badge.component.scss'
})
export class StackBadgeComponent {
  @Input() stack: string = "";
}
