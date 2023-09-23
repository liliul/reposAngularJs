import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderJsonComponent } from './render-json.component';

describe('RenderJsonComponent', () => {
  let component: RenderJsonComponent;
  let fixture: ComponentFixture<RenderJsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenderJsonComponent]
    });
    fixture = TestBed.createComponent(RenderJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
