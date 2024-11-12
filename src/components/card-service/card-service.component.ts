import { Component, Input } from '@angular/core';
import { IService } from '../../shared/interfaces/IService';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { CommonModule } from '@angular/common';
import { bootstrapGear, bootstrapRobot, bootstrapTv } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'bw-card-service',
  standalone: true,
  imports: [NgIcon, CommonModule],viewProviders: [provideIcons({bootstrapGear,bootstrapRobot,bootstrapTv})],
  templateUrl: './card-service.component.html',
  styleUrl: './card-service.component.scss'
})
export class CardServiceComponent {
  @Input() item!: IService;
}
