import { TestBed } from '@angular/core/testing';
import {Component} from '@angular/core';

import {SamplePipe} from './sample.pipe';

describe('SamplePipe', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        SamplePipe
      ]
    });
  });

  it('should make a comment', () => {
    let fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div').textContent)
      .toEqual(`Anything could be created...then pipe it to npm...that'd be a cool pipe eh!?! :)`);
  });

});

@Component({
  selector: 'my-test-cmp',
  template: `
  <div>{{'Anything could be created' | mySample}}</div>
  `
})
class TestComponent { }

