import { TestBed } from '@angular/core/testing';

import { PanelDrawingService } from './panel-drawing.service';

describe('PanelDrawingService', () => {
  let service: PanelDrawingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelDrawingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
