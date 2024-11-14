import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapArrowLeft, bootstrapArrowRight } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'bw-carousel',
  standalone: true,
  imports: [CommonModule, NgIcon],
  viewProviders: [provideIcons({ bootstrapArrowLeft, bootstrapArrowRight })],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('left-in => *', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.8s ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition('right-in => *', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.8s ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition('* => left-out', [
        animate('0.8s ease-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ]),

      transition('* => right-out', [
        animate('0.8s ease-out', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class CarouselComponent {
  @Input() list: any[] = [];
  @Input() itemTemplate: TemplateRef<any> | null = null;
  @Input() showArrows: boolean = false;
  currentIndex = 0;
  touchStartX = 0;
  touchEndX = 0;
  swipeThreshold = 50;
  direction: 'left-out' | 'right-out' | 'left-in' | 'right-in' = 'left-in';

  private animationInProgress = false;

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].pageX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].pageX;
    const deltaX = this.touchStartX - this.touchEndX;

    if (Math.abs(deltaX) > this.swipeThreshold) {
      if (deltaX > 0) {
        this.slideTo(this.currentIndex + 1, 'left');
      } else {
        this.slideTo(this.currentIndex - 1, 'right');
      }
    }
  }

  slideTo(index: number, direction: 'left' | 'right') {
    if (index >= 0 && index < this.list.length && !this.animationInProgress) {
      this.animationInProgress = true;

      this.direction = direction === 'left' ? 'right-out' : 'left-out';
      setTimeout(() => {
        this.currentIndex = index;
        this.direction = direction === 'left' ? 'left-in' : 'right-in';
        setTimeout(() => {
          this.animationInProgress = false;
        }, 800);
      }, 800);  
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.slideTo(this.currentIndex - 1, 'left');
    }
  }

  nextSlide() {
    if (this.currentIndex < this.list.length - 1) {
      this.slideTo(this.currentIndex + 1, 'right');
    }
  }
}
