// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
    private darkModeSubject = new BehaviorSubject<boolean>(false);
    darkMode$ = this.darkModeSubject.asObservable();
  
    constructor() {}
  
    toggleDarkMode() {
      
      this.darkModeSubject.next(!this.darkModeSubject.value);
    }
  
    isDarkMode(): boolean {
      return this.darkModeSubject.value;
    }
}