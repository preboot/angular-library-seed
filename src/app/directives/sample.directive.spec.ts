import { TestBed } from '@angular/core/testing';
import {Component} from '@angular/core';

import {SampleDirective} from './sample.directive';

describe('SampleDirective', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        SampleDirective
      ]
    });
  });

  it('should add a class', () => {
    let fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div').getAttribute('class')).toBe('sample-class');
  });

});

@Component({
  selector: 'my-test-cmp',
  template: `
  <div mySample></div>
  `
})
class TestComponent { }
