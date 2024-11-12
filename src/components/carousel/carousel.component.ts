import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'bw-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      // Animação para a transição da direita (entrada do item da direita)
      transition('right => center', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      // Animação para a transição da esquerda (entrada do item da esquerda)
      transition('left => center', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      // Animação para sair para a direita (item indo para a direita)
      transition('center => right', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('400ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
      ]),
      // Animação para sair para a esquerda (item indo para a esquerda)
      transition('center => left', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('400ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class CarouselComponent {
  @Input() list: any[] = [];
  @Input() itemTemplate: TemplateRef<any> | null = null;
  currentIndex = 0;
  touchStartX = 0;
  touchEndX = 0;
  swipeThreshold = 50;
  direction: 'left' | 'right' | 'center' = 'center';

  // Detectar início do toque
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].pageX;
  }

  // Detectar fim do toque e verificar direção
  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].pageX;
    const deltaX = this.touchStartX - this.touchEndX;

    if (Math.abs(deltaX) > this.swipeThreshold) {
      if (deltaX > 0) {
        // Arrastou para a esquerda
        this.slideTo(this.currentIndex + 1, 'left');
      } else {
        // Arrastou para a direita
        this.slideTo(this.currentIndex - 1, 'right');
      }
    }
  }


  slideTo(index: number, direction: 'left' | 'right' | 'center') {
    console.log(`Direção: ${direction}`);
    if (index >= 0 && index < this.list.length) {
      // Se direção for inválida, use 'center' como padrão
      this.direction = direction || 'center';  // 'center' será o fallback
      console.log(`Atualizando para o índice: ${index} com direção: ${this.direction}`);
      this.currentIndex = index;
    }
  }
  
  
  
}
