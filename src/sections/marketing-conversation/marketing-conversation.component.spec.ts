import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingConversationComponent } from './marketing-conversation.component';

describe('MarketingConversationComponent', () => {
  let component: MarketingConversationComponent;
  let fixture: ComponentFixture<MarketingConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketingConversationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketingConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
