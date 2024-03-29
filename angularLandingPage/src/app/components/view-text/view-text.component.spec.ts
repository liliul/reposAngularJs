import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTextComponent } from './view-text.component';

describe('ViewTextComponent', () => {
  let component: ViewTextComponent;
  let fixture: ComponentFixture<ViewTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
