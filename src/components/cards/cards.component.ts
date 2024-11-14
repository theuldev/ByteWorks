import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ContentChild, HostListener, Inject, Input, PLATFORM_ID, TemplateRef } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'bw-cards',
  standalone: true,
  imports: [CarouselComponent, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() list: any[] = [];
  @Input() showCarousel!: boolean;
  @Input() showArrows!: boolean;
  @ContentChild(TemplateRef) itemTemplate!: TemplateRef<any>;
  private readonly maxWidth: number = 992;
  isMobile: boolean = window.innerWidth < this.maxWidth;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }
  @HostListener('window:resize', [])
  onWindowResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }


  private checkScreenSize() {
    this.isMobile = window.innerWidth < this.maxWidth;
  }

  get shouldShowCarousel(): boolean {
    if (this.showCarousel) {
      return true; 
    }
    return this.isMobile; 
  }



}

