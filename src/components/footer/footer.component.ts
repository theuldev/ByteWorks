import { Component } from '@angular/core';
import { bootstrapInstagram, bootstrapWhatsapp, bootstrapYoutube } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'bw-footer',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [provideIcons({ bootstrapInstagram,bootstrapYoutube})],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  link_instagram: string = "https://www.instagram.com/byteswork/"
  link_youtube: string = "https://www.youtube.com/@ByteWorks-v9h"
  link_whatsapp : string =  `https://api.whatsapp.com/send?phone=5571984219030`
  constructor() {
    
  }
}
