import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesTestimonialsComponent } from './our-services-testimonials.component';

describe('OurServicesTestimonialsComponent', () => {
  let component: OurServicesTestimonialsComponent;
  let fixture: ComponentFixture<OurServicesTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurServicesTestimonialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurServicesTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
