import { ChangeDetectorRef, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../shared/services/theme.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapWhatsapp } from '@ng-icons/bootstrap-icons';
import { text } from 'stream/consumers';
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'bw-wrapper',
  standalone: true,
  imports: [HeaderComponent, CommonModule, NgIcon, FooterComponent, NavbarComponent],viewProviders: [provideIcons({ bootstrapWhatsapp})],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent {
  text_message : string = 'Olá! Gostaria de obter mais informações sobre os serviços da BytesWork. Poderiam me ajudar?'
  link_whatsapp : string =  `https://api.whatsapp.com/send?phone=5571984219030&text=${this.text_message}`

}
