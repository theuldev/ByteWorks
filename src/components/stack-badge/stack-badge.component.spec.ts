import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackBadgeComponent } from './stack-badge.component';

describe('StackBadgeComponent', () => {
  let component: StackBadgeComponent;
  let fixture: ComponentFixture<StackBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackBadgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StackBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
