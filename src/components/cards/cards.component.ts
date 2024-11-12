import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'bw-cards',
  standalone: true,
  imports: [CarouselComponent,CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() list: any[] = [];
  @ContentChild(TemplateRef) itemTemplate!: TemplateRef<any>;
}
