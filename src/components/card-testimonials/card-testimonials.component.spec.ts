import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTestimonialsComponent } from './card-testimonials.component';

describe('CardTestimonialsComponent', () => {
  let component: CardTestimonialsComponent;
  let fixture: ComponentFixture<CardTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTestimonialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
