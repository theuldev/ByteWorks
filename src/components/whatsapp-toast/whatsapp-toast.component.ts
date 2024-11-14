import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapWhatsapp } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'bw-whatsapp-toast',
  standalone: true,
  imports: [CommonModule, NgIcon ],viewProviders: [provideIcons({ bootstrapWhatsapp})],
  templateUrl: './whatsapp-toast.component.html',
  styleUrl: './whatsapp-toast.component.scss'
})
export class WhatsappToastComponent {
    text_message : string = 'Olá! Gostaria de obter mais informações sobre os serviços da BytesWork. Poderiam me ajudar?'
  link_whatsapp : string =  `https://api.whatsapp.com/send?phone=5571984219030&text=${this.text_message}`
}
