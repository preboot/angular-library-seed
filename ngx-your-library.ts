import { NgModule, ModuleWithProviders } from "@angular/core";
import { SampleComponent } from './src/app/components/sample.component';
import { SampleDirective } from './src/app/directives/sample.directive';
import { SamplePipe } from './src/app/pipes/sample.pipe';
import { SampleService } from './src/app/services/sample.service';

// for manual imports
export * from './src/app/components/sample.component';
export * from './src/app/directives/sample.directive';
export * from './src/app/pipes/sample.pipe';
export * from './src/app/services/sample.service';

@NgModule({
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ],
  providers: [
    SampleService
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ]
})
export class YourLibModule {

  /* optional: in case you need users to override your providers */
  static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
    return {
      ngModule: YourLibModule,
      providers: configuredProviders
    };
  }
}
