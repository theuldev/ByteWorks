import { Component } from '@angular/core';
import { CardTestimonialsComponent } from "../../components/card-testimonials/card-testimonials.component";
import { CommonModule } from '@angular/common';
import { ITestimonial, returnTestimonials } from '../../shared/interfaces/ITestimonial';
import { SectionComponent } from '../../components/section/section.component';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'bw-testimonials',
  standalone: true,
  imports: [CardTestimonialsComponent,CommonModule,SectionComponent, CardsComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials: ITestimonial[] = returnTestimonials();
}
