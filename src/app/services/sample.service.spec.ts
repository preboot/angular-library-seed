import {Injector} from '@angular/core';
import {SampleService} from './sample.service';
import {getTestBed, TestBed} from '@angular/core/testing';

describe('SampleService', () => {
    let injector: Injector;
    let sample: SampleService;

    beforeEach(() => {
        TestBed.configureTestingModule({
          providers: [
            SampleService
          ]
        });
        injector = getTestBed();
        sample = injector.get(SampleService);
    });

    afterEach(() => {
        injector = undefined;
        sample = undefined;
    });

    it('is defined', () => {
        expect(SampleService).toBeDefined();
        expect(sample).toBeDefined();
        expect(sample instanceof SampleService).toBeTruthy();
    });

    it('should ...', () => {
      expect(sample.title).toBe('Angular Library');
    });
});
