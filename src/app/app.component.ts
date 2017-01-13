import { Component } from '@angular/core';

import {SampleService} from './services/sample.service';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pipeTest: string = 'Create an amazing community by contributing a library';
  url: string = 'https://github.com/preboot/angular-library-seed';

  constructor(public sampleService: SampleService) {
    // Do something with sampleService
  }
}
