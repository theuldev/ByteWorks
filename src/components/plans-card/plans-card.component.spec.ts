import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansCardComponent } from './plans-card.component';

describe('PlansCardComponent', () => {
  let component: PlansCardComponent;
  let fixture: ComponentFixture<PlansCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlansCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlansCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
