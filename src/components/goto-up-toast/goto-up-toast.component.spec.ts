import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotoUpToastComponent } from './goto-up-toast.component';

describe('GotoUpToastComponent', () => {
  let component: GotoUpToastComponent;
  let fixture: ComponentFixture<GotoUpToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GotoUpToastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GotoUpToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
