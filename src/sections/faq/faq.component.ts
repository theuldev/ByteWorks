import { Component } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from '../../components/question/question.component';
import { IQuestion, returnQuestions } from '../../shared/interfaces/IQuestion';

@Component({
  selector: 'bw-faq',
  standalone: true,
  imports: [SectionComponent,CommonModule,QuestionComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  questions: IQuestion[] = returnQuestions();

}
