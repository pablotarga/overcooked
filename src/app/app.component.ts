import { Component } from '@angular/core';
import { PageConfigService } from './page-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Overcooked';
  vm:PageConfigService;

  constructor(page: PageConfigService){
    this.vm = page;
  }
}
