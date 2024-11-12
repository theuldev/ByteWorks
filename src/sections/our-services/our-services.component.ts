import { Component } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { CardServiceComponent } from '../../components/card-service/card-service.component';

import { CommonModule } from '@angular/common';
import { IService, returnServices } from '../../shared/interfaces/IService';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'bw-our-services',
  standalone: true,
  imports: [SectionComponent,CardServiceComponent,CommonModule, CardsComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {
  services: IService[] = returnServices();

}
