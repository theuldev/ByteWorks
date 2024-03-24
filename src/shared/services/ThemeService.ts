// theme.service.ts
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
     private isLocalStorageAvailable = typeof localStorage !== 'undefined';
    private darkModeSubject = new BehaviorSubject<boolean>( this.isLocalStorageAvailable ? JSON.parse(localStorage.getItem('theme')!) : false);
    darkMode$ = this.darkModeSubject.asObservable();
 
    constructor(
      @Inject(PLATFORM_ID) private platformId: Object) {
        
      }


  
    toggleDarkMode() {
      
      this.darkModeSubject.next(!this.darkModeSubject.value);
      localStorage.setItem('theme', this.darkModeSubject.value.toString())

 }
  
    isDarkMode(): boolean {
      return this.darkModeSubject.value;
    }
}