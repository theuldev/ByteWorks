import { Component } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { CardServiceComponent } from '../../components/card-service/card-service.component';
import { CardTestimonialsComponent } from '../../components/card-testimonials/card-testimonials.component';
import { IService, returnServices } from '../../shared/interfaces/IService';
import { ITestimonial, returnTestimonials } from '../../shared/interfaces/ITestimonial';

@Component({
  selector: 'bw-our-services-testimonials',
  standalone: true,
  imports: [SectionComponent,CardsComponent,CardServiceComponent,CardTestimonialsComponent],
  templateUrl: './our-services-testimonials.component.html',
  styleUrl: './our-services-testimonials.component.scss'
})
export class OurServicesTestimonialsComponent {
  testimonials: ITestimonial[] = returnTestimonials();
  services: IService[] = returnServices();
}
