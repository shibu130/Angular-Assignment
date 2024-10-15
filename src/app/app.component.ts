import { AfterViewInit, Component } from '@angular/core';

declare var $: any;  // Declare jQuery for use

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements AfterViewInit{


  title = 'project';

  ngAfterViewInit(): void {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
    //throw new Error('Method not implemented.');
  }
}
