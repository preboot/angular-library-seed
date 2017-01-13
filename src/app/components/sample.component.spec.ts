import { TestBed } from '@angular/core/testing';

import { SampleComponent } from './sample.component';

describe('SampleComponent', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SampleComponent
      ]
    });
  });

  it('should have an url', () => {
    let fixture = TestBed.createComponent(SampleComponent);
    fixture.detectChanges();
    expect(fixture.debugElement.componentInstance.sample).toEqual('Make an Angular Library. Go ahead. Make one :)');
  });

});

