import { TestBed } from '@angular/core/testing';

import { PanelVoiceService } from './panel-voice.service';

describe('PanelVoiceService', () => {
  let service: PanelVoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelVoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
