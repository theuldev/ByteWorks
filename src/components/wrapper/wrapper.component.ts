import { ChangeDetectorRef, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../shared/services/ThemeService';

@Component({
  selector: 'bw-wrapper',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent {
  isDarkMode: boolean = false;

  themeService!: ThemeService;
  constructor(private _themeService : ThemeService) {
    this.themeService = _themeService;

  }
}
