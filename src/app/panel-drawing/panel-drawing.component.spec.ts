import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDrawingComponent } from './panel-drawing.component';

describe('PanelDrawingComponent', () => {
  let component: PanelDrawingComponent;
  let fixture: ComponentFixture<PanelDrawingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelDrawingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelDrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
