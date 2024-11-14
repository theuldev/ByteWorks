import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappToastComponent } from './whatsapp-toast.component';

describe('WhatsappToastComponent', () => {
  let component: WhatsappToastComponent;
  let fixture: ComponentFixture<WhatsappToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappToastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
