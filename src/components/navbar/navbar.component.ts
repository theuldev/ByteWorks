import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy, inject } from '@angular/core';
import { bootstrapMoon, bootstrapSun, bootstrapSunFill } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ThemeService } from '../../shared/services/theme.service';
import { error } from 'console';
import { tablerMoon } from '@ng-icons/tabler-icons';
import { matWbSunnyOutline } from '@ng-icons/material-icons/outline';
import { DomSanitizer } from '@angular/platform-browser';
import { matMenu } from '@ng-icons/material-icons/baseline';
@Component({
  selector: 'bw-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  viewProviders: [provideIcons({ bootstrapSun, tablerMoon,matWbSunnyOutline,matMenu })],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
isDarkMode!:boolean;
themeService!: ThemeService;

  constructor(private cdref: ChangeDetectorRef,private _themeService: ThemeService, private sanitizer : DomSanitizer  ) {
    this.themeService = _themeService;
   }
  //ngAfterViewInit() {
   // setTimeout(() => {
    //  if (window != null) { 
    //    this.isDarkMode = JSON.parse(localStorage.getItem('theme')!)
     //   this.cdref.detectChanges(); /*cdRef injected in constructor*/
     // }

    //}, 0);
  //}
  

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  goToElementWithScroll(event: any) {
    document.getElementById(event.srcElement.id + '_section')?.scrollIntoView();
  }



  toggleTheme() {
    this.themeService.toggleDarkMode(); 

    this.applyTheme();
  }
  applyTheme(): void{
    const darkMode = this.themeService.isDarkMode();
    const html = document.documentElement;
    if (darkMode) {
      html.classList.remove('light-mode');
      html.classList.add('dark-mode');
    
    } else {
      html.classList.remove('dark-mode');
      html.classList.add('light-mode');

    }
  }

}