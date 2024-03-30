import { Component } from '@angular/core';
import { WrapperComponent } from '../../components/wrapper/wrapper.component';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../components/section/section.component';
import { MarketingConversationComponent } from '../../sections/marketing-conversation/marketing-conversation.component';
import { PlansComponent } from '../../sections/plans/plans.component';
import { FaqComponent } from '../../sections/faq/faq.component';
import { ToolsComponent } from '../../sections/tools/tools.component';
import { ExamplesComponent } from '../../sections/examples/examples.component';
import { DemoComponent } from '../../sections/demo/demo.component';
import { ToastComponent } from '../../components/toast/toast.component';

@Component({
  selector: 'bw-home',
  standalone: true,
  imports: [CommonModule, WrapperComponent,MarketingConversationComponent,PlansComponent,FaqComponent,ToolsComponent,ExamplesComponent,DemoComponent,ToastComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
