import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../../shared/services/theme.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'bw-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ByteWorks';

  constructor(private themeService: ThemeService, @Inject(PLATFORM_ID) private platformId: Object) {
    if (!isPlatformServer(this.platformId)) {
      this.applyTheme();
      // this.getMouseCoordinates();
    }
  }
  // getMouseCoordinates(){
  //     var source = fromEvent(document, 'mousemove');
  //     var subscription = source.subscribe(e => 
  //     {
  //       console.log(e)
        
  //     });
  // }

  applyTheme(): void {
    const darkMode = this.themeService.isDarkMode();
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark-mode');
    } else {
      html.classList.add('light-mode');
    }
  }
}
