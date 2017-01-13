import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { SampleComponent } from './components/sample.component';
import { SampleDirective } from './directives/sample.directive';
import { SamplePipe } from './pipes/sample.pipe';
import { SampleService } from './services/sample.service';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SampleComponent, SampleDirective, SamplePipe
      ],
      providers: [SampleService]
    });
  });

  it('should have an url', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.debugElement.componentInstance.url).toEqual('https://github.com/preboot/angular-library-seed');
  });

});
