import { Component, Input } from '@angular/core';
import { IProject } from '../../shared/interfaces/IProject';
import { StackBadgeComponent } from '../stack-badge/stack-badge.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bw-card-project',
  standalone: true,
  imports: [StackBadgeComponent,CommonModule],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss'
})
export class CardProjectComponent {
  @Input() project_item! : IProject;

}
