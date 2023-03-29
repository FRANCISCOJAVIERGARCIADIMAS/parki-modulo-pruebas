import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelVoiceComponent } from './panel-voice.component';

describe('PanelVoiceComponent', () => {
  let component: PanelVoiceComponent;
  let fixture: ComponentFixture<PanelVoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelVoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
