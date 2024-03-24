import { Component, Input } from '@angular/core';

@Component({
  selector: 'bw-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {

  @Input("section_name") section_name: string = '';
}
