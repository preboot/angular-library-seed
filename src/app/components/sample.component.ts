import {Component} from '@angular/core';

@Component({
  selector: 'my-sample',
  template: `
  <div class="sample">{{sample}}</div>
  `,
  styles: ['./sample.component.scss']
})
export class SampleComponent {
  public sample: string = 'Make an Angular Library. Go ahead. Make one :)';
}
