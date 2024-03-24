import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';

@Component({
  selector: 'bw-demo',
  standalone: true,
  imports: [CommonModule,SectionComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {


}
