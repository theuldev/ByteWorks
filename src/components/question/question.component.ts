import { Component, Input } from '@angular/core';
import { IQuestion } from '../../shared/interfaces/IQuestion';

@Component({
  selector: 'bw-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
@Input('question') question!:IQuestion;
}
