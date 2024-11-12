import { Component, Input } from '@angular/core';
import { ITestimonial } from '../../shared/interfaces/ITestimonial';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapQuote } from '@ng-icons/bootstrap-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bw-card-testimonials',
  standalone: true,
  imports: [NgIcon, CommonModule],viewProviders: [provideIcons({bootstrapQuote})],
  templateUrl: './card-testimonials.component.html',
  styleUrl: './card-testimonials.component.scss'
})
export class CardTestimonialsComponent {
  @Input('item') testimonial!: ITestimonial

}
