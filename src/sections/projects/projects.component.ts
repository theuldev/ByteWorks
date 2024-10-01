import { Component } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { IProject, returnProjects } from '../../shared/interfaces/IProject';
import { CommonModule } from '@angular/common';
import { CardProjectComponent } from '../../components/card-project/card-project.component';

@Component({
  selector: 'bw-projects',
  standalone: true,
  imports: [SectionComponent,CommonModule, CardProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: IProject[] = returnProjects();
}
